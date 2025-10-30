import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <h1>About Page</h1>
      <div className={styles.content}>
        <p>
          This is a simple React application built with Vite. 
          It demonstrates a basic project structure with components, 
          pages, and CSS modules.
        </p>
        <div className={styles.features}>
          <h2>Features:</h2>
          <ul>
            <li>⚡ Fast development with Vite</li>
            <li>🎯 React 18 with hooks</li>
            <li>🎨 CSS Modules for styling</li>
            <li>📁 Organized folder structure</li>
            <li>🔧 Easy to extend</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About