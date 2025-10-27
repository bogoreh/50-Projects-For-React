import { useState } from 'react'

function NoteForm({ onSubmit, categories }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState(categories[0])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return

    onSubmit({
      title: title.trim(),
      content: content.trim(),
      category
    })

    setTitle('')
    setContent('')
    setCategory(categories[0])
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h3>Add New Note</h3>
      
      <div className="form-group">
        <input
          type="text"
          placeholder="Note title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <textarea
          placeholder="Write your note here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="form-textarea"
          rows="4"
          required
        />
      </div>

      <div className="form-group">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-select"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="submit-btn">
        Add Note
      </button>
    </form>
  )
}

export default NoteForm