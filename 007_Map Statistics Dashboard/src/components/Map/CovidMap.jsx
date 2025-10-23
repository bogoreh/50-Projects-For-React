import React from 'react'
import './CovidMap.css'

const CovidMap = ({ selectedCountry, onCountrySelect }) => {
  // Simple SVG-based world map with major countries
  const countries = [
    { id: 'us', name: 'USA', d: 'M100,100 Q120,80 140,100 Q160,120 140,140 Q120,160 100,140 Q80,120 100,100', cases: '32.5M', color: '#ef4444' },
    { id: 'in', name: 'India', d: 'M300,200 Q320,180 340,200 Q360,220 340,240 Q320,260 300,240 Q280,220 300,200', cases: '44.9M', color: '#f59e0b' },
    { id: 'br', name: 'Brazil', d: 'M200,300 Q220,280 240,300 Q260,320 240,340 Q220,360 200,340 Q180,320 200,300', cases: '37.5M', color: '#84cc16' },
    { id: 'fr', name: 'France', d: 'M150,150 Q170,130 190,150 Q210,170 190,190 Q170,210 150,190 Q130,170 150,150', cases: '40.2M', color: '#3b82f6' },
    { id: 'de', name: 'Germany', d: 'M180,160 Q200,140 220,160 Q240,180 220,200 Q200,220 180,200 Q160,180 180,160', cases: '38.1M', color: '#8b5cf6' },
  ]

  return (
    <div className="map-container">
      <div className="map-header">
        <h2>COVID-19 Global Distribution</h2>
        <div className="map-legend">
          <div className="legend-item">
            <div className="legend-color high"></div>
            <span>High</span>
          </div>
          <div className="legend-item">
            <div className="legend-color medium"></div>
            <span>Medium</span>
          </div>
          <div className="legend-item">
            <div className="legend-color low"></div>
            <span>Low</span>
          </div>
        </div>
      </div>
      
      <div className="world-map">
        <svg viewBox="0 0 500 400" className="map-svg">
          {/* Background */}
          <rect width="500" height="400" fill="#0f172a" />
          
          {/* Countries */}
          {countries.map(country => (
            <g key={country.id}>
              <path
                d={country.d}
                fill={country.color}
                stroke="#1e293b"
                strokeWidth="2"
                className={`country-path ${
                  selectedCountry === country.name ? 'selected' : ''
                }`}
                onClick={() => onCountrySelect(country.name)}
              />
              
              {/* Country label */}
              <text
                x={parseInt(country.d.split(' ')[1].split(',')[0]) + 20}
                y={parseInt(country.d.split(' ')[1].split(',')[1]) + 5}
                fill="white"
                fontSize="10"
                fontWeight="bold"
              >
                {country.name}
              </text>
              
              {/* Cases label */}
              <text
                x={parseInt(country.d.split(' ')[1].split(',')[0]) + 20}
                y={parseInt(country.d.split(' ')[1].split(',')[1]) + 18}
                fill="#94a3b8"
                fontSize="8"
              >
                {country.cases}
              </text>
            </g>
          ))}
          
          {/* Map title */}
          <text x="250" y="30" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            COVID-19 Cases Worldwide
          </text>
        </svg>
      </div>
      
      <div className="map-info">
        <p>
          {selectedCountry === 'Global' 
            ? 'Click on any country to view detailed statistics'
            : `Showing data for ${selectedCountry}. Click another country or "Global" to compare.`
          }
        </p>
      </div>
    </div>
  )
}

export default CovidMap