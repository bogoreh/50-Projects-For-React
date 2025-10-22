import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { products } from '../../data/products'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to GameHub</h1>
          <p>Discover the latest games and premium gaming gear</p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home