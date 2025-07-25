import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import Google Fonts
const link = document.createElement('link');
link.rel = 'preconnect';
link.href = 'https://fonts.googleapis.com';
document.head.appendChild(link);

const link2 = document.createElement('link');
link2.rel = 'preconnect';
link2.href = 'https://fonts.gstatic.com';
link2.crossOrigin = 'true';
document.head.appendChild(link2);

const link3 = document.createElement('link');
link3.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@300;400;600&display=swap';
link3.rel = 'stylesheet';
document.head.appendChild(link3);

// Import Lucide Icons
const script = document.createElement('script');
script.src = 'https://unpkg.com/lucide@latest/dist/umd/lucide.min.js';
script.async = true;
document.head.appendChild(script);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);