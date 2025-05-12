(function () {
  // Create a floating container for the chat widget
  const chatContainer = document.createElement('div');
  chatContainer.id = 'afi-chat-widget';

  // Style the container to float over other content
  chatContainer.style.position = 'fixed';
  chatContainer.style.bottom = '24px';
  chatContainer.style.right = '24px';
  chatContainer.style.zIndex = '9999';
  chatContainer.style.width = '100%';
  chatContainer.style.maxWidth = '400px';
  chatContainer.style.height = '600px';

  // Append to body to avoid layout issues
  document.body.appendChild(chatContainer);

  // Load the widget's CSS
  const link = document.createElement('link');
  link.href = 'https://regal-cupcake-8f8020.netlify.app/assets/index-YhR4LCeD.css'; // Update if needed
  link.rel = 'stylesheet';
  document.head.appendChild(link);

  // Load the widget's JS
  const script = document.createElement('script');
  script.src = 'https://regal-cupcake-8f8020.netlify.app/assets/index-CovkAYca.js'; // Update if needed
  script.crossOrigin = '';
  document.body.appendChild(script);
})();
