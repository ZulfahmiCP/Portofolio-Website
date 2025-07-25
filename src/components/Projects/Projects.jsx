import { useState } from 'react';
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
    <section id="projects" className="scroll-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <ProjectFilter 
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <div className="projects-grid">
          {projectsToShow.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length > visibleProjects && (
          <div className="show-more-container">
            <button 
              onClick={toggleShowMore}
              className={`btn btn-primary ${isExpanded ? 'sticky' : ''}`}
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