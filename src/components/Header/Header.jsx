import React, { useState } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import './Header.css';

const Header = ({ toggleTheme, theme }) => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  const closeMobileNav = () => {
    setMobileNavActive(false);
  };

  return (
    <header className="main-header">
      <div className="container">
        <a href="#about" className="logo" onClick={closeMobileNav}>
          ZUL<span>FAHMI</span>
        </a>
        <div className="mobile-nav-toggle" onClick={toggleMobileNav}>
          <Menu />
        </div>
        <nav className={`main-nav ${mobileNavActive ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="#about" className="nav-link" onClick={closeMobileNav}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link" onClick={closeMobileNav}>
                Projects
              </a>
            </li>
            <li>
              <a href="#cp" className="nav-link" onClick={closeMobileNav}>
                CP
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link" onClick={closeMobileNav}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={closeMobileNav}>
                Contact
              </a>
            </li>
            <li>
              <div className="theme-switch-wrapper">
                <Sun size={16} style={{ marginRight: '5px' }} />
                <label className="theme-switch">
                  <input
                    type="checkbox"
                    checked={theme === 'dark-mode'}
                    onChange={toggleTheme}
                  />
                  <div className="slider"></div>
                </label>
                <Moon size={16} style={{ marginLeft: '5px' }} />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;