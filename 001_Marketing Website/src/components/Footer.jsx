import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div style={footerContentStyle}>
          <div style={footerSectionStyle}>
            <h3 style={footerHeadingStyle}>NexusAI</h3>
            <p>Revolutionizing productivity with artificial intelligence.</p>
          </div>
          <div style={footerSectionStyle}>
            <h4 style={footerHeadingStyle}>Quick Links</h4>
            <ul style={footerListStyle}>
              <li><Link to="/" style={footerLinkStyle}>Home</Link></li>
              <li><Link to="/features" style={footerLinkStyle}>Features</Link></li>
              <li><Link to="/contact" style={footerLinkStyle}>Contact</Link></li>
            </ul>
          </div>
          <div style={footerSectionStyle}>
            <h4 style={footerHeadingStyle}>Connect</h4>
            <ul style={footerListStyle}>
              <li><a href="https://twitter.com" style={footerLinkStyle}>Twitter</a></li>
              <li><a href="https://linkedin.com" style={footerLinkStyle}>LinkedIn</a></li>
              <li><a href="https://github.com" style={footerLinkStyle}>GitHub</a></li>
            </ul>
          </div>
        </div>
        <div style={footerBottomStyle}>
          <p>&copy; 2025 NexusAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const footerStyle = {
  background: '#1a1a1a',
  color: 'white',
  padding: '3rem 0 1rem'
}

const footerContentStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
  marginBottom: '2rem'
}

const footerSectionStyle = {
  marginBottom: '1rem'
}

const footerHeadingStyle = {
  marginBottom: '1rem',
  color: 'white'
}

const footerListStyle = {
  listStyle: 'none'
}

const footerLinkStyle = {
  color: '#ccc',
  textDecoration: 'none',
  transition: 'color 0.3s ease'
}

const footerBottomStyle = {
  borderTop: '1px solid #333',
  paddingTop: '1rem',
  textAlign: 'center',
  color: '#ccc'
}

export default Footer