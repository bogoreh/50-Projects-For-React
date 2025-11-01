import React from 'react'

const ProjectCard = ({ repo }) => {
  return (
    <div className="project-card">
      <h4>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.name}
        </a>
      </h4>
      <p className="project-description">
        {repo.description || 'No description provided'}
      </p>
      <div className="project-stats">
        <span className="stat">⭐ {repo.stargazers_count}</span>
        <span className="stat">🍴 {repo.forks_count}</span>
        <span className="stat">
          {repo.language || 'Unknown'}
        </span>
      </div>
      {repo.homepage && (
        <a
          href={repo.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="demo-link"
        >
          Live Demo
        </a>
      )}
    </div>
  )
}

export default ProjectCard