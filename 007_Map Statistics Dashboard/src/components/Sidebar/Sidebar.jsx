import React from 'react'
import { countries } from '../../data/mockData'
import './Sidebar.css'

const Sidebar = ({ selectedCountry, onCountrySelect }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <h2>Countries</h2>
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search country..."
            className="search-input"
          />
        </div>
      </div>
      
      <div className="countries-list">
        <div 
          className={`country-item ${selectedCountry === 'Global' ? 'active' : ''}`}
          onClick={() => onCountrySelect('Global')}
        >
          <span className="country-name">🌍 Global</span>
        </div>
        
        {countries.map(country => (
          <div 
            key={country.id}
            className={`country-item ${selectedCountry === country.name ? 'active' : ''}`}
            onClick={() => onCountrySelect(country.name)}
          >
            <span className="country-flag">{country.flag}</span>
            <span className="country-name">{country.name}</span>
            <span className="country-cases">{country.totalCases.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar