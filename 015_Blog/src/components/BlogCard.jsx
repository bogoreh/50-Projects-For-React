import React from 'react'

const BlogCard = ({ post }) => {
  return (
    <article className="blog-card">
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-meta">
          <span className="blog-date">{post.date}</span>
          <span className="blog-read-time">{post.readTime}</span>
        </div>
        <div className="blog-tags">
          {post.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default BlogCard