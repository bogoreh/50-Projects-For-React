import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header style={headerStyle}>
      <div className="container">
        <nav style={navStyle}>
          <div style={logoStyle}>
            <Link to="/" style={logoLinkStyle}>NexusAI</Link>
          </div>
          <ul style={navListStyle}>
            <li><Link to="/" style={linkStyle}>Home</Link></li>
            <li><Link to="/features" style={linkStyle}>Features</Link></li>
            <li><Link to="/landing" style={linkStyle}>Get Started</Link></li>
            <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

const headerStyle = {
  background: 'white',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 100
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 0'
}

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold'
}

const logoLinkStyle = {
  textDecoration: 'none',
  color: '#0066ff',
  fontWeight: 'bold'
}

const navListStyle = {
  display: 'flex',
  listStyle: 'none',
  gap: '2rem'
}

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: '500',
  transition: 'color 0.3s ease'
}

export default Header