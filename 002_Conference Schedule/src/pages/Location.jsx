import React from 'react';
import { conferenceData } from '../data/conferenceData';

const Location = () => {
  return (
    <div className="page location">
      <div className="container">
        <h1>Conference Location</h1>
        
        <div className="location-info">
          <div className="location-details">
            <h2>{conferenceData.location.name}</h2>
            <p>{conferenceData.location.address}</p>
            
            <div className="location-features">
              <h3>Venue Features:</h3>
              <ul>
                <li>Modern auditorium with 500+ seating capacity</li>
                <li>High-speed WiFi throughout the venue</li>
                <li>Multiple breakout rooms for workshops</li>
                <li>Catering and coffee stations</li>
                <li>Accessible facilities</li>
                <li>Networking areas</li>
              </ul>
            </div>

            <div className="transportation">
              <h3>Getting There:</h3>
              <p><strong>Public Transit:</strong> 5-minute walk from Montgomery St. BART station</p>
              <p><strong>Parking:</strong> Multiple parking garages within 2 blocks</p>
              <p><strong>Rideshare:</strong> Designated drop-off/pick-up zone at main entrance</p>
            </div>
          </div>

          <div className="map-placeholder">
            <div className="map">
              <p>📍 Interactive Map</p>
              <p>Lat: {conferenceData.location.coordinates.lat}</p>
              <p>Lng: {conferenceData.location.coordinates.lng}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;