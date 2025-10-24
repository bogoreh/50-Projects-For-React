import React from 'react'

const About = () => {
  return (
    <div className="container">
      <div className="about-content">
        <div className="about-header">
          <h1>About Me</h1>
          <p className="about-subtitle">Passionate developer sharing career experiences</p>
        </div>
        
        <div className="about-grid">
          <div className="about-text">
            <h2>My Journey</h2>
            <p>
              Welcome to my professional blog! I'm a passionate developer with experience 
              in modern web technologies. This space is where I share my career experiences, 
              project insights, and lessons learned along the way.
            </p>
            
            <h3>Skills & Technologies</h3>
            <ul className="skills-list">
              <li>JavaScript & TypeScript</li>
              <li>React & Vue.js</li>
              <li>Node.js & Express</li>
              <li>Python & Django</li>
              <li>Cloud Technologies</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>100+</h3>
              <p>Blog Posts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About