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

  // ——— Vroom-to-Scroll (Web Audio API) ———
  const LOW_HZ = 80;
  const HIGH_HZ = 200;
  const VOLUME_THRESHOLD = 140;
  const CONSISTENT_FRAMES = 8;
  const SCROLL_AMOUNT = 20;

  const engineBtn = document.getElementById("engine-btn");
  const engineLabel = engineBtn && engineBtn.querySelector(".engine-btn-label");
  const engineIndicator = engineBtn && engineBtn.querySelector(".engine-indicator");

  let audioContext = null;
  let analyser = null;
  let stream = null;
  let rafId = null;
  let frequencyData = null;
  let lowBin = 0;
  let highBin = 0;
  let framesAboveThreshold = 0;
  let isEngineRunning = false;

  function binForHz(hz, fftSize, sampleRate) {
    return Math.min(
      Math.floor((hz * fftSize) / sampleRate),
      (fftSize >> 1) - 1
    );
  }

  function startEngine() {
    if (!engineBtn || isEngineRunning) return;
    engineBtn.setAttribute("aria-label", "Stop engine");
    engineLabel.textContent = "Stop Engine";
    engineBtn.classList.add("active");
    isEngineRunning = true;

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
          if (!analyser || !isEngineRunning) return;
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
              window.scrollBy({ top: SCROLL_AMOUNT, behavior: "smooth" });
              pulseIndicator();
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
        stopEngine();
      });
  }

  function pulseIndicator() {
    if (!engineIndicator) return;
    engineIndicator.classList.remove("pulse");
    void engineIndicator.offsetWidth;
    engineIndicator.classList.add("pulse");
    setTimeout(function () {
      engineIndicator.classList.remove("pulse");
    }, 280);
  }

  function stopEngine() {
    isEngineRunning = false;
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

    if (engineBtn) {
      engineBtn.setAttribute("aria-label", "Start engine for vroom-to-scroll");
      engineBtn.classList.remove("active");
    }
    if (engineLabel) engineLabel.textContent = "Start Engine";
  }

  if (engineBtn) {
    engineBtn.addEventListener("click", function () {
      if (isEngineRunning) stopEngine();
      else startEngine();
    });
  }
})();
