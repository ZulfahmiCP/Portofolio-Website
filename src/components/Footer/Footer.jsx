import { useEffect } from 'react';
import '../../styles/components/footer.css';

const Footer = () => {
  useEffect(() => {
    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <footer id="contact" className="main-footer">
      <div className="container footer-content">
        <h3>Get In Touch</h3>
        <p>Feel free to reach out for collaborations or just a friendly chat!</p>
        
        <div className="social-links">
          <a href="mailto:youremail@example.com" title="Email">
            <i data-lucide="mail"></i>
          </a>
          <a 
            href="https://linkedin.com/in/your-username" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="LinkedIn"
          >
            <i data-lucide="linkedin"></i>
          </a>
          <a 
            href="https://github.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="GitHub"
          >
            <i data-lucide="github"></i>
          </a>
          <a 
            href="https://twitter.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Twitter"
          >
            <i data-lucide="twitter"></i>
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