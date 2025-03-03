console.log("override script loaded");

const originalAlert = window.alert;
const originalConfirm = window.confirm;
const originalPrompt = window.prompt;

const alertSoundAudio = new Audio();
let isPlayEnabled = false;

function playAudio() {
    if (isPlayEnabled && alertSoundAudio.src) {
        alertSoundAudio.play().catch(error => console.error('Audio play failed:', error));
    }
}

window.alert = function (msg) {
    playAudio();
    return originalAlert(msg);
};

window.confirm = function (msg) {
    playAudio();
    return originalConfirm(msg);
};

window.prompt = function (msg, value) {
    playAudio();
    return originalPrompt(msg, value);
};

window.addEventListener("message", (event) => {
  if (event.data.type === "setAudioURL") {
    alertSoundAudio.src = event.data.audioURL;
  }
  if (event.data.type === "updateIsPlayEnabled") {
    isPlayEnabled = event.data.isPlayEnabled;
  }
});
