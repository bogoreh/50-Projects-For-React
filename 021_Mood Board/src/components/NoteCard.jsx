import React from 'react'

const NoteCard = ({ item, onDelete }) => {
  return (
    <div className="card note-card">
      <div className="card-header">
        <h3>{item.title}</h3>
        <button onClick={onDelete} className="delete-btn">×</button>
      </div>
      <div className="card-content">
        <p>{item.content}</p>
      </div>
      <div className="card-footer">
        <span className="timestamp">{item.timestamp}</span>
      </div>
    </div>
  )
}

export default NoteCard