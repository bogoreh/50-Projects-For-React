import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section style={heroStyle}>
      <div className="container">
        <div style={heroContentStyle}>
          <div style={heroTextStyle}>
            <h1 style={heroTitleStyle}>
              Transform Your Workflow with AI-Powered Productivity
            </h1>
            <p style={heroSubtitleStyle}>
              NexusAI helps teams collaborate smarter, automate tasks, and achieve more in less time. 
              Experience the future of work today.
            </p>
            <div style={heroButtonsStyle}>
              <Link to="/landing" className="btn">Start Free Trial</Link>
              <Link to="/features" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
          <div style={heroImageStyle}>
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="AI Technology" 
              style={imageStyle}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const heroStyle = {
  padding: '100px 0',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white'
}

const heroContentStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  alignItems: 'center'
}

const heroTextStyle = {
  maxWidth: '500px'
}

const heroTitleStyle = {
  fontSize: '3rem',
  marginBottom: '1.5rem',
  lineHeight: '1.2'
}

const heroSubtitleStyle = {
  fontSize: '1.2rem',
  marginBottom: '2rem',
  opacity: 0.9
}

const heroButtonsStyle = {
  display: 'flex',
  gap: '1rem'
}

const heroImageStyle = {
  textAlign: 'center'
}

const imageStyle = {
  maxWidth: '100%',
  borderRadius: '10px',
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
}

export default Hero