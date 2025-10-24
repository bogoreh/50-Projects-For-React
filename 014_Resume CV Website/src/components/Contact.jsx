import { resumeData } from '../data';

const Contact = () => {
  const { personalInfo } = resumeData;
  
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email:</strong>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
            <div className="contact-item">
              <strong>Phone:</strong>
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            </div>
            <div className="contact-item">
              <strong>LinkedIn:</strong>
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                {personalInfo.linkedin}
              </a>
            </div>
            <div className="contact-item">
              <strong>GitHub:</strong>
              <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">
                {personalInfo.github}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;