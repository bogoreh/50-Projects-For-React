import { useState } from 'react'

function ProductForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    url: '',
    category: 'Technology'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.description.trim()) {
      alert('Please fill in all required fields')
      return
    }
    onSubmit(formData)
    setFormData({ name: '', description: '', url: '', category: 'Technology' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="form-overlay">
      <form className="product-form" onSubmit={handleSubmit}>
        <h2>Add New Product</h2>
        
        <div className="form-group">
          <label htmlFor="name">Product Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the product"
            rows="4"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="url">Website URL</label>
          <input
            type="url"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="https://example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Technology">Technology</option>
            <option value="Design">Design</option>
            <option value="Business">Business</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="button" onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="submit-btn">
            Add Product
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm