(function() {
  // Create container div
  const chatContainer = document.createElement('div');
  chatContainer.id = 'afi-chat-widget';
  // chatContainer.style.width = '100%';
  // chatContainer.style.height = '600px';
  document.currentScript.parentNode.insertBefore(chatContainer, document.currentScript);

  // Load React app
  const script = document.createElement('script');
  script.src = 'https://afi-assist.onrender.com/assets/index-DldLVP-7.js'; // Update with your actual URL
  script.crossOrigin = '';
  document.body.appendChild(script);
  
  // Load CSS
  const link = document.createElement('link');
  link.href = 'https://afi-assist.onrender.com/assets/index-mRcUqAiw.css'; // Update with your actual URL
  link.rel = 'stylesheet';
  document.head.appendChild(link);
})();