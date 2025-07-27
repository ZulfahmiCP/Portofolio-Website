import { useEffect } from 'react';
import '../../styles/components/about.css';

const About = () => {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <section id="about">
      <div className="about-wrapper">
        <div className="about-container">
          <div className="about-content">
            <h1 className="about-title">ZULFAHMI</h1>
            <p className="about-subtitle">
              <span className="primary-text">Data Scientist</span>
              <span className="separator"> & </span>
              <span className="secondary-text">Competitive Programmer</span>
            </p>
            <p className="about-description">
              A passionate university student pursuing Informatics Engineering at Hasanuddin University. 
              I thrive on solving complex problems, whether it's uncovering insights from data or 
              architecting efficient algorithms. My goal is to leverage technology to build 
              innovative and impactful solutions.
            </p>
            <div className="about-actions">
              <a href="#" className="about-button">
                Download CV
              </a>
              <a 
                href="https://github.com/your-username" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="about-button"
              >
                Visit GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;