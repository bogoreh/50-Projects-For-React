import React from 'react'

const Player = ({ position, size, gameOver }) => {
  return (
    <div
      className={`player ${gameOver ? 'dead' : ''}`}
      style={{
        width: size,
        height: size,
        left: position.x * size,
        top: position.y * size,
        backgroundImage: `url('/images/chicken.png')`
      }}
    />
  )
}

export default Player