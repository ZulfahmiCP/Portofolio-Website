import { useEffect } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import CP from './components/CP/CP';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import useScrollAnimation from './hooks/useScrollAnimation';
import './index.css';

const App = () => {
  // Initialize scroll animations
  useScrollAnimation();

  // Initialize Lucide icons on mount
  useEffect(() => {
    const initLucide = async () => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    };
    initLucide();
  }, []);

  return (
    <div className="app">
      <Header />
      
      <main>
        <About />
        <Projects />
        <CP />
        <Skills />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;