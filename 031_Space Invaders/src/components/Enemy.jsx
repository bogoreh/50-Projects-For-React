import React from 'react'

const Enemy = ({ position, type, isHit }) => {
  const enemyClass = `enemy enemy-type-${type} ${isHit ? 'enemy-hit' : ''}`
  
  return (
    <div 
      className={enemyClass}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    >
      <div className="enemy-body">
        <div className="enemy-eyes"></div>
      </div>
    </div>
  )
}

export default Enemy