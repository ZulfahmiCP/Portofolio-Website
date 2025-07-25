import React from 'react';

const SkillCategory = ({ title, icon, skills }) => {
  return (
    <div className="skill-category">
      <h3>{title}</h3>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index}>
            {skill.icon}
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;