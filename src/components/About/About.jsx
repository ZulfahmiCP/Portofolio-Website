import { motion } from "framer-motion";
import { FileDown, Github } from "lucide-react"; 
import "../../styles/components/about.css";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } }
  };

  return (
    <section id="about">
      <div className="about-wrapper">
        <div className="about-container">
          
          <motion.div 
            className="about-text-content about-content" 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} 
            variants={textVariants}
          >
            <h1 className="about-title">ZULFAHMI</h1>
            <div className="about-subtitle">
              <span className="primary-text">Data Scientist</span>
              <span className="separator"> & </span>
              <span className="secondary-text">Competitive Programmer</span>
            </div>
            <p className="about-description">
              An Informatics Engineering student at Hasanuddin University specializing in 
              the intersection of Data Science and Competitive Programming. 
              I thrive on transforming complex data into actionable insights and architecting highly 
              efficient algorithms to build innovative, impactful solutions.
            </p>
            
            <div className="about-actions">
              <a
                href="https://drive.google.com/file/d/1aOGw2BksA77NcFbEeMbIUMgvfghbyAtS/view?usp=sharing"
                className="button-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }} 
              >
                <FileDown size={20} /> Download CV
              </a>
              <a
                href="https://github.com/ZulfahmiCP"
                className="button-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Github size={20} /> Visit GitHub
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="about-image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <img 
              src={`/assets/about-photo/profil-photo.jpg`} 
              alt="Zulfahmi" 
              className="profile-photo"
              onError={(e) => {
                e.target.src = "https://placehold.co/400x500/161B22/00C16E?text=Zulfahmi"; 
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;