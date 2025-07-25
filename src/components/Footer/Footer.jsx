import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="main-footer">
      <div className="container footer-content">
        <h3>Get In Touch</h3>
        <p>Feel free to reach out for collaborations or just a friendly chat!</p>
        <div className="social-links">
          <a href="mailto:youremail@example.com" title="Email">
            <Mail />
          </a>
          <a 
            href="https://linkedin.com/in/your-username" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="LinkedIn"
          >
            <Linkedin />
          </a>
          <a 
            href="https://github.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="GitHub"
          >
            <Github />
          </a>
          <a 
            href="https://twitter.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Twitter"
          >
            <Twitter />
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} ZULFAHMI. Designed with a futuristic touch.
        </p>
      </div>
    </footer>
  );
};

export default Footer;