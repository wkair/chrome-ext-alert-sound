chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ soundEnabled: true, whitelistEnabled:false });
});
