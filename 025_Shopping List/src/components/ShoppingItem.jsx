import React from 'react'
import '../styles/App.css'

const ShoppingItem = ({ item, onToggle, onDelete }) => {
  return (
    <li className={`shopping-item ${item.completed ? 'completed' : ''}`}>
      <div className="item-content">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onToggle(item.id)}
          className="checkbox"
        />
        <span className="item-text">{item.name}</span>
      </div>
      <button
        onClick={() => onDelete(item.id)}
        className="delete-button"
        aria-label="Delete item"
      >
        🗑️
      </button>
    </li>
  )
}

export default ShoppingItem