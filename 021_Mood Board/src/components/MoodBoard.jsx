import React, { useState, useRef } from 'react'
import ImageCard from './ImageCard'
import NoteCard from './NoteCard'

const MoodBoard = () => {
  const [items, setItems] = useState([])
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const fileInputRef = useRef(null)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const newItem = {
          id: Date.now(),
          type: 'image',
          content: e.target.result,
          title: title || 'Untitled Image',
          timestamp: new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        }
        setItems(prev => [newItem, ...prev])
        setTitle('')
        event.target.value = ''
      }
      reader.readAsDataURL(file)
    }
  }

  const addNote = () => {
    if (note.trim()) {
      const newItem = {
        id: Date.now(),
        type: 'note',
        content: note,
        title: title || 'Untitled Note',
        timestamp: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }
      setItems(prev => [newItem, ...prev])
      setNote('')
      setTitle('')
    }
  }

  const deleteItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="mood-board">
      {/* Header */}
      <div className="header">
        <h1>✨ Mood Board</h1>
        <p>Collect your inspiration and ideas in one beautiful space</p>
      </div>

      {/* Controls */}
      <div className="controls glass-effect">
        <div className="control-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a title..."
          />
        </div>

        <div className="control-group">
          <label>Add Note</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write your inspiration note..."
          />
        </div>

        <div className="control-group">
          <label>Upload Image</label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="file-input"
            style={{ display: 'none' }}
          />
          <button onClick={triggerFileInput} className="btn btn-secondary">
            📁 Choose Image
          </button>
        </div>

        <div className="control-group">
          <button onClick={addNote} className="btn btn-primary">
            📝 Add Note
          </button>
        </div>
      </div>

      {/* Board */}
      <div className="board glass-effect">
        {items.length === 0 ? (
          <div className="empty-state">
            <h3>Your mood board is empty</h3>
            <p>Start by uploading an image or adding a note!</p>
          </div>
        ) : (
          <div className="board-content">
            {items.map(item => 
              item.type === 'image' ? (
                <ImageCard 
                  key={item.id} 
                  item={item} 
                  onDelete={() => deleteItem(item.id)}
                />
              ) : (
                <NoteCard 
                  key={item.id} 
                  item={item} 
                  onDelete={() => deleteItem(item.id)}
                />
              )
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default MoodBoard