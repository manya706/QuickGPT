import { config } from './config';

const apiKey = config.GROQ_API_KEY; 
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message.type === "explain") {
      const explanation = await fetchExplanation(message.text);
      showExplanationDialog(explanation);
    }
  });
  
  // Function to call ChatGPT API
  async function fetchExplanation(selectedText: string): Promise<string> {
    const apiKey = "your-openai-api-key";  // Replace with your OpenAI API key
    const apiUrl = "https://api.openai.com/v1/completions";
  
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "text-davinci-003",  // Specify the GPT model
        prompt: `Explain the following text: ${selectedText}`,
        max_tokens: 150
      })
    });
  
    const data = await response.json();
    return data.choices[0].text.trim();
  }
  
  // Function to display explanation in a small dialog box
  function showExplanationDialog(explanation: string) {
    const dialogBox = document.createElement('div');
    dialogBox.style.position = 'fixed';
    dialogBox.style.bottom = '20px';
    dialogBox.style.right = '20px';
    dialogBox.style.width = '300px';
    dialogBox.style.padding = '10px';
    dialogBox.style.backgroundColor = 'white';
    dialogBox.style.border = '1px solid #ccc';
    dialogBox.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
    dialogBox.style.zIndex = '10000';
    dialogBox.textContent = explanation;
  
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.onclick = () => dialogBox.remove();
    
    dialogBox.appendChild(closeButton);
    document.body.appendChild(dialogBox);
  }
  