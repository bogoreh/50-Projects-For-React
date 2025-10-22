import React from 'react';

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="speaker-card">
      <div className="speaker-image">
        <img src={speaker.avatar} alt={speaker.name} />
      </div>
      <div className="speaker-info">
        <h3>{speaker.name}</h3>
        <p className="speaker-title">{speaker.title}</p>
        <p className="speaker-company">{speaker.company}</p>
        <p className="speaker-topic">Topic: {speaker.topic}</p>
        <p className="speaker-bio">{speaker.bio}</p>
        <div className="speaker-social">
          <span>@{speaker.social.twitter}</span>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;