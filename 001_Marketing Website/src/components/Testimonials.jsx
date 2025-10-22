const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at TechCorp",
      content: "NexusAI has transformed how our team collaborates. We've seen a 40% increase in productivity since implementation.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Marcus Johnson",
      role: "CTO at StartupXYZ",
      content: "The AI features are incredible. It's like having an extra team member that never sleeps.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Emily Davis",
      role: "Team Lead at DesignCo",
      content: "Easy to use, powerful features, and incredible support. NexusAI is everything we needed.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ]

  return (
    <section style={sectionStyle}>
      <div className="container">
        <div className="text-center" style={headerStyle}>
          <h2 style={titleStyle}>Loved by Teams Worldwide</h2>
          <p style={subtitleStyle}>See what our customers are saying about NexusAI</p>
        </div>
        <div style={testimonialsGridStyle}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={testimonialCardStyle}>
              <div style={quoteStyle}>"</div>
              <p style={contentStyle}>{testimonial.content}</p>
              <div style={authorStyle}>
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  style={avatarStyle}
                />
                <div>
                  <div style={nameStyle}>{testimonial.name}</div>
                  <div style={roleStyle}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const sectionStyle = {
  padding: '80px 0',
  background: 'white'
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

const testimonialsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem'
}

const testimonialCardStyle = {
  background: '#f8f9fa',
  padding: '2rem',
  borderRadius: '10px',
  position: 'relative'
}

const quoteStyle = {
  fontSize: '4rem',
  color: '#0066ff',
  opacity: 0.2,
  position: 'absolute',
  top: '-10px',
  left: '10px'
}

const contentStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
  marginBottom: '2rem',
  color: '#333'
}

const authorStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
}

const avatarStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  objectFit: 'cover'
}

const nameStyle = {
  fontWeight: 'bold',
  color: '#333'
}

const roleStyle = {
  color: '#666',
  fontSize: '0.9rem'
}

export default Testimonials