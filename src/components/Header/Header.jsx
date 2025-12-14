import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Nav from './Nav';
import ThemeToggle from './ThemeToggle';
import '../../styles/components/header.css';
import { Menu, X } from 'lucide-react';

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
        <ScrollLink to="about" smooth={true} duration={100} className="logo">
          ZUL<span>FAHMI</span>
        </ScrollLink>
        
        <button 
          className="mobile-nav-toggle" 
          onClick={toggleMobileNav}
          aria-label="Toggle navigation"
        >
          {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <Nav mobileNavOpen={mobileNavOpen} toggleMobileNav={toggleMobileNav} />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;