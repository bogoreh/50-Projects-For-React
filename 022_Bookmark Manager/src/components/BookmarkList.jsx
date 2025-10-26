import BookmarkItem from './BookmarkItem'

const BookmarkList = ({ bookmarks, onDelete, onEdit }) => {
  if (bookmarks.length === 0) {
    return (
      <div className="bookmark-list empty">
        <div className="empty-state">
          <h3>No bookmarks yet</h3>
          <p>Add your first bookmark to get started!</p>
        </div>
      </div>
    )
  }

  // Group bookmarks by category
  const groupedBookmarks = bookmarks.reduce((groups, bookmark) => {
    const category = bookmark.category || 'General'
    if (!groups[category]) {
      groups[category] = []
    }
    groups[category].push(bookmark)
    return groups
  }, {})

  return (
    <div className="bookmark-list">
      <h2>Your Bookmarks ({bookmarks.length})</h2>
      
      {Object.entries(groupedBookmarks).map(([category, categoryBookmarks]) => (
        <div key={category} className="category-section">
          <h3 className="category-title">{category}</h3>
          <div className="bookmarks-grid">
            {categoryBookmarks.map(bookmark => (
              <BookmarkItem
                key={bookmark.id}
                bookmark={bookmark}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookmarkList