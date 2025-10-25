import React from 'react'

const Header = ({ stats, sortBy, onSort }) => {
  return (
    <header className="header">
      <div className="container">
        <h1>📚 FlashCards</h1>
        <div className="stats">
          <div className="stat">
            <span className="stat-number">{stats.total}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat">
            <span className="stat-number">{stats.done}</span>
            <span className="stat-label">Done</span>
          </div>
          <div className="stat">
            <span className="stat-number">{stats.remaining}</span>
            <span className="stat-label">Remaining</span>
          </div>
        </div>
        <div className="sort-controls">
          <label>Sort by:</label>
          <select 
            value={sortBy} 
            onChange={(e) => onSort(e.target.value)}
            className="sort-select"
          >
            <option value="default">Default</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="category">Category</option>
            <option value="done">Completion</option>
          </select>
        </div>
      </div>
    </header>
  )
}

export default Header