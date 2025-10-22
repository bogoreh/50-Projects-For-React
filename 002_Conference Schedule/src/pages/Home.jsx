import React from 'react';
import { Link } from 'react-router-dom';
import { conferenceData } from '../data/conferenceData';

const Home = () => {
  const featuredSpeakers = conferenceData.speakers.slice(0, 3);

  return (
    <div className="page home">
      <section className="hero">
        <div className="container">
          <h1>Welcome to {conferenceData.eventName}</h1>
          <p className="hero-tagline">{conferenceData.tagline}</p>
          <div className="hero-info">
            <p>📅 {conferenceData.date}</p>
            <p>📍 {conferenceData.location.name}</p>
          </div>
          <div className="cta-buttons">
            <Link to="/schedule" className="btn btn-primary">View Schedule</Link>
            <Link to="/speakers" className="btn btn-secondary">Meet Speakers</Link>
          </div>
        </div>
      </section>

      <section className="featured-speakers">
        <div className="container">
          <h2>Featured Speakers</h2>
          <div className="speakers-grid">
            {featuredSpeakers.map(speaker => (
              <div key={speaker.id} className="featured-speaker">
                <img src={speaker.avatar} alt={speaker.name} />
                <h3>{speaker.name}</h3>
                <p>{speaker.title} at {speaker.company}</p>
                <p className="topic">{speaker.topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quick-info">
        <div className="container">
          <div className="info-cards">
            <div className="info-card">
              <h3>📍 Location</h3>
              <p>{conferenceData.location.address}</p>
              <Link to="/location" className="btn-link">Get Directions</Link>
            </div>
            <div className="info-card">
              <h3>📋 Schedule</h3>
              <p>Two days of talks, workshops, and networking</p>
              <Link to="/schedule" className="btn-link">View Full Schedule</Link>
            </div>
            <div className="info-card">
              <h3>👥 Community</h3>
              <p>Join 500+ React developers</p>
              <Link to="/conduct" className="btn-link">Code of Conduct</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;