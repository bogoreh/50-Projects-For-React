import React from 'react';
import SpeakerCard from '../components/SpeakerCard';
import { conferenceData } from '../data/conferenceData';

const Speakers = () => {
  return (
    <div className="page speakers">
      <div className="container">
        <h1>Our Speakers</h1>
        <p className="page-subtitle">
          Meet the experts sharing their knowledge and experience in React development.
        </p>
        
        <div className="speakers-grid">
          {conferenceData.speakers.map(speaker => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;