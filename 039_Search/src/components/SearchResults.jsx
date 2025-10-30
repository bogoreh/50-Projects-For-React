function SearchResults({ results, hasSearched }) {
  if (!hasSearched) {
    return (
      <div className="search-results">
        <div className="welcome-message">
          <h2>Welcome to Search App</h2>
          <p>Enter a search term above to find relevant content.</p>
        </div>
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="search-results">
        <div className="no-results">
          <h3>No results found</h3>
          <p>Try different keywords or check your spelling.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="search-results">
      <div className="results-header">
        <h3>Search Results ({results.length})</h3>
      </div>
      <div className="results-list">
        {results.map(item => (
          <div key={item.id} className="result-item">
            <h4 className="result-title">{item.title}</h4>
            <p className="result-description">{item.description}</p>
            <span className="result-category">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResults