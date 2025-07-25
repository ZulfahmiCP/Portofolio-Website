import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import CompetitiveProgramming from './components/CompetitiveProgramming/CompetitiveProgramming';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import './styles/global.css';
import './styles/variables.css';

function App() {
  const [theme, setTheme] = useState('dark-mode');

  useEffect(() => {
    // Apply saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={theme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <About />
        <Projects />
        <CompetitiveProgramming />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;