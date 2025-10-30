import React, { useState } from 'react'

const PreviewCard = ({ title, className, type }) => {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    if (type === 'animation') {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }
  }

  return (
    <div className="preview-card" onClick={handleClick}>
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-content">
        <div className={`preview-element ${className} ${isAnimating ? 'animate' : ''}`}>
          {type === 'spinner' && <div className="spinner-inner"></div>}
        </div>
      </div>
      <div className="card-footer">
        <code>.{className}</code>
      </div>
    </div>
  )
}

export default PreviewCard