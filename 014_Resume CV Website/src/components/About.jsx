import { resumeData } from '../data';

const About = () => {
  const { personalInfo } = resumeData;
  
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>{personalInfo.summary}</p>
          <div className="about-details">
            <div className="detail-item">
              <strong>Email:</strong> {personalInfo.email}
            </div>
            <div className="detail-item">
              <strong>Phone:</strong> {personalInfo.phone}
            </div>
            <div className="detail-item">
              <strong>Location:</strong> {personalInfo.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;