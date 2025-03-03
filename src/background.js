chrome.runtime.onInstalled.addListener(() => {
  addPageScript();
  chrome.storage.local.set({ soundEnabled: true, whitelistEnabled:false });
});

async function addPageScript() {
  const scripts = [{
    id: 'override',
    js: ['src/override.js'],
    matches: ['<all_urls>'],
    allFrames: true,
    runAt: 'document_start',
    world: 'MAIN',
  }];
  const ids = scripts.map(s => s.id);
  await chrome.scripting.unregisterContentScripts({ ids }).catch(() => {});
  await chrome.scripting.registerContentScripts(scripts);
}
