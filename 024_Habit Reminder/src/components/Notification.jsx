import React, { useEffect } from 'react'

const Notification = ({ habit, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 10000) // Auto-close after 10 seconds

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="notification-overlay">
      <div className="notification">
        <div className="notification-header">
          <h3>⏰ Time for your habit!</h3>
          <button className="notification-close" onClick={onClose}>×</button>
        </div>
        <div className="notification-body">
          <p><strong>{habit.name}</strong></p>
          {habit.description && <p>{habit.description}</p>}
        </div>
        <div className="notification-actions">
          <button className="btn btn-success" onClick={onClose}>
            Got it!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Notification