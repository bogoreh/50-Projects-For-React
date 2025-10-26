import { useState } from 'react'
import BookmarkForm from './components/BookmarkForm'
import BookmarkList from './components/BookmarkList'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [bookmarks, setBookmarks] = useLocalStorage('bookmarks', [])
  const [editingBookmark, setEditingBookmark] = useState(null)

  const addBookmark = (bookmark) => {
    if (editingBookmark) {
      setBookmarks(bookmarks.map(b => 
        b.id === editingBookmark.id ? { ...bookmark, id: editingBookmark.id } : b
      ))
      setEditingBookmark(null)
    } else {
      setBookmarks([...bookmarks, { ...bookmark, id: Date.now() }])
    }
  }

  const deleteBookmark = (id) => {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id))
  }

  const editBookmark = (bookmark) => {
    setEditingBookmark(bookmark)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 Bookmark Manager</h1>
        <p>Save and organize your favorite websites</p>
      </header>

      <main className="app-main">
        <BookmarkForm 
          onSubmit={addBookmark}
          editingBookmark={editingBookmark}
        />
        
        <BookmarkList 
          bookmarks={bookmarks}
          onDelete={deleteBookmark}
          onEdit={editBookmark}
        />
      </main>

      <footer className="app-footer">
        <p>Your bookmarks are saved locally in your browser</p>
      </footer>
    </div>
  )
}

export default App