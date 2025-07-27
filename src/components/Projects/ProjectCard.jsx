import { useEffect } from 'react';
import '../../styles/components/projects.css';

const ProjectCard = ({ project }) => {
  useEffect(() => {
    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <div className="project-card" data-tags={project.tags.join(',')}>
      <img src={project.image} alt={`${project.title} Thumbnail`} />
      <div className="project-info">
        <h3>{project.title}</h3>
        <div className="project-description">
          <p>{project.problem}</p>
          <p>{project.solution}</p>
          <p>
            <span className="impact-highlight"> {project.impact}</span>
          </p>
        </div>
        <div className="project-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link-btn" 
              title="GitHub Repository"
            >
              <i data-lucide="github"></i>
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link-btn" 
              title="Live Demo"
            >
              <i data-lucide="external-link"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;