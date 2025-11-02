import React from 'react'
import './Media.css'

const Media = ({ carState, setCarState }) => {
  const togglePlayback = () => {
    setCarState(prev => ({
      ...prev,
      mediaPlaying: !prev.mediaPlaying
    }))
  }

  const songs = [
    'Tesla Radio - Channel 1',
    'Electric Dreams',
    'Future Drive',
    'Cyber Beats',
    'Autopilot Ambient'
  ]

  return (
    <div className="media">
      <h2>Media Player</h2>
      
      <div className="now-playing">
        <div className="album-art">🎵</div>
        <div className="track-info">
          <div className="track-name">{carState.currentSong}</div>
          <div className="artist">Tesla Sound System</div>
        </div>
      </div>

      <div className="playback-controls">
        <button className="control-btn">⏮️</button>
        <button className="control-btn play-pause" onClick={togglePlayback}>
          {carState.mediaPlaying ? '⏸️' : '▶️'}
        </button>
        <button className="control-btn">⏭️</button>
      </div>

      <div className="volume-control">
        <span>🔈</span>
        <input type="range" className="volume-slider" min="0" max="100" />
        <span>🔊</span>
      </div>

      <div className="stations">
        <h3>Stations</h3>
        {songs.map((song, index) => (
          <div 
            key={index}
            className={`station ${carState.currentSong === song ? 'active' : ''}`}
            onClick={() => setCarState(prev => ({ ...prev, currentSong: song }))}
          >
            {song}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Media