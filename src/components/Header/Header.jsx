import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Nav from './Nav';
import ThemeToggle from './ThemeToggle';
import '../../styles/components/header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="about" smooth={true} duration={500} className="logo">
          ZUL<span>FAHMI</span>
        </Link>
        
        <button 
          className="mobile-nav-toggle" 
          onClick={toggleMobileNav}
          aria-label="Toggle navigation"
        >
          <i data-lucide="menu"></i>
        </button>
        
        <Nav mobileNavOpen={mobileNavOpen} toggleMobileNav={toggleMobileNav} />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;