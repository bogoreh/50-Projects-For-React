import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { products } from '../../data/products'
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="product-detail">
        <div className="not-found">
          <h2>Product not found</h2>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    // Optional: Show confirmation message
    alert(`Added ${quantity} ${product.name}(s) to cart!`)
  }

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decreaseQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1)
  }

  return (
    <div className="product-detail">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back to Products
      </button>
      
      <div className="product-detail-container">
        <div className="product-image-section">
          <img src={product.image} alt={product.name} className="product-detail-image" />
          <span className="product-category-badge">{product.category}</span>
        </div>
        
        <div className="product-info-section">
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-category">{product.category}</p>
          <p className="product-detail-description">
            {product.description}
          </p>
          
          <div className="product-detail-price">
            ${product.price}
          </div>
          
          <div className="quantity-selector">
            <label>Quantity:</label>
            <div className="quantity-controls">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
          </div>
          
          <div className="product-actions">
            <button className="btn btn-primary add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>
            <button className="btn btn-secondary buy-now-btn">
              Buy Now
            </button>
          </div>
          
          <div className="product-features">
            <h3>Features</h3>
            <ul>
              <li>✔ Instant digital delivery</li>
              <li>✔ 24/7 customer support</li>
              <li>✔ 30-day money back guarantee</li>
              <li>✔ Secure payment processing</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Related Products Section */}
      <div className="related-products">
        <h2>You might also like</h2>
        <div className="related-products-grid">
          {products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 3)
            .map(relatedProduct => (
              <div 
                key={relatedProduct.id} 
                className="related-product-card"
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <img src={relatedProduct.image} alt={relatedProduct.name} />
                <div className="related-product-info">
                  <h4>{relatedProduct.name}</h4>
                  <p>${relatedProduct.price}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProductDetail