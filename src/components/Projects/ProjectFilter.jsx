import '../../styles/components/projects.css';

const ProjectFilter = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'viz', label: 'Data Visualization' },
    { id: 'web', label: 'Web App' }
  ];

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