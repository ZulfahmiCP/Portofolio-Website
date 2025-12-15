import { motion } from 'framer-motion';
// Import Icon Merek dari React Icons (Simple Icons & FontAwesome)
import { 
  SiPython, SiTypescript, SiJavascript, SiMysql, SiCplusplus,
  SiHuggingface, SiTensorflow, SiPytorch, SiPandas, SiScikitlearn,
  SiFastapi, SiStreamlit, SiReact, SiTailwindcss, SiFlutter, SiFirebase,
  SiGit, SiFigma, SiCanva, SiGithub
} from "react-icons/si";
import { FaChartArea } from "react-icons/fa"; 
import { VscVscode } from "react-icons/vsc";

import skillsData from '../../data/skills';
import '../../styles/components/skills.css';

// Mapping Icon yang Lengkap
const iconMap = {
  "python": SiPython,
  "typescript": SiTypescript,
  "javascript": SiJavascript,
  "mysql": SiMysql,
  "cpp": SiCplusplus,
  "huggingface": SiHuggingface,
  "tensorflow": SiTensorflow,
  "pandas": SiPandas,
  "scikit": SiScikitlearn,
  "matplotlib": FaChartArea, 
  "fastapi": SiFastapi,
  "streamlit": SiStreamlit,
  "react": SiReact,
  "tailwind": SiTailwindcss,
  "flutter": SiFlutter,
  "firebase": SiFirebase,
  "git": SiGit,
  "github": SiGithub, 
  "vscode": VscVscode,
  "figma": SiFigma,
  "canva": SiCanva,
};

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Tools
        </motion.h2>

        <div className="skills-wrapper">
          {skillsData.map((category, catIndex) => (
            <motion.div 
              key={category.id} 
              className="skill-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.name}</h3>
              
              <div className="skills-grid">
                {category.skills.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon] || SiPython; // Fallback
                  
                  return (
                    <motion.div 
                      key={index} 
                      className="skill-item"
                      whileHover={{ y: -5, color: "var(--primary-accent)" }}
                    >
                      <div className="icon-box">
                        <IconComponent size={40} />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;