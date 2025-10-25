import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  const getStatusClass = (status) => {
    return status.toLowerCase().includes('completed') ? 'status-completed' : 'status-in-progress';
  };

  const getCategoryClass = (category) => {
    const categoryMap = {
      'Web Development': 'category-web',
      'Mobile Development': 'category-mobile',
      'SaaS': 'category-saas',
      'Hospitality': 'category-hospitality',
      'EdTech': 'category-edtech',
      'Real Estate': 'category-real-estate'
    };
    return categoryMap[category] || '';
  };

  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <div className="project-image">
        {project.image}
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          <span className={`tag ${getCategoryClass(project.category)}`}>
            {project.category}
          </span>
          <span className="tag">{project.duration}</span>
          <span className={`tag ${getStatusClass(project.status)}`}>
            {project.status}
          </span>
        </div>
        <div className="project-tags">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tag">{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tag">+{project.technologies.length - 3} more</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;