import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404 - Page Not Found" />
      <div className="text-center py-16">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <a 
          href="/" 
          className="btn btn-primary"
        >
          Go Home
        </a>
      </div>
    </Layout>
  )
}

export default NotFoundPage