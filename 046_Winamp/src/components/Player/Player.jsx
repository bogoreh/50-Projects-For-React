import React from 'react'
import './Player.css'

const Player = ({ currentTrack, isPlaying, onPlay, onPause }) => {
  return (
    <div className="player">
      <div className="display">
        <div className="track-info">
          {currentTrack ? (
            <>
              <div className="track-name">{currentTrack.name}</div>
              <div className="artist-name">{currentTrack.artists[0]?.name}</div>
            </>
          ) : (
            <div>No track selected</div>
          )}
        </div>
        <div className="time-display">0:00</div>
      </div>
      
      <div className="controls">
        <button className="control-btn prev">◀◀</button>
        <button 
          className="control-btn play-pause" 
          onClick={isPlaying ? onPause : onPlay}
        >
          {isPlaying ? '❚❚' : '▶'}
        </button>
        <button className="control-btn next">▶▶</button>
        <button className="control-btn stop">■</button>
        <button className="control-btn eject">⏏</button>
      </div>
      
      <div className="volume">
        <div className="volume-label">Volume</div>
        <input type="range" min="0" max="100" className="volume-slider" />
      </div>
      
      <div className="progress">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '0%' }}></div>
        </div>
      </div>
    </div>
  )
}

export default Player