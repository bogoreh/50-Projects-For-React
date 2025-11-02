import React from 'react'
import './Equalizer.css'

const Equalizer = () => {
  const bands = [60, 230, 910, 3000, 14000]
  
  return (
    <div className="equalizer">
      <div className="eq-bands">
        {bands.map((freq, index) => (
          <div key={index} className="eq-band">
            <div className="eq-frequency">{freq}Hz</div>
            <input 
              type="range" 
              min="-12" 
              max="12" 
              defaultValue="0" 
              className="eq-slider" 
              orient="vertical"
            />
            <div className="eq-value">0dB</div>
          </div>
        ))}
      </div>
      <div className="eq-presets">
        <select className="preset-select">
          <option>Default</option>
          <option>Rock</option>
          <option>Jazz</option>
          <option>Classical</option>
          <option>Bass Boost</option>
        </select>
        <button className="eq-btn">On</button>
        <button className="eq-btn">Auto</button>
      </div>
    </div>
  )
}

export default Equalizer