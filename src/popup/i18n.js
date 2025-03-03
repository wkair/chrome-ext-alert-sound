const translations = {
  en: {
    title: "Dialog Alert Sound",
    header: "Dialog Alert Sound",
    description1: "Plays a sound when",
    description2: "a dialog appears on the webpage.",
    soundToggle: "Play alert sound",
    whitelistToggle: "Only for sites in the list",
    addButton: "Add",
    language: "Language",
    testPage: "Test Page",
    whitelistTitle: "Allowed Sites List"
  },
  ko: {
    title: "대화상자 알림 소리",
    header: "대화상자 알림 소리",
    description1: "웹페이지에서 대화상자가 나타날 때",
    description2: "알람을 재생합니다.",
    soundToggle: "알림 소리 재생",
    whitelistToggle: "목록에 있는 사이트만",
    addButton: "추가",
    language: "언어",
    testPage: "테스트 페이지",
    whitelistTitle: "허용 사이트 목록"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    element.textContent = translations[lang][key];
  });
  document.documentElement.lang = lang;
  chrome.storage.local.set({ language: lang });
}

// 저장된 언어 설정을 불러오거나, 기본 언어를 설정합니다.
chrome.storage.local.get('language', (data) => {
  const userLang = data.language || (navigator.language.startsWith('ko') ? 'ko' : 'en');
  setLanguage(userLang);
  document.getElementById('languageSelect').value = userLang;
});

// 언어 선택 드롭다운에 이벤트 리스너 추가
document.getElementById('languageSelect').addEventListener('change', (event) => {
  setLanguage(event.target.value);
});