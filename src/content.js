const audio = new Audio(chrome.runtime.getURL('alert-sound.mp3'));

window.addEventListener('message', (event) => {
    if (event.source !== window) return;
    if (event.data.action === 'playSound') {
        console.log('play message received');
        chrome.storage.local.get(['soundEnabled', 'whitelistEnabled', 'whitelist'], ({ soundEnabled, whitelistEnabled, whitelist }) => {
            const currentSite = window.location.hostname;
            const isWhitelisted = whitelist && whitelist.some(site => currentSite.startsWith(site));
            if (soundEnabled === true && (!whitelistEnabled || isWhitelisted)) {
                audio.play().then(() => {
                    window.postMessage({ action: 'soundPlayed' }, '*');
                });
            } else {
                window.postMessage({ action: 'soundPlayed' }, '*');
            }
        });
    }
});