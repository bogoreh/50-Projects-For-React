const Features = () => {
  const features = [
    {
      title: "AI-Powered Automation",
      description: "Let our AI handle repetitive tasks so you can focus on what matters most.",
      details: [
        "Smart task categorization",
        "Automated workflow suggestions",
        "Intelligent priority setting"
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly with built-in collaboration tools.",
      details: [
        "Real-time document editing",
        "Team chat and video calls",
        "Project management boards"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Advanced Analytics",
      description: "Get deep insights into your team's productivity and performance.",
      details: [
        "Customizable dashboards",
        "Productivity tracking",
        "Performance analytics"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ]

  return (
    <main>
      <section style={heroStyle}>
        <div className="container">
          <div className="text-center">
            <h1 style={heroTitleStyle}>Powerful Features for Modern Teams</h1>
            <p style={heroSubtitleStyle}>
              Discover how NexusAI can transform the way your team works together
            </p>
          </div>
        </div>
      </section>

      <section style={featuresSectionStyle}>
        <div className="container">
          {features.map((feature, index) => (
            <div key={index} style={featureItemStyle}>
              <div style={featureContentStyle}>
                <h2 style={featureTitleStyle}>{feature.title}</h2>
                <p style={featureDescStyle}>{feature.description}</p>
                <ul style={detailsListStyle}>
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} style={detailItemStyle}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div style={featureImageStyle}>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  style={imageStyle}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

const heroStyle = {
  padding: '100px 0',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  textAlign: 'center'
}

const heroTitleStyle = {
  fontSize: '3rem',
  marginBottom: '1rem'
}

const heroSubtitleStyle = {
  fontSize: '1.2rem',
  opacity: 0.9
}

const featuresSectionStyle = {
  padding: '80px 0'
}

const featureItemStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  alignItems: 'center',
  marginBottom: '6rem'
}

const featureContentStyle = {
  maxWidth: '500px'
}

const featureTitleStyle = {
  fontSize: '2.5rem',
  marginBottom: '1.5rem',
  color: '#333'
}

const featureDescStyle = {
  fontSize: '1.1rem',
  color: '#666',
  marginBottom: '2rem',
  lineHeight: '1.6'
}

const detailsListStyle = {
  listStyle: 'none'
}

const detailItemStyle = {
  padding: '0.5rem 0',
  borderBottom: '1px solid #eee',
  color: '#333'
}

const featureImageStyle = {
  textAlign: 'center'
}

const imageStyle = {
  maxWidth: '100%',
  borderRadius: '10px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
}

export default Features