(function() {
  // Create container div
  const chatContainer = document.createElement('div');
  chatContainer.id = 'afi-chat-widget';
  chatContainer.style.width = '100%';
  chatContainer.style.height = '600px';
  document.currentScript.parentNode.insertBefore(chatContainer, document.currentScript);

  // Load React app
  const script = document.createElement('script');
  script.src = 'https://regal-cupcake-8f8020.netlify.app/dist/assets/index-CovkAYca.js'; // Update with your actual URL
  script.crossOrigin = '';
  document.body.appendChild(script);
  
  // Load CSS
  const link = document.createElement('link');
  link.href = 'https://regal-cupcake-8f8020.netlify.app/dist/assets/index-YhR4LCeD.css'; // Update with your actual URL
  link.rel = 'stylesheet';
  document.head.appendChild(link);
})();