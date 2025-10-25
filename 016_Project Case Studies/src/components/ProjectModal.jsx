import React from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="modal-close" onClick={onClose}>×</button>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-subtitle">{project.category} • {project.duration} • {project.status}</p>
        </div>
        
        <div className="modal-body">
          <div className="modal-section">
            <h3>Overview</h3>
            <p>{project.details.overview}</p>
          </div>
          
          <div className="modal-section">
            <h3>Challenge</h3>
            <p>{project.details.challenge}</p>
          </div>
          
          <div className="modal-section">
            <h3>Solution</h3>
            <p>{project.details.solution}</p>
          </div>
          
          <div className="modal-section">
            <h3>Key Features</h3>
            <ul className="features-list">
              {project.details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="modal-section">
            <h3>Technologies Used</h3>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="modal-section">
            <h3>Results</h3>
            <p>{project.details.results}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;