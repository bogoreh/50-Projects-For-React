function Header({ onAddProduct }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Product Hunt</h1>
          </div>
          <button 
            className="add-product-btn"
            onClick={onAddProduct}
          >
            + Add Product
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header