import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={`${project.title} Thumbnail`} />
      <div className="project-info">
        <h3>{project.title}</h3>
        <div className="project-description">
          <p><strong>Problem:</strong> {project.description.problem}</p>
          <p><strong>Solution:</strong> {project.description.solution}</p>
          <p><strong>Impact:</strong> <span className="impact-highlight">{project.description.impact}</span></p>
        </div>
        <div className="project-tags">
          {project.skills.map((skill, index) => (
            <span key={index} className="tag">{skill}</span>
          ))}
        </div>
        <div className="project-links">
          <a href="#" target="_blank" rel="noopener noreferrer" className="project-link-btn" title="GitHub Repository">
            <Github />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="project-link-btn" title="Live Demo">
            <ExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;