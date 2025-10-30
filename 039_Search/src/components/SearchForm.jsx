import { useState } from 'react'

function SearchForm({ onSearch, onClear }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  const handleClear = () => {
    setSearchTerm('')
    onClear()
  }

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <div className="search-input-group">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter search term..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
          <button 
            type="button" 
            onClick={handleClear}
            className="clear-button"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchForm