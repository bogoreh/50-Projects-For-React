import React from 'react'

const ImageCard = ({ item, onDelete }) => {
  return (
    <div className="card image-card">
      <div className="card-header">
        <h3>{item.title}</h3>
        <button onClick={onDelete} className="delete-btn">×</button>
      </div>
      <div className="card-image">
        <img src={item.content} alt={item.title} />
      </div>
      <div className="card-footer">
        <span className="timestamp">{item.timestamp}</span>
      </div>
    </div>
  )
}

export default ImageCard