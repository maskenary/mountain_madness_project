(function () {
  // ——— Garage door landing: drag from bottom to reveal page ———
  const garageDoor = document.getElementById("garage-door");
  const garageHandle = document.getElementById("garage-drag-handle");

  let doorOffset = 0;
  let maxOffset = function () {
    return window.innerHeight;
  };
  let isDragging = false;
  let startY = 0;
  let startOffset = 0;

  function setDoorTransform(offsetPx) {
    if (!garageDoor) return;
    doorOffset = Math.max(0, Math.min(offsetPx, maxOffset()));
    garageDoor.style.transform = "translateY(" + -doorOffset + "px)";
    if (doorOffset >= maxOffset() * 0.99) {
      garageDoor.classList.add("open");
      garageDoor.setAttribute("aria-hidden", "true");
    } else {
      garageDoor.classList.remove("open");
    }
  }

  function startDrag(clientY) {
    isDragging = true;
    startY = clientY;
    startOffset = doorOffset;
    garageDoor.classList.remove("open");
    garageDoor.style.transition = "none";
  }

  function moveDrag(clientY) {
    if (!isDragging) return;
    var delta = startY - clientY;
    setDoorTransform(startOffset + delta);
  }

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    garageDoor.style.transition = "";
    var threshold = maxOffset() * 0.4;
    if (doorOffset > threshold) {
      garageDoor.classList.add("open");
      setDoorTransform(maxOffset());
    } else {
      setDoorTransform(0);
    }
  }

  if (garageHandle && garageDoor) {
    garageHandle.addEventListener("mousedown", function (e) {
      e.preventDefault();
      startDrag(e.clientY);
    });
    document.addEventListener("mousemove", function (e) {
      moveDrag(e.clientY);
    });
    document.addEventListener("mouseup", endDrag);
    document.addEventListener("mouseleave", endDrag);

    garageHandle.addEventListener("touchstart", function (e) {
      if (e.touches.length) startDrag(e.touches[0].clientY);
    }, { passive: true });
    document.addEventListener("touchmove", function (e) {
      if (isDragging && e.touches.length) {
        e.preventDefault();
        moveDrag(e.touches[0].clientY);
      }
    }, { passive: false });
    document.addEventListener("touchend", endDrag);
    document.addEventListener("touchcancel", endDrag);
  }

  window.addEventListener("resize", function () {
    if (doorOffset >= maxOffset()) setDoorTransform(maxOffset());
    else setDoorTransform(doorOffset);
  });

  // Flashlight overlay: radial gradient follows mouse
  const overlay = document.getElementById("flashlight-overlay");
  if (overlay) {
    function setMousePosition(e) {
      overlay.style.setProperty("--mouse-x", e.clientX + "px");
      overlay.style.setProperty("--mouse-y", e.clientY + "px");
    }
    document.addEventListener("mousemove", setMousePosition);
    document.addEventListener("touchmove", function (e) {
      if (e.touches.length) {
        overlay.style.setProperty("--mouse-x", e.touches[0].clientX + "px");
        overlay.style.setProperty("--mouse-y", e.touches[0].clientY + "px");
      }
    });
  }

  // ——— Vroom-to-Scroll (Web Audio API) ——— R / N / D gear
  const LOW_HZ = 80;
  const HIGH_HZ = 200;
  const VOLUME_THRESHOLD = 140;
  const CONSISTENT_FRAMES = 8;
  const SCROLL_AMOUNT = 75;
  const SCROLL_IN_SHAKE_ZONE_RATIO = 0.4;
  const MOVING_LIGHT_MS = 380;
  const PITCH_FOR_RPM = { minHz: 70, maxHz: 280 };
  const VOL_FOR_RPM = { min: 30, max: 200 };

  const gearPanel = document.getElementById("gear-panel");
  const gearMovingLight = document.getElementById("gear-moving-light");
  const gearBtns = document.querySelectorAll(".gear-btn");

  let gear = "N";
  let audioContext = null;
  let analyser = null;
  let stream = null;
  let rafId = null;
  let frequencyData = null;
  let lowBin = 0;
  let highBin = 0;
  let framesAboveThreshold = 0;

  // high beam state
  let highBeamOn = false;
  let highBeamLevel = 100; // percent
  const HIGHBEAM_DEPLETION_RATE = 20; // percent/sec
  const HIGHBEAM_RECOVERY_RATE = 15; // percent/sec
  let highBeamBtn = null;
  let highBeamLevelEl = null;
  let overlayEl = null;
  let movingLightTimeout = null;
  let displayedRpmT = 0;
  const RPM_DECAY = 0.985;
  const timeData = new Float32Array(2048);
  const PITCH_MIN_LAG = 40;
  const PITCH_MAX_LAG = 600;

  function getPitchHz(buffer, sampleRate) {
    var len = buffer.length;
    var minLag = PITCH_MIN_LAG;
    var maxLag = Math.min(PITCH_MAX_LAG, (len >> 1) - 1);
    var bestLag = minLag;
    var bestCorr = -1;
    for (var lag = minLag; lag <= maxLag; lag++) {
      var corr = 0;
      for (var i = 0; i < len - lag; i++) corr += buffer[i] * buffer[i + lag];
      if (corr > bestCorr) { bestCorr = corr; bestLag = lag; }
    }
    return bestCorr > 0 ? sampleRate / bestLag : 0;
  }

  function binForHz(hz, fftSize, sampleRate) {
    return Math.min(
      Math.floor((hz * fftSize) / sampleRate),
      (fftSize >> 1) - 1
    );
  }

  function setGear(value) {
    gear = value;
    gearBtns.forEach(function (btn) {
      const isSelected = btn.getAttribute("data-gear") === gear;
      btn.classList.toggle("selected", isSelected);
      btn.setAttribute("aria-pressed", isSelected);
    });
    if (gearPanel) {
      gearPanel.classList.remove("gear-drive", "gear-reverse");
      if (gear === "D") gearPanel.classList.add("gear-drive");
      else if (gear === "R") gearPanel.classList.add("gear-reverse");
    }
    if (gear === "N") {
      stopEngine();
    } else {
      startEngine();
    }
  }

  function showMovingLight() {
    if (!gearMovingLight) return;
    if (movingLightTimeout) clearTimeout(movingLightTimeout);
    gearMovingLight.classList.add("on");
    movingLightTimeout = setTimeout(function () {
      gearMovingLight.classList.remove("on");
      movingLightTimeout = null;
    }, MOVING_LIGHT_MS);
  }

  function startEngine() {
    if (gear !== "R" && gear !== "D") return;
    if (stream && audioContext) return;

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (mediaStream) {
        stream = mediaStream;
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContextClass();
        const source = audioContext.createMediaStreamSource(stream);
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 2048;
        analyser.smoothingTimeConstant = 0.6;
        source.connect(analyser);

        const sampleRate = audioContext.sampleRate;
        const fftSize = analyser.fftSize;
        lowBin = binForHz(LOW_HZ, fftSize, sampleRate);
        highBin = binForHz(HIGH_HZ, fftSize, sampleRate);
        frequencyData = new Uint8Array(analyser.frequencyBinCount);

        var rpmNeedle = document.getElementById("rpm-needle");

        function tick() {
          if (!analyser || (gear !== "R" && gear !== "D")) return;
          analyser.getByteFrequencyData(frequencyData);
          analyser.getFloatTimeDomainData(timeData);
          var sum = 0;
          var count = 0;
          for (var i = lowBin; i <= highBin; i++) {
            sum += frequencyData[i];
            count++;
          }
          var level = count > 0 ? sum / count : 0;
          var pitchHz = getPitchHz(timeData, audioContext.sampleRate);
          var pitchT = pitchHz <= PITCH_FOR_RPM.minHz ? 0 : Math.min(1, (pitchHz - PITCH_FOR_RPM.minHz) / (PITCH_FOR_RPM.maxHz - PITCH_FOR_RPM.minHz));
          var volT = level <= VOL_FOR_RPM.min ? 0 : Math.min(1, (level - VOL_FOR_RPM.min) / (VOL_FOR_RPM.max - VOL_FOR_RPM.min));
          var currentRpmT = pitchT * (0.25 + 0.75 * volT);

          if (level >= VOLUME_THRESHOLD) {
            framesAboveThreshold++;
            if (framesAboveThreshold >= CONSISTENT_FRAMES) {
              var inShakeZone = false;
              var triggers = document.querySelectorAll(".road-trigger");
              for (var ti = 0; ti < triggers.length; ti++) {
                var tr = triggers[ti].getBoundingClientRect();
                if (tr.bottom > 0 && tr.top < window.innerHeight) {
                  inShakeZone = true;
                  break;
                }
              }
              var amount = inShakeZone ? SCROLL_AMOUNT * SCROLL_IN_SHAKE_ZONE_RATIO : SCROLL_AMOUNT;
              if (gear === "D") {
                window.scrollBy({ top: amount, behavior: "smooth" });
              } else if (gear === "R") {
                window.scrollBy({ top: -amount, behavior: "smooth" });
              }
              showMovingLight();
              framesAboveThreshold = 0;
              displayedRpmT = currentRpmT;
            }
          } else {
            framesAboveThreshold = 0;
            displayedRpmT = Math.max(0, displayedRpmT * RPM_DECAY);
          }

          var deg = -90 + displayedRpmT * 180;
          if (rpmNeedle) rpmNeedle.style.transform = "rotate(" + deg + "deg)";

          rafId = requestAnimationFrame(tick);
        }
        rafId = requestAnimationFrame(tick);
      })
      .catch(function (err) {
        console.warn("Microphone access denied or unavailable.", err);
        setGear("N");
      });
  }

  function stopEngine() {
    if (rafId != null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    if (stream) {
      stream.getTracks().forEach(function (t) {
        t.stop();
      });
      stream = null;
    }
    if (audioContext) {
      audioContext.close().catch(function () {});
      audioContext = null;
    }
    analyser = null;
    frequencyData = null;
    framesAboveThreshold = 0;
    if (movingLightTimeout) {
      clearTimeout(movingLightTimeout);
      movingLightTimeout = null;
    }
    if (gearMovingLight) gearMovingLight.classList.remove("on");
    displayedRpmT = 0;
    var rn = document.getElementById("rpm-needle");
    if (rn) rn.style.transform = "rotate(-90deg)";
  }

  // deadbug: random interval 800m–1200m; dismiss by clicking the bug
  var _deadbugMetersAccum = 0;
  var _deadbugLastY = window.scrollY || document.documentElement.scrollTop;
  var _deadbugNextAtMeters = 800 + Math.random() * 400;

  function showDeadbug() {
    var img = document.getElementById('deadbug');
    var door = document.getElementById('garage-door');
    if (!img) return;
    img.classList.add('show');
    if (door) door.classList.add('hidden');
<<<<<<< HEAD
=======
    // wait for user click to hide
    function hideOnClick() {
      img.classList.remove('show');
      if (door) door.classList.remove('hidden');
      document.removeEventListener('click', hideOnClick);
    }
    document.addEventListener('click', hideOnClick, { once: true });
>>>>>>> 8a6b446bd0f0a393cce1c8547a18245afc9737ae
  }

  function hideDeadbug() {
    var img = document.getElementById('deadbug');
    var door = document.getElementById('garage-door');
    if (img) img.classList.remove('show');
    if (door) door.classList.remove('hidden');
  }

  function checkDeadbug(maxScroll, totalKm, scrollY) {
    if (totalKm <= 0 || maxScroll <= 0) return;
    var currentY = scrollY;
    var delta = currentY - _deadbugLastY;
    if (delta > 0) {
      var metersPerPx = (totalKm * 1000) / maxScroll;
      _deadbugMetersAccum += delta * metersPerPx;
      if (_deadbugMetersAccum >= _deadbugNextAtMeters) {
        showDeadbug();
        _deadbugMetersAccum = 0;
        _deadbugNextAtMeters = 800 + Math.random() * 400;
      }
    }
    _deadbugLastY = currentY;
  }

  (function initDeadbugClick() {
    var img = document.getElementById('deadbug');
    if (img) img.addEventListener('click', hideDeadbug);
  })();

  function updateNavAndRemaining() {
    var maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    var scrollY = window.scrollY || document.documentElement.scrollTop;
    var progress = maxScroll > 0 ? Math.min(1, scrollY / maxScroll) : 0;
    var totalKm = (maxScroll / window.innerHeight) * 0.45;
    try { checkDeadbug(maxScroll, totalKm, scrollY); } catch (err) { /* ignore */ }
    var remainingKm = totalKm * (1 - progress);
    var navArrow = document.getElementById("nav-arrow");
    var navRemaining = document.getElementById("nav-remaining");
    if (navArrow) navArrow.style.setProperty("--nav-progress", String(progress));
    if (navRemaining) {
      if (remainingKm <= 0 || progress >= 0.999) navRemaining.textContent = "0 m left";
      else if (remainingKm < 1) navRemaining.textContent = (remainingKm * 1000).toFixed(0) + " m left";
      else navRemaining.textContent = remainingKm.toFixed(1) + " km left";
    }
  }
  window.addEventListener("scroll", updateNavAndRemaining, { passive: true });
  window.addEventListener("resize", updateNavAndRemaining);
  updateNavAndRemaining();

  // Disable manual scrolling
  function preventScroll(e) {
    e.preventDefault();
  }

  document.addEventListener("wheel", preventScroll, { passive: false });
  document.addEventListener("touchmove", preventScroll, { passive: false });
  document.addEventListener("keydown", function (e) {
    if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
      preventScroll(e);
    }
  }, { passive: false });

  if (gearBtns.length) {
    gearBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const g = btn.getAttribute("data-gear");
        if (g === "R" || g === "N" || g === "D") setGear(g);
      });
    });
  }

  // high beam UI setup
  highBeamBtn = document.getElementById('highbeam-btn');
  highBeamLevelEl = document.getElementById('highbeam-level');
  overlayEl = document.getElementById('flashlight-overlay');
  if (highBeamBtn) {
    highBeamBtn.addEventListener('click', function () {
      if (highBeamOn) {
        toggleHighBeam(false);
      } else if (highBeamLevel > 0) {
        toggleHighBeam(true);
      }
    });
  }

  function toggleHighBeam(on) {
    highBeamOn = on;
    if (highBeamBtn) highBeamBtn.setAttribute('aria-pressed', String(on));
    if (overlayEl) {
      if (on) {
        overlayEl.style.setProperty('--beam-inner', '220px');
        overlayEl.style.setProperty('--beam-outer', '300px');
      } else {
        overlayEl.style.setProperty('--beam-inner', '140px');
        overlayEl.style.setProperty('--beam-outer', '180px');
      }
    }
  }

  // animation loop for gauge and beam
  function highBeamLoop(timestamp) {
    var delta = 0;
    if (highBeamLoop.last) delta = (timestamp - highBeamLoop.last) / 1000;
    highBeamLoop.last = timestamp;
    if (highBeamOn) {
      highBeamLevel -= HIGHBEAM_DEPLETION_RATE * delta;
      if (highBeamLevel <= 0) {
        highBeamLevel = 0;
        toggleHighBeam(false);
      }
    } else {
      highBeamLevel = Math.min(100, highBeamLevel + HIGHBEAM_RECOVERY_RATE * delta);
    }
    if (highBeamLevelEl) {
      highBeamLevelEl.style.width = highBeamLevel + '%';
    }
    requestAnimationFrame(highBeamLoop);
  }
  requestAnimationFrame(highBeamLoop);

  // When burger ad section (road-trigger) enters viewport, shake #shake-wrapper only (nav/rpm/gear stay fixed). Stronger when ad is centered.
  (function () {
    var wrapper = document.getElementById("shake-wrapper");
    var triggers = document.querySelectorAll(".road-trigger");
    if (!wrapper || !triggers.length) return;
    function getShakeIntensity() {
      var vh = window.innerHeight / 2;
      var best = 0;
      for (var i = 0; i < triggers.length; i++) {
        var r = triggers[i].getBoundingClientRect();
        if (r.bottom <= 0 || r.top >= window.innerHeight) continue;
        var adCenterY = (r.top + r.bottom) / 2;
        var dist = Math.abs(adCenterY - vh);
        var t = Math.max(0, 1 - dist / vh);
        var intensity = t * t;
        if (intensity > best) best = intensity;
      }
      return best;
    }
    function updateShake() {
      var inView = false;
      for (var i = 0; i < triggers.length; i++) {
        var r = triggers[i].getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) {
          inView = true;
          break;
        }
      }
      if (inView) {
        wrapper.classList.add("road-shake");
        wrapper.style.setProperty("--shake", String(getShakeIntensity()));
      } else {
        wrapper.classList.remove("road-shake");
      }
    }
    var observer = new IntersectionObserver(
      function () {
        updateShake();
      },
      { threshold: 0, rootMargin: "0px" }
    );
    triggers.forEach(function (t) {
      observer.observe(t);
    });
    window.addEventListener("scroll", function () {
      if (wrapper.classList.contains("road-shake")) {
        // add slight random jitter to intensity for erratic effect
        var base = getShakeIntensity();
        var jitter = 0.6 + Math.random() * 0.8; // 0.6–1.4 multiplier
        wrapper.style.setProperty("--shake", String(base * jitter));
      }
    }, { passive: true });
    window.addEventListener("resize", updateShake);
    updateShake();
  })();
})();
