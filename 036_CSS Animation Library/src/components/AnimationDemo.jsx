import React from 'react'
import PreviewCard from './PreviewCard'

const AnimationDemo = () => {
  const animations = [
    { name: 'bounce', title: 'Bounce' },
    { name: 'pulse', title: 'Pulse' },
    { name: 'shake', title: 'Shake' },
    { name: 'fade-in', title: 'Fade In' },
    { name: 'slide-in', title: 'Slide In' },
    { name: 'rotate', title: 'Rotate' },
    { name: 'flip', title: 'Flip' },
    { name: 'zoom', title: 'Zoom' },
  ]

  return (
    <div className="demo-section">
      <h2>CSS Animations</h2>
      <div className="grid-container">
        {animations.map((animation) => (
          <PreviewCard
            key={animation.name}
            title={animation.title}
            className={animation.name}
            type="animation"
          />
        ))}
      </div>
    </div>
  )
}

export default AnimationDemo