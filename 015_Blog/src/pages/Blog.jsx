import React from 'react'
import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/sampleData'

const Blog = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Blog Posts</h1>
        <p>Thoughts, experiences, and lessons from my career journey</p>
      </div>
      <div className="blog-grid">
        {blogPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Blog