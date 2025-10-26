const BookmarkItem = ({ bookmark, onDelete, onEdit }) => {
  const handleVisit = () => {
    window.open(bookmark.url, '_blank', 'noopener,noreferrer')
  }

  const getFavicon = (url) => {
    try {
      const domain = new URL(url).hostname
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`
    } catch {
      return 'https://www.google.com/s2/favicons?domain=google.com&sz=32'
    }
  }

  return (
    <div className="bookmark-item">
      <div className="bookmark-header">
        <img 
          src={getFavicon(bookmark.url)} 
          alt="Favicon" 
          className="favicon"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
        <div className="bookmark-info">
          <h4 className="bookmark-title">{bookmark.title}</h4>
          <p className="bookmark-url">{bookmark.url}</p>
          <div className="bookmark-meta">
            <span className="category-tag">{bookmark.category}</span>
            <span className="date-added">{bookmark.date}</span>
          </div>
        </div>
      </div>
      
      <div className="bookmark-actions">
        <button 
          onClick={handleVisit}
          className="action-btn visit-btn"
          title="Visit Website"
        >
          🔗 Visit
        </button>
        <button 
          onClick={() => onEdit(bookmark)}
          className="action-btn edit-btn"
          title="Edit Bookmark"
        >
          ✏️ Edit
        </button>
        <button 
          onClick={() => onDelete(bookmark.id)}
          className="action-btn delete-btn"
          title="Delete Bookmark"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  )
}

export default BookmarkItem