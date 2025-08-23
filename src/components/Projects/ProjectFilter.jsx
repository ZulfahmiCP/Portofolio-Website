import '../../styles/components/projects.css';
import filters from '../../data/project_filters';

const ProjectFilter = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="projects-filter-container">
       <div className="project-filters">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
          onClick={() => setActiveFilter(filter.id)}
          data-filter={filter.id}
        >
          {filter.label}
        </button>
      ))}
    </div>
    </div>
  );
};

export default ProjectFilter;