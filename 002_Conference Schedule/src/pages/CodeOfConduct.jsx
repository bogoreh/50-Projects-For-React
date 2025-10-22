import React from 'react';
import { conferenceData } from '../data/conferenceData';

const CodeOfConduct = () => {
  return (
    <div className="page conduct">
      <div className="container">
        <h1>Code of Conduct</h1>
        
        <div className="conduct-content">
          <p>
            {conferenceData.eventName} is dedicated to providing a harassment-free conference 
            experience for everyone, regardless of gender, gender identity and expression, 
            age, sexual orientation, disability, physical appearance, body size, race, 
            ethnicity, religion (or lack thereof), or technology choices.
          </p>

          <h2>Our Standards</h2>
          <ul>
            {conferenceData.codeOfConduct.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>Reporting Issues</h2>
          <p>
            If you are being harassed, notice that someone else is being harassed, 
            or have any other concerns, please contact a member of conference staff immediately.
          </p>

          <div className="contact-info">
            <h3>Emergency Contacts:</h3>
            <p>📞 Conference Staff: (555) 123-REACT</p>
            <p>📧 Email: safety@reactnexus2024.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;