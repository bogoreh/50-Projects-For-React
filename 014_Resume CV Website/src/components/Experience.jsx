import { resumeData } from '../data';

const Experience = () => {
  const { experience } = resumeData;
  
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-list">
          {experience.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-position">{exp.position}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <h4 className="experience-company">{exp.company}</h4>
              <ul className="experience-description">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;