import React from 'react'
import BlogCard from '../components/BlogCard'
import ProjectCard from '../components/ProjectCard'
import { blogPosts, projects } from '../data/sampleData'

const Home = () => {
  const featuredPosts = blogPosts.slice(0, 3)
  const featuredProjects = projects.slice(0, 2)

  return (
    <div className="container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Career Journey</h1>
          <p className="hero-subtitle">
            Sharing experiences, projects, and insights from my professional journey in tech.
          </p>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Blog Posts</h2>
        <div className="blog-grid">
          {featuredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="featured-section">
        <h2>Recent Projects</h2>
        <div className="projects-grid">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home