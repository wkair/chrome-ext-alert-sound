console.log("Content script loaded");

const audioURL = chrome.runtime.getURL("alert-sound.mp3");

function updatePlayEnabled() {
  chrome.storage.local.get(
    ["soundEnabled", "whitelistEnabled", "whitelist"],
    (data) => {
      const whitelist = data.whitelist || [];
      const isWhitelisted = whitelist.includes(window.location.hostname);
      const isPlayEnabled =
        data.soundEnabled === true && (!data.whitelistEnabled || isWhitelisted);
      window.postMessage({ type: "updateIsPlayEnabled", isPlayEnabled }, "*");
    }
  );
}

function init() {
  console.log("init");
  updatePlayEnabled();
  window.postMessage({ type: "setAudioURL", audioURL }, "*");
}

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === "local") {
    console.log("Storage changed", changes);
    updatePlayEnabled();
  }
});

init();
