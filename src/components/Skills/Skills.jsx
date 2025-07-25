import { useEffect } from 'react';
import skillsData from '../../data/skills';
import '../../styles/components/skills.css';

const Skills = () => {
  useEffect(() => {
    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <section id="skills" className="scroll-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skillsData.map((category) => (
            <div key={category.id} className="skill-category">
              <h3>{category.name}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, index) => (
                  <li key={index}>
                    <i data-lucide={skill.icon}></i>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;