function ProductCard({ product, onUpvote }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString()
  }

  return (
    <div className="product-card">
      <div className="vote-section">
        <button 
          className="upvote-btn"
          onClick={() => onUpvote(product.id)}
          aria-label={`Upvote ${product.name}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 4L3 15H9V20H15V15H21L12 4Z" fill="currentColor"/>
          </svg>
        </button>
        <div className="vote-count">{product.votes}</div>
      </div>

      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        {product.url && (
          <a 
            href={product.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="product-url"
          >
            Visit Website
          </a>
        )}
        
        <div className="product-meta">
          <span className="category">{product.category}</span>
          <span className="date">{formatDate(product.createdAt)}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard