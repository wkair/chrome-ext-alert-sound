const originalAlert = window.alert;
const originalConfirm = window.confirm;
const originalPrompt = window.prompt;

const audio = new Audio();

function playSound() {
    console.log('play sound', audio);
    if (audio.src) {
        audio.play();
    }
}

function sendMessageToContent(action) {
    return new Promise((resolve) => {
        window.postMessage({ action: action }, '*');
        window.addEventListener('message', function handler(event) {
            if (event.source !== window) return;
            if (event.data.action === 'soundPlayed') {
                window.removeEventListener('message', handler);
                resolve();
            }
        });
    });
}

window.alert = async function (msg) {
    playSound();
    return originalAlert(msg); // 원래 함수 실행 후 리턴값 반환
}

window.confirm = async function (msg) {
    playSound();
    return originalConfirm(msg); // 원래 함수 실행 후 리턴값 반환
}

window.prompt = async function (msg, value) {
    playSound();
    return originalPrompt(msg, value); // 원래 함수 실행 후 리턴값 반환
}