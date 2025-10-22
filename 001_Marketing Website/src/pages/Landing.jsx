import SignupForm from '../components/SignupForm'

const Landing = () => {
  return (
    <main>
      <section style={landingHeroStyle}>
        <div className="container">
          <div style={landingContentStyle}>
            <div style={landingTextStyle}>
              <h1 style={landingTitleStyle}>Ready to Transform Your Workflow?</h1>
              <p style={landingSubtitleStyle}>
                Join thousands of teams already using NexusAI to boost their productivity. 
                Start your 14-day free trial today.
              </p>
              <ul style={benefitsListStyle}>
                <li style={benefitItemStyle}>✓ No credit card required</li>
                <li style={benefitItemStyle}>✓ Full access to all features</li>
                <li style={benefitItemStyle}>✓ Setup in under 5 minutes</li>
              </ul>
            </div>
            <div style={formContainerStyle}>
              <SignupForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const landingHeroStyle = {
  padding: '100px 0',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center'
}

const landingContentStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  alignItems: 'center'
}

const landingTextStyle = {
  maxWidth: '500px'
}

const landingTitleStyle = {
  fontSize: '3rem',
  marginBottom: '1.5rem',
  lineHeight: '1.2'
}

const landingSubtitleStyle = {
  fontSize: '1.2rem',
  marginBottom: '2rem',
  opacity: 0.9
}

const benefitsListStyle = {
  listStyle: 'none',
  fontSize: '1.1rem'
}

const benefitItemStyle = {
  marginBottom: '0.5rem'
}

const formContainerStyle = {
  background: 'white',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
}

export default Landing