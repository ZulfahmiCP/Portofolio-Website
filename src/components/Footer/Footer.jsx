import '../../styles/components/footer.css';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="main-footer">
      <div className="footer-content">
        <h3 className="footer-title">
          <span>Get In Touch</span>
        </h3>
        <p>Feel free to reach out for collaborations or just a friendly chat!</p>
        
        <div className="social-links">
          <a href="mailto:zulfahmi1612@gmail.com" title="Email">
            <Mail />
          </a>
          <a 
            href="https://www.linkedin.com/in/zul-fahmi-75b37828b" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="LinkedIn"
          >
            <Linkedin />
          </a>
          <a 
            href="https://github.com/ZulfahmiCP" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="GitHub"
          >
            <Github />
          </a>
          <a 
            href="http://wa.me/+6282239635621" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="WhatsApp"
          >
            <Phone />
          </a>
        </div>
        
        <span className="copyright">
          © {new Date().getFullYear()} ZULFAHMI. Engineered for Impact.
        </span>
      </div>
    </footer>
  );
};

export default Footer;