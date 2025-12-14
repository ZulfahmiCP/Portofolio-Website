import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'; 
import '../../styles/components/header.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-mode' : 'light-mode');
    
    document.body.classList.toggle('light-mode', savedTheme === 'light-mode');
    setDarkMode(savedTheme === 'dark-mode');
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle('light-mode', !newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark-mode' : 'light-mode');
  };

  return (
    <button 
      className="theme-toggle-button"
      onClick={toggleTheme}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="icon-container">
        {darkMode ? (
          <Moon className="theme-icon" size={20} />
        ) : (
          <Sun className="theme-icon" size={20} />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;