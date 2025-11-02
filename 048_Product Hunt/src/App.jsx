import { useState } from 'react'
import Header from './components/Header'
import ProductForm from './components/ProductForm'
import ProductCard from './components/ProductCard'
import './styles/App.css'

function App() {
  const [products, setProducts] = useState([])
  const [showForm, setShowForm] = useState(false)

  const addProduct = (product) => {
    const newProduct = {
      id: Date.now(),
      ...product,
      votes: 0,
      createdAt: new Date().toISOString()
    }
    setProducts([newProduct, ...products])
    setShowForm(false)
  }

  const upvoteProduct = (productId) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { ...product, votes: product.votes + 1 }
        : product
    ))
  }

  return (
    <div className="App">
      <Header onAddProduct={() => setShowForm(true)} />
      
      <div className="container">
        {showForm && (
          <ProductForm 
            onSubmit={addProduct}
            onCancel={() => setShowForm(false)}
          />
        )}
        
        <div className="products-grid">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onUpvote={upvoteProduct}
            />
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="empty-state">
            <h2>No products yet</h2>
            <p>Be the first to share an amazing product!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App