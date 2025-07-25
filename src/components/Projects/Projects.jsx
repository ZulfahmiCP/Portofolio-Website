import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Sentiment Analysis Engine',
      description: {
        problem: 'Businesses need to understand customer feedback on social media in real-time.',
        solution: 'Built a web app using an LSTM model to classify social media posts.',
        impact: 'Achieved 88% accuracy in sentiment classification.'
      },
      tags: ['ml', 'viz'],
      skills: ['Python', 'TensorFlow', 'Flask'],
      image: 'https://placehold.co/600x400/111317/76BA9D?text=Project+1'
    },
    // Add other projects similarly
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const visibleProjects = projectsExpanded 
    ? filteredProjects 
    : filteredProjects.slice(0, 3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="projects" 
      className={`scroll-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'ml' ? 'active' : ''}`}
            onClick={() => setFilter('ml')}
          >
            Machine Learning
          </button>
          <button 
            className={`filter-btn ${filter === 'viz' ? 'active' : ''}`}
            onClick={() => setFilter('viz')}
          >
            Data Visualization
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web App
          </button>
        </div>
        <div className="projects-grid">
          {visibleProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {filteredProjects.length > 3 && (
          <div className="show-more-container">
            <button 
              className={`btn btn-primary ${projectsExpanded ? 'sticky' : ''}`}
              onClick={() => setProjectsExpanded(!projectsExpanded)}
            >
              {projectsExpanded ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;