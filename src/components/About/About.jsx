import React, { useState, useEffect } from 'react';
import { Github, Download } from 'lucide-react';
import './About.css';

const About = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['Data Scientist', 'Competitive Programmer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delayBetweenRoles = 2000;

    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        // Deleting text
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTimeout(type, typingSpeed);
        } else {
          setTimeout(type, deletingSpeed);
        }
      } else {
        // Typing text
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        
        if (charIndex === currentRole.length) {
          setIsDeleting(true);
          setTimeout(type, delayBetweenRoles);
        } else {
          setTimeout(type, typingSpeed);
        }
      }
    };

    const timer = setTimeout(() => {
      type();
    }, 500);

    return () => clearTimeout(timer);
  }, [roleIndex, charIndex, isDeleting]);

  return (
    <section id="about">
      <div className="container">
        <div className="about-content">
          <h1>ZULFAHMI</h1>
          <p className="tagline">
            <span id="typing-effect">{typedText}</span>
            {!isDeleting && <span className="cursor">|</span>}
          </p>
          <p>
            A passionate university student pursuing Informatics Engineering at Hasanuddin University. 
            I thrive on solving complex problems, whether it's uncovering insights from data or 
            architecting efficient algorithms. My goal is to leverage technology to build innovative 
            and impactful solutions.
          </p>
          <div className="about-buttons">
            <a href="#" className="btn btn-primary">
              <Download size={16} style={{ marginRight: '8px' }} />
              Download CV
            </a>
            <a 
              href="https://github.com/your-username" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              <Github size={16} style={{ marginRight: '8px' }} />
              Visit GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;