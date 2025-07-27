import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'; // Import specific icons
import '../../styles/components/header.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Initialize theme immediately to prevent flash
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-mode' : 'light-mode');
    
    // Apply theme before React hydrates
    document.body.classList.toggle('light-mode', savedTheme === 'light-mode');
    setDarkMode(savedTheme === 'dark-mode');
    
    // Initialize Lucide after slight delay
    const timer = setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }, 100);
    
    return () => clearTimeout(timer);
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