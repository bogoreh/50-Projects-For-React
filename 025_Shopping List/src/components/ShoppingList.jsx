import React, { useState } from 'react'
import Header from './Header'
import ShoppingItem from './ShoppingItem'
import '../styles/App.css'

const ShoppingList = () => {
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')

  const addItem = (e) => {
    e.preventDefault()
    if (newItem.trim() === '') return

    const item = {
      id: Date.now(),
      name: newItem.trim(),
      completed: false,
      createdAt: new Date()
    }

    setItems([...items, item])
    setNewItem('')
  }

  const toggleItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const completedCount = items.filter(item => item.completed).length

  return (
    <div>
      <Header />
      
      <div className="shopping-list-container">
        <form onSubmit={addItem} className="add-item-form">
          <div className="form-group">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="What do you need to buy?"
              className="item-input"
            />
          </div>
          <button type="submit" className="add-button">
            Add Item
          </button>
        </form>

        <ul className="shopping-list">
          {items.length === 0 ? (
            <div className="empty-state">
              Your shopping list is empty. Add some items above!
            </div>
          ) : (
            items.map(item => (
              <ShoppingItem
                key={item.id}
                item={item}
                onToggle={toggleItem}
                onDelete={deleteItem}
              />
            ))
          )}
        </ul>

        {items.length > 0 && (
          <div className="stats">
            <span className="total-items">Total: {items.length}</span>
            <span className="completed-items">Completed: {completedCount}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ShoppingList