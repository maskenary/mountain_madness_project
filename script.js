(function () {
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
  const SCROLL_AMOUNT = 20;
  const MOVING_LIGHT_MS = 380;

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
  let movingLightTimeout = null;

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

        function tick() {
          if (!analyser || (gear !== "R" && gear !== "D")) return;
          analyser.getByteFrequencyData(frequencyData);
          let sum = 0;
          let count = 0;
          for (let i = lowBin; i <= highBin; i++) {
            sum += frequencyData[i];
            count++;
          }
          const level = count > 0 ? sum / count : 0;

          if (level >= VOLUME_THRESHOLD) {
            framesAboveThreshold++;
            if (framesAboveThreshold >= CONSISTENT_FRAMES) {
              if (gear === "D") {
                window.scrollBy({ top: SCROLL_AMOUNT, behavior: "smooth" });
              } else if (gear === "R") {
                window.scrollBy({ top: -SCROLL_AMOUNT, behavior: "smooth" });
              }
              showMovingLight();
              framesAboveThreshold = 0;
            }
          } else {
            framesAboveThreshold = 0;
          }

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
  }

  if (gearBtns.length) {
    gearBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const g = btn.getAttribute("data-gear");
        if (g === "R" || g === "N" || g === "D") setGear(g);
      });
    });
  }
})();
