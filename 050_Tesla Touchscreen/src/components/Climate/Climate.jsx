import React from 'react'
import './Climate.css'

const Climate = ({ carState, setCarState }) => {
  const adjustTemperature = (amount) => {
    setCarState(prev => ({
      ...prev,
      temperature: Math.max(60, Math.min(85, prev.temperature + amount))
    }))
  }

  const toggleAC = () => {
    setCarState(prev => ({
      ...prev,
      ac: !prev.ac
    }))
  }

  return (
    <div className="climate">
      <h2>Climate Control</h2>
      
      <div className="temperature-control">
        <button className="temp-btn" onClick={() => adjustTemperature(-1)}>-</button>
        <div className="temperature-display">
          <span className="temp-value">{carState.temperature}°F</span>
          <span className="ac-status">{carState.ac ? 'AC ON' : 'AC OFF'}</span>
        </div>
        <button className="temp-btn" onClick={() => adjustTemperature(1)}>+</button>
      </div>

      <div className="climate-buttons">
        <button 
          className={`ac-btn ${carState.ac ? 'active' : ''}`}
          onClick={toggleAC}
        >
          ❄️ AC
        </button>
        <button className="climate-btn">🔥 Heat</button>
        <button className="climate-btn">💨 Fan</button>
        <button className="climate-btn">🔄 Auto</button>
      </div>

      <div className="seat-controls">
        <h3>Seat Heaters</h3>
        <div className="seat-buttons">
          <button className="seat-btn">Driver: Off</button>
          <button className="seat-btn">Passenger: Off</button>
        </div>
      </div>
    </div>
  )
}

export default Climate