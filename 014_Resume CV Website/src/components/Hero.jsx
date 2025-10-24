import { resumeData } from '../data';

const Hero = () => {
  const { personalInfo } = resumeData;
  
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{personalInfo.name}</h1>
        <h2 className="hero-subtitle">{personalInfo.title}</h2>
        <p className="hero-description">{personalInfo.summary}</p>
        <div className="hero-contact">
          <span>📧 {personalInfo.email}</span>
          <span>📱 {personalInfo.phone}</span>
          <span>📍 {personalInfo.location}</span>
        </div>
        <div className="hero-links">
          <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;