import { useEffect } from 'react';
import useTypingEffect from '../../hooks/useTypingEffect';
import '../../styles/components/about.css';

const About = () => {
  const roles = ['Data Scientist', 'Competitive Programmer'];
  const typedText = useTypingEffect(roles);

  useEffect(() => {
    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <section id="about">
      <div className="container">
        <div className="about-content">
          <h1>ZULFAHMI</h1>
          <p className="tagline">
            <span className="primary-text">Data Scientist</span>
            <span className="separator"> & </span>
            <span className="secondary-text">Competitive Programmer</span>
          </p>
          <p>
            A passionate university student pursuing Informatics Engineering at Hasanuddin University. 
            I thrive on solving complex problems, whether it's uncovering insights from data or 
            architecting efficient algorithms. My goal is to leverage technology to build 
            innovative and impactful solutions.
          </p>
          <div className="about-buttons">
            <a href="#" className="btn btn-primary">
              Download CV
            </a>
            <a 
              href="https://github.com/ZulfahmiCP" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
             <span>Visit GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;