import React from 'react'
import './StatusBar.css'

const StatusBar = ({ carState }) => {
  const currentTime = new Date().toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  })

  return (
    <div className="status-bar">
      <div className="time">{currentTime}</div>
      <div className="car-status">
        <span className="battery">🔋 {carState.battery}%</span>
        <span className="temperature">🌡️ {carState.temperature}°F</span>
      </div>
    </div>
  )
}

export default StatusBar