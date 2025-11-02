import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="navigation">
      <h2>Navigation</h2>
      
      <div className="map-placeholder">
        🗺️
        <div className="map-text">Navigation Map</div>
      </div>

      <div className="destination-input">
        <input 
          type="text" 
          placeholder="Enter destination..."
          className="destination-field"
        />
        <button className="go-btn">GO</button>
      </div>

      <div className="recent-destinations">
        <h3>Recent Destinations</h3>
        <div className="destination">Home</div>
        <div className="destination">Work</div>
        <div className="destination">Supercharger</div>
        <div className="destination">Shopping Mall</div>
      </div>
    </div>
  )
}

export default Navigation