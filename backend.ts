chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "explainText",
      title: "Explain with ChatGPT",
      contexts: ["selection"] // Show only when text is selected
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "explainText" && info.selectionText) {
      if (tab && tab.id !== undefined) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: explainText,
          args: [info.selectionText]
        });
      } else {
        console.error("No tab or tab ID found");
      }
    }
  });
  
  function explainText(selectedText: string) {
    // Send message to content script to call ChatGPT API
    chrome.runtime.sendMessage({ type: "explain", text: selectedText });
  }
  