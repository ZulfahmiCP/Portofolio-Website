import { Link } from 'react-scroll';
import { useEffect } from 'react';
import '../../styles/components/header.css';

const Nav = ({ mobileNavOpen, toggleMobileNav }) => {
  useEffect(() => {
    // Initialize Lucide icons when component mounts
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <nav className={`main-nav ${mobileNavOpen ? 'active' : ''}`}>
      <ul>
        <li>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="nav-link" 
            onClick={toggleMobileNav}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            className="nav-link" 
            onClick={toggleMobileNav}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="cp" 
            smooth={true} 
            duration={500} 
            className="nav-link" 
            onClick={toggleMobileNav}
          >
            CP
          </Link>
        </li>
        <li>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500} 
            className="nav-link" 
            onClick={toggleMobileNav}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="nav-link" 
            onClick={toggleMobileNav}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;