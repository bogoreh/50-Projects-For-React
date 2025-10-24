import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.technologies.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard