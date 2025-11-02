import React from 'react'
import './Window.css'

const Window = ({ title, children, isActive, onActivate }) => {
  return (
    <div 
      className={`window ${isActive ? 'window-active' : ''}`} 
      onClick={onActivate}
    >
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        {children}
      </div>
    </div>
  )
}

export default Window