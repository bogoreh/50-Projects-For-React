import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO 
        title="Home - Gatsby Tailwind Theme" 
        description="A simple Gatsby theme with Tailwind CSS" 
      />
      <Header />
      
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Gatsby + Tailwind
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple starter theme built with Gatsby and Tailwind CSS. 
            Fast, modern, and ready to customize.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="card text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 text-xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast</h3>
            <p className="text-gray-600">
              Built with Gatsby for lightning-fast performance and excellent SEO.
            </p>
          </div>

          <div className="card text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 text-xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Stylish</h3>
            <p className="text-gray-600">
              Styled with Tailwind CSS for beautiful, responsive designs.
            </p>
          </div>

          <div className="card text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 text-xl">🔧</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Customizable</h3>
            <p className="text-gray-600">
              Easy to customize and extend with your own components and styles.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-primary mr-4">
            Get Started
          </button>
          <button className="btn btn-secondary">
            Learn More
          </button>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage