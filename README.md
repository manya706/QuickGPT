<h1 align="center" style="font-size: 100px;">Quick GPT</h1>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-v4.9-blue?logo=typescript&style=flat-square" />
  <img src="https://img.shields.io/badge/Chrome-Extension-yellow?logo=google-chrome&style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" />
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Contributions-Welcome-orange?style=flat-square" />
</p>


## ⚡ About
End the need of copy-pasting your desired text onto GPT pane.
The **Quick GPT** is designed to help users quickly understand selected text on any webpage. By integrating with the GROQ API, the extension fetches contextually relevant explanations for highlighted text, making it a useful tool for students, researchers, or anyone looking to gain insights without leaving the current page.

This project leverages Chrome's context menu API and is built using TypeScript for a robust, maintainable codebase. The extension simplifies the process of getting explanations and makes accessing information more intuitive and user-friendly.

`If you find this project helpful, please consider starring the repository on GitHub! ⭐`
## ✨ Features

- Right-click on any selected text and choose "Explain Selected Text" from the context menu.
- Fetches explanations from GROQ API.
- Displays the explanation in an alert or dialog box.

## 🗄️ Project Directory

```bash
/src
├── backend.ts  # Handles context menu and API interaction
├── content.ts     # Content script 
├── popup.html       # Popup script 
/manifest.json     # Chrome extension manifest
/.env 
```
## 🛠 Dependencies
- TypeScript: Type-safe scripting.
- Chrome API: For managing context menus and active tabs.
- dotenv: For managing environment variables.

## 📜 License
This project is licensed under the MIT License.
