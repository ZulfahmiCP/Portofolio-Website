import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import projectsData from '../../data/projects';
import '../../styles/components/projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredProjects = projectsData.filter(project => 
    activeFilter === 'all' || project.tags.includes(activeFilter)
  );

  const projectsToShow = isExpanded 
    ? filteredProjects 
    : filteredProjects.slice(0, visibleProjects);

  const toggleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="projects" className="scroll-section visible"> 
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        
        <ProjectFilter 
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <motion.div 
          className="projects-grid"
          layout 
        >
          <AnimatePresence>
            {projectsToShow.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length > 3 && (
          <div className="show-more-container">
            <button 
              onClick={toggleShowMore}
              className={`show-more-button ${isExpanded ? 'sticky' : ''}`}
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;