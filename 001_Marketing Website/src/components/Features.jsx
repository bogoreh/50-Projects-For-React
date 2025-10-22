const Features = () => {
  const features = [
    {
      title: "Smart Automation",
      description: "Automate repetitive tasks with AI-driven workflows",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Team Collaboration",
      description: "Seamless collaboration tools for distributed teams",
      icon: "👥",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Data Insights",
      description: "Get actionable insights from your workflow data",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ]

  return (
    <section style={sectionStyle}>
      <div className="container">
        <div className="text-center" style={headerStyle}>
          <h2 style={titleStyle}>Powerful Features</h2>
          <p style={subtitleStyle}>Everything you need to supercharge your productivity</p>
        </div>
        <div style={featuresGridStyle}>
          {features.map((feature, index) => (
            <div key={index} style={featureCardStyle}>
              <div style={featureIconStyle}>{feature.icon}</div>
              <img 
                src={feature.image} 
                alt={feature.title}
                style={featureImageStyle}
              />
              <h3 style={featureTitleStyle}>{feature.title}</h3>
              <p style={featureDescStyle}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const sectionStyle = {
  padding: '80px 0',
  background: '#f8f9fa'
}

const headerStyle = {
  marginBottom: '4rem'
}

const titleStyle = {
  fontSize: '2.5rem',
  marginBottom: '1rem'
}

const subtitleStyle = {
  fontSize: '1.2rem',
  color: '#666',
  maxWidth: '600px',
  margin: '0 auto'
}

const featuresGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem'
}

const featureCardStyle = {
  background: 'white',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  textAlign: 'center',
  transition: 'transform 0.3s ease'
}

const featureIconStyle = {
  fontSize: '3rem',
  marginBottom: '1rem'
}

const featureImageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '1rem'
}

const featureTitleStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem'
}

const featureDescStyle = {
  color: '#666',
  lineHeight: '1.6'
}

export default Features