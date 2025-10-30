import React from 'react'
import PreviewCard from './PreviewCard'

const SpinnerDemo = () => {
  const spinners = [
    { name: 'spinner-1', title: 'Classic Spinner' },
    { name: 'spinner-2', title: 'Pulse Dot' },
    { name: 'spinner-3', title: 'Rotating Cube' },
    { name: 'spinner-4', title: 'Chasing Dots' },
    { name: 'spinner-5', title: 'Wave Pulse' },
    { name: 'spinner-6', title: 'Bouncing Ball' },
    { name: 'spinner-7', title: 'Flipping Square' },
    { name: 'spinner-8', title: 'Rainbow Ring' },
  ]

  return (
    <div className="demo-section">
      <h2>Loading Spinners</h2>
      <div className="grid-container">
        {spinners.map((spinner) => (
          <PreviewCard
            key={spinner.name}
            title={spinner.title}
            className={spinner.name}
            type="spinner"
          />
        ))}
      </div>
    </div>
  )
}

export default SpinnerDemo