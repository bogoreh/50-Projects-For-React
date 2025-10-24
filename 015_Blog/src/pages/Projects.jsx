import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/sampleData'

const Projects = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>My Projects</h1>
        <p>A collection of projects I've worked on throughout my career</p>
      </div>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects