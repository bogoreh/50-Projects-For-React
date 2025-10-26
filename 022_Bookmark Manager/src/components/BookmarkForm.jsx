import { useState, useEffect } from 'react'

const BookmarkForm = ({ onSubmit, editingBookmark }) => {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    if (editingBookmark) {
      setTitle(editingBookmark.title)
      setUrl(editingBookmark.url)
      setCategory(editingBookmark.category || '')
    } else {
      setTitle('')
      setUrl('')
      setCategory('')
    }
  }, [editingBookmark])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!title.trim() || !url.trim()) {
      alert('Please fill in both title and URL')
      return
    }

    // Add https:// if missing
    let formattedUrl = url
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = 'https://' + formattedUrl
    }

    onSubmit({
      title: title.trim(),
      url: formattedUrl,
      category: category.trim() || 'General',
      date: new Date().toLocaleDateString()
    })

    setTitle('')
    setUrl('')
    setCategory('')
  }

  return (
    <div className="bookmark-form-container">
      <h2>{editingBookmark ? 'Edit Bookmark' : 'Add New Bookmark'}</h2>
      <form onSubmit={handleSubmit} className="bookmark-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Website Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            placeholder="Website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            placeholder="Category (optional)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-input"
          />
        </div>
        
        <button type="submit" className="submit-btn">
          {editingBookmark ? 'Update Bookmark' : 'Add Bookmark'}
        </button>
        
        {editingBookmark && (
          <button 
            type="button" 
            className="cancel-btn"
            onClick={() => window.location.reload()}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  )
}

export default BookmarkForm