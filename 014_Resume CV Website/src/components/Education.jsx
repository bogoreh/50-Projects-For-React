import { resumeData } from '../data';

const Education = () => {
  const { education } = resumeData;
  
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-institution">{edu.institution}</h4>
              <span className="education-period">{edu.period}</span>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;