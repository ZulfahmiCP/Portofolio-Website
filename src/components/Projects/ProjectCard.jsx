import '../../styles/components/projects.css';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="project-card" 
      data-tags={project.tags.join(',')}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="card-image-container">
         <img 
           src={`/assets/placeholder-images/${project.id}.png`} 
           alt={`${project.title} Thumbnail`}
           onError={(e) => {
             e.target.onerror = null; 
             e.target.src = "https://placehold.co/600x400/161B22/00C16E?text=Project+Image"; 
           }} 
        />
      </div>

      <div className="project-info">
        <h3>{project.title}</h3>
        <div className="project-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tag">{tech}</span>
          ))}
        </div>
        <div className="project-description">
          <p>{project.problem}</p>
          <p>{project.solution}</p>
          <p>
            <span className="impact-highlight"> {project.impact}</span>
          </p>
        </div>
          <div className="project-links">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              <Github size={16} /> GitHub
            </a>
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;