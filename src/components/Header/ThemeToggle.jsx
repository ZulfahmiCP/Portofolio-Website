import { useEffect, useState } from 'react';
import '../../styles/components/header.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Initialize theme from localStorage or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-mode' : 'light-mode');
    
    setDarkMode(savedTheme === 'dark-mode');
    document.body.classList.toggle('light-mode', savedTheme === 'light-mode');
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle('light-mode', !newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark-mode' : 'light-mode');
  };

  return (
    <div className="theme-switch-wrapper">
      <i data-lucide="sun" style={{ marginRight: '5px' }}></i>
      <label className="theme-switch">
        <input 
          type="checkbox" 
          checked={darkMode}
          onChange={toggleTheme}
          aria-label="Toggle dark mode"
        />
        <div className="slider"></div>
      </label>
      <i data-lucide="moon" style={{ marginLeft: '5px' }}></i>
    </div>
  );
};

export default ThemeToggle;