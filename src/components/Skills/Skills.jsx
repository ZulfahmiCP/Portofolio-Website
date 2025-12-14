import skillsData from '../../data/skills';
import '../../styles/components/skills.css';
import { motion } from 'framer-motion'; 
import { 
  Code2, 
  Code, 
  BarChart3, 
  BrainCircuit, 
  AreaChart, 
  Brain, 
  BrainCog, 
  Atom 
} from 'lucide-react';

const iconMap = {
  "code-2": Code2,
  "code": Code, 
  "bar-chart-3": BarChart3,
  "brain-circuit": BrainCircuit,
  "area-chart": AreaChart,
  "brain": Brain,
  "brain-cog": BrainCog,
  "atom": Atom
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
          Skills
        </motion.h2>

        <div className="skills-container">
          {skillsData.map((category, catIndex) => (
            <motion.div 
              key={category.id} 
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }} 
              viewport={{ once: true }}
            >
              <h3>{category.name}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon] || Code2; 
                  
                  return (
                    <li key={index}>
                      <IconComponent size={20} /> 
                      {skill.name}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;