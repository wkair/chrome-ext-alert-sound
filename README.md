# Chrome Extension Project

This project is a Chrome extension that plays a sound file whenever an alert, confirm, or prompt dialog is triggered on a webpage.

## Project Structure

```
chrome-extension-project
├── src
│   ├── background.js       # Background script to save default settings when the extension is installed
│   ├── content.js          # Content script to detect dialog events on webpages and play sounds
│   ├── override.js         # Script to override alert, confirm, and prompt functions
│   └── popup
│       ├── popup.html      # HTML file for the extension's popup UI
│       ├── popup.js        # JavaScript file to handle popup interactions
│       └── i18n.js         # JavaScript file for multilingual support
├── manifest.json           # Metadata for the Chrome extension
└── README.md               # Project documentation
```

## Installation

1. Clone the repository or download the project files.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the `chrome-extension-project` directory.

## Usage

Once the extension is installed, it will automatically detect alert, confirm, and prompt events on webpages. When these events occur, a sound file will play.

## Features

- Detects alert, confirm, and prompt dialogs.
- Plays a sound file when these dialogs are triggered.
- Simple popup interface for user settings.
- Multilingual support (English, Korean).

## Future Improvements

- Allow users to customize the sound file to be played.
- Add options to enable/disable sound for specific dialogs.
- Improve the popup UI for a better user experience.

---

# 크롬 확장 프로그램 프로젝트

이 프로젝트는 웹페이지에서 alert, confirm 또는 prompt 대화 상자가 트리거될 때마다 사운드 파일을 재생하는 Chrome 확장 프로그램입니다.

## 프로젝트 구조

```
chrome-extension-project
├── src
│   ├── background.js       # 확장 프로그램 설치 시 기본 설정을 저장하는 백그라운드 스크립트
│   ├── content.js          # 웹페이지에서 대화 상자 이벤트를 감지하고 사운드를 재생하는 콘텐츠 스크립트
│   ├── override.js         # alert, confirm, prompt 함수를 재정의하는 스크립트
│   └── popup
│       ├── popup.html      # 확장 프로그램의 팝업 UI를 위한 HTML 파일
│       ├── popup.js        # 팝업 상호작용을 처리하는 JavaScript 파일
│       └── i18n.js         # 다국어 지원을 위한 JavaScript 파일
├── manifest.json           # Chrome 확장 프로그램의 메타데이터
└── README.md               # 프로젝트 문서
```

## 설치

1. 저장소를 클론하거나 프로젝트 파일을 다운로드합니다.
2. Chrome을 열고 `chrome://extensions/`로 이동합니다.
3. 오른쪽 상단에서 "개발자 모드"를 활성화합니다.
4. "압축 해제된 확장 프로그램 로드"를 클릭하고 `chrome-extension-project` 디렉토리를 선택합니다.

## 사용법

확장 프로그램이 설치되면, 웹페이지에서 alert, confirm, prompt 이벤트를 자동으로 감지합니다. 이러한 이벤트가 발생하면 사운드 파일이 재생됩니다.

## 기능

- alert, confirm, prompt 대화 상자를 감지합니다.
- 이러한 대화 상자가 트리거될 때 사운드 파일을 재생합니다.
- 사용자 설정을 위한 간단한 팝업 인터페이스.
- 다국어 지원 (영어, 한국어).

## 향후 개선 사항

- 사용자가 재생할 사운드 파일을 사용자 정의할 수 있도록 허용.
- 특정 대화 상자에 대해 사운드를 활성화/비활성화하는 옵션 추가.
- 더 나은 사용자 경험을 위한 팝업 UI 개선.