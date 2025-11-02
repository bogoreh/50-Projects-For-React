import React from 'react'
import './Dashboard.css'

const Dashboard = ({ carState }) => {
  return (
    <div className="dashboard">
      <div className="speed-display">
        <div className="speed">{carState.speed}</div>
        <div className="speed-unit">mph</div>
      </div>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{carState.battery}%</div>
          <div className="stat-label">Battery</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{carState.temperature}°</div>
          <div className="stat-label">Temp</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{carState.ac ? 'ON' : 'OFF'}</div>
          <div className="stat-label">AC</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{carState.mediaPlaying ? '▶️' : '⏸️'}</div>
          <div className="stat-label">Media</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard