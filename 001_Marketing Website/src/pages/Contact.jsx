import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <main>
      <section style={contactSectionStyle}>
        <div className="container">
          <div style={contactContentStyle}>
            <div style={contactInfoStyle}>
              <h1 style={contactTitleStyle}>Get in Touch</h1>
              <p style={contactSubtitleStyle}>
                Have questions about NexusAI? We'd love to hear from you. 
                Send us a message and we'll respond as soon as possible.
              </p>
              
              <div style={contactMethodsStyle}>
                <div style={contactMethodStyle}>
                  <h3 style={methodTitleStyle}>📧 Email</h3>
                  <p>hello@nexusai.com</p>
                </div>
                <div style={contactMethodStyle}>
                  <h3 style={methodTitleStyle}>📞 Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div style={contactMethodStyle}>
                  <h3 style={methodTitleStyle}>🏢 Office</h3>
                  <p>123 Tech Street<br />San Francisco, CA 94107</p>
                </div>
              </div>

              <div style={socialLinksStyle}>
                <h3 style={methodTitleStyle}>Follow Us</h3>
                <div style={socialIconsStyle}>
                  <a href="https://twitter.com" style={socialLinkStyle}>Twitter</a>
                  <a href="https://linkedin.com" style={socialLinkStyle}>LinkedIn</a>
                  <a href="https://github.com" style={socialLinkStyle}>GitHub</a>
                </div>
              </div>
            </div>
            
            <div style={formWrapperStyle}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const contactSectionStyle = {
  padding: '80px 0'
}

const contactContentStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  alignItems: 'start'
}

const contactInfoStyle = {
  maxWidth: '500px'
}

const contactTitleStyle = {
  fontSize: '2.5rem',
  marginBottom: '1rem'
}

const contactSubtitleStyle = {
  fontSize: '1.1rem',
  color: '#666',
  marginBottom: '3rem',
  lineHeight: '1.6'
}

const contactMethodsStyle = {
  marginBottom: '3rem'
}

const contactMethodStyle = {
  marginBottom: '2rem'
}

const methodTitleStyle = {
  marginBottom: '0.5rem',
  color: '#333'
}

const socialLinksStyle = {
  marginBottom: '2rem'
}

const socialIconsStyle = {
  display: 'flex',
  gap: '1rem'
}

const socialLinkStyle = {
  color: '#0066ff',
  textDecoration: 'none',
  fontWeight: '500'
}

const formWrapperStyle = {
  background: 'white',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
}

export default Contact