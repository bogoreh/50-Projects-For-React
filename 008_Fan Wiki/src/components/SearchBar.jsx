import React from 'react'

function SearchBar({ searchTerm, onSearchChange, selectedSpecies, onSpeciesChange, species }) {
  return (
    <div className="search-section">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search characters..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        <select
          value={selectedSpecies}
          onChange={(e) => onSpeciesChange(e.target.value)}
          className="species-filter"
        >
          {species.map(spec => (
            <option key={spec} value={spec}>{spec}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SearchBar