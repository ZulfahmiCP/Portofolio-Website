import { useEffect } from "react";
import "../../styles/components/about.css";

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
              An Informatics Engineering student at Hasanuddin University specializing in 
              the intersection of data science and competitive programming. I thrive on 
              transforming complex data into actionable insights and architecting highly 
              efficient algorithms to build innovative, impactful solutions.
            </p>
            <div className="about-actions">
              <a
                href="https://drive.google.com/file/d/1aOGw2BksA77NcFbEeMbIUMgvfghbyAtS/view?usp=sharing"
                className="button-primary"
              >
                Download CV
              </a>
              <a
                href="https://github.com/ZulfahmiCP"
                className="button-primary"
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
