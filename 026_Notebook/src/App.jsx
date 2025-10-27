import { useState, useMemo } from 'react'
import NoteForm from './components/NoteForm'
import NoteCard from './components/NoteCard'
import SearchBar from './components/SearchBar'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [notes, setNotes] = useLocalStorage('notebook-notes', [])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['work', 'personal', 'ideas', 'tasks']

  const filteredNotes = useMemo(() => {
    return notes.filter(note => {
      const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          note.content.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [notes, searchTerm, selectedCategory])

  const addNote = (newNote) => {
    const note = {
      id: Date.now().toString(),
      ...newNote,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    setNotes(prevNotes => [note, ...prevNotes])
  }

  const updateNote = (id, updatedNote) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id
          ? { ...updatedNote, id, updatedAt: new Date().toISOString() }
          : note
      )
    )
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>📓 My Notebook</h1>
        <p>Organize your thoughts and ideas</p>
      </header>

      <div className="app-container">
        <div className="sidebar">
          <NoteForm onSubmit={addNote} categories={categories} />
        </div>

        <div className="main-content">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categories={categories}
          />

          <div className="notes-stats">
            <span>{filteredNotes.length} note{filteredNotes.length !== 1 ? 's' : ''}</span>
          </div>

          <div className="notes-grid">
            {filteredNotes.length === 0 ? (
              <div className="empty-state">
                <p>No notes found. Create your first note!</p>
              </div>
            ) : (
              filteredNotes.map(note => (
                <NoteCard
                  key={note.id}
                  note={note}
                  onUpdate={updateNote}
                  onDelete={deleteNote}
                  categories={categories}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App