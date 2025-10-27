import { useState } from 'react'

function NoteCard({ note, onUpdate, onDelete, categories }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(note.title)
  const [editContent, setEditContent] = useState(note.content)
  const [editCategory, setEditCategory] = useState(note.category)

  const handleSave = () => {
    if (!editTitle.trim() || !editContent.trim()) return

    onUpdate(note.id, {
      title: editTitle.trim(),
      content: editContent.trim(),
      category: editCategory
    })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditTitle(note.title)
    setEditContent(note.content)
    setEditCategory(note.category)
    setIsEditing(false)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getCategoryColor = (category) => {
    const colors = {
      work: '#3b82f6',
      personal: '#10b981',
      ideas: '#8b5cf6',
      tasks: '#f59e0b'
    }
    return colors[category] || '#6b7280'
  }

  return (
    <div className="note-card" style={{ borderLeftColor: getCategoryColor(note.category) }}>
      {isEditing ? (
        <div className="note-edit">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="edit-input"
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="edit-textarea"
            rows="3"
          />
          <select
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
            className="edit-select"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
          <div className="edit-actions">
            <button onClick={handleSave} className="save-btn">Save</button>
            <button onClick={handleCancel} className="cancel-btn">Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <div className="note-header">
            <h3 className="note-title">{note.title}</h3>
            <div className="note-actions">
              <button onClick={() => setIsEditing(true)} className="icon-btn edit-btn">
                ✏️
              </button>
              <button onClick={() => onDelete(note.id)} className="icon-btn delete-btn">
                🗑️
              </button>
            </div>
          </div>
          
          <p className="note-content">{note.content}</p>
          
          <div className="note-footer">
            <span 
              className="category-tag"
              style={{ backgroundColor: getCategoryColor(note.category) }}
            >
              {note.category}
            </span>
            <span className="note-date">
              {formatDate(note.updatedAt)}
            </span>
          </div>
        </>
      )}
    </div>
  )
}

export default NoteCard