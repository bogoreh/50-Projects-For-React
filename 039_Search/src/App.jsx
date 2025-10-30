import { useState } from 'react'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import './index.css'

// Sample data for search
const sampleData = [
  { id: 1, title: 'React Tutorial', description: 'Learn React basics', category: 'Programming' },
  { id: 2, title: 'JavaScript Guide', description: 'Complete JavaScript reference', category: 'Programming' },
  { id: 3, title: 'CSS Tricks', description: 'Advanced CSS techniques', category: 'Design' },
  { id: 4, title: 'Vite Setup', description: 'How to set up Vite for React', category: 'Tools' },
  { id: 5, title: 'Web Development', description: 'Full-stack web development guide', category: 'Programming' },
  { id: 6, title: 'UI Design Principles', description: 'Fundamentals of good UI design', category: 'Design' }
]

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setSearchResults([])
      setHasSearched(false)
      return
    }

    const filteredResults = sampleData.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setSearchResults(filteredResults)
    setHasSearched(true)
  }

  const clearSearch = () => {
    setSearchResults([])
    setHasSearched(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Search App</h1>
        <p>Find what you're looking for</p>
      </header>
      
      <main className="app-main">
        <SearchForm onSearch={handleSearch} onClear={clearSearch} />
        <SearchResults 
          results={searchResults} 
          hasSearched={hasSearched}
        />
      </main>
    </div>
  )
}

export default App