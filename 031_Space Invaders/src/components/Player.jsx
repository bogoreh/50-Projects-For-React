import React from 'react'

const Player = ({ position }) => {
  return (
    <div 
      className="player"
      style={{ left: `${position}px` }}
    >
      <div className="player-ship">
        <div className="player-cockpit"></div>
        <div className="player-wings"></div>
      </div>
    </div>
  )
}

export default Player