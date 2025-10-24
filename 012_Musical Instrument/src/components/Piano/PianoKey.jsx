import React from 'react'

const PianoKey = ({ note, isActive, onMouseDown, onMouseUp, onMouseLeave }) => {
  const className = `piano-key piano-key--${note.type} ${isActive ? 'piano-key--active' : ''}`
  
  return (
    <button
      className={className}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onTouchStart={onMouseDown}
      onTouchEnd={onMouseUp}
    >
      <div className="piano-key-label">
        <span className="piano-key-note">{note.note}</span>
        <span className="piano-key-key">{note.key}</span>
      </div>
    </button>
  )
}

export default PianoKey