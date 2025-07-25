import React, { useEffect, useState } from 'react';
import { Code2, Code, Database, BarChart3, BrainCircuit, AreaChart, Bolt, Brain, BrainCog, Server, Atom } from 'lucide-react';
import SkillCategory from './SkillCategory';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 />,
      skills: [
        { name: 'Python', icon: <Code2 /> },
        { name: 'C++', icon: <Code2 /> },
        { name: 'JavaScript', icon: <Code /> },
        { name: 'SQL', icon: <Database /> }
      ]
    },
    {
      title: 'Data Tools',
      icon: <BarChart3 />,
      skills: [
        { name: 'Pandas & NumPy', icon: <BarChart3 /> },
        { name: 'Scikit-learn', icon: <BrainCircuit /> },
        { name: 'Matplotlib & Seaborn', icon: <AreaChart /> },
        { name: 'Spark', icon: <Bolt /> }
      ]
    },
    {
      title: 'Frameworks',
      icon: <Brain />,
      skills: [
        { name: 'TensorFlow & Keras', icon: <Brain /> },
        { name: 'PyTorch', icon: <BrainCog /> },
        { name: 'Flask & Django', icon: <Server /> },
        { name: 'React', icon: <Atom /> }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="skills" 
      className={`scroll-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;