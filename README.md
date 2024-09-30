<h1><center>Quick GPT</center></h1>

This Chrome extension provides users with an option to explain selected text by right-clicking on it. It fetches the explanation from the GROQ API and displays it in a simple dialog.

## Features

- Right-click on any selected text and choose "Explain Selected Text" from the context menu.
- Fetches explanations from GROQ API.
- Displays the explanation in an alert or dialog box.

## Project Directory

```bash
/src
├── background.ts  # Handles context menu and API interaction
├── content.ts     # Content script (optional, for page manipulation)
├── popup.ts       # Popup script (if used)
/manifest.json     # Chrome extension manifest
/.env 
```
## Dependencies
- TypeScript: Type-safe scripting.
- Chrome API: For managing context menus and active tabs.
- dotenv: For managing environment variables.

## License
This project is licensed under the MIT License.
