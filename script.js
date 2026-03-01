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

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.warn("Speech recognition not supported in this browser.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  const TRIGGER = "vroom";
  const SCROLL_AMOUNT = window.innerHeight;

  recognition.onresult = function (event) {
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript.trim().toLowerCase();
      if (transcript.includes(TRIGGER)) {
        window.scrollBy({ top: SCROLL_AMOUNT, behavior: "smooth" });
      }
    }
  };

  recognition.onerror = function (event) {
    if (event.error === "not-allowed") {
      console.warn("Microphone access denied.");
    }
  };

  function startOnClick() {
    document.removeEventListener("click", startOnClick);
    recognition.start();
  }
  document.addEventListener("click", startOnClick, { once: true });
})();
