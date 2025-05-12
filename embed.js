(function () {
  const chatContainer = document.createElement('div');
  chatContainer.id = 'afi-chat-widget';
  chatContainer.style.position = 'fixed';
  chatContainer.style.bottom = '24px';
  chatContainer.style.right = '24px';
  chatContainer.style.zIndex = '9999';
  chatContainer.style.width = '100%';
  chatContainer.style.maxWidth = '400px';
  chatContainer.style.height = '600px';

  // Append to the dedicated container, NOT interfering with #root
  const container = document.getElementById('afi-chat-widget-container');
  if (container) {
    container.appendChild(chatContainer);
  }

  // Load CSS
  const link = document.createElement('link');
  link.href = 'https://regal-cupcake-8f8020.netlify.app/assets/index-YhR4LCeD.css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

  // Load React app
  const script = document.createElement('script');
  script.src = 'https://regal-cupcake-8f8020.netlify.app/assets/index-CovkAYca.js';
  script.crossOrigin = '';
  document.body.appendChild(script);
})();
