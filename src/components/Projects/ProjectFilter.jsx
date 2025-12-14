import '../../styles/components/projects.css';
import filters from '../../data/project_filters';

const ProjectFilter = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="projects-filter-container">
      {/* Tampilan Desktop: List Tombol */}
      <div className="project-filters desktop-view">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Tampilan Mobile: Dropdown Select */}
      <div className="project-filters mobile-view">
        <div className="select-wrapper">
          <select 
            value={activeFilter} 
            onChange={(e) => setActiveFilter(e.target.value)}
            className="filter-select"
          >
            {filters.map((filter) => (
              <option key={filter.id} value={filter.id}>
                {filter.label}
              </option>
            ))}
          </select>
          {/* Icon Panah Custom (Opsional, menggunakan CSS border trick atau SVG) */}
          <div className="select-arrow"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;