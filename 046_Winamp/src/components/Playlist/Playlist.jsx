import React, { useState } from 'react'
import './Playlist.css'

const Playlist = ({ tracks, onSearch, onTrackSelect, currentTrack }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      onSearch(searchQuery)
    }
  }

  return (
    <div className="playlist">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tracks..."
          className="search-input"
        />
        <button type="submit" className="search-btn">Search</button>
      </form>
      
      <div className="track-list">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            className={`track-item ${currentTrack?.id === track.id ? 'active' : ''}`}
            onClick={() => onTrackSelect(track)}
          >
            <span className="track-number">{index + 1}</span>
            <div className="track-details">
              <div className="track-title">{track.name}</div>
              <div className="track-artist">{track.artists[0]?.name}</div>
            </div>
            <span className="track-duration">
              {Math.floor(track.duration_ms / 60000)}:
              {((track.duration_ms % 60000) / 1000).toFixed(0).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Playlist