import React from 'react'

const Bullet = ({ position, type }) => {
  const bulletClass = `bullet ${type}-bullet`
  
  return (
    <div 
      className={bulletClass}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  )
}

export default Bullet