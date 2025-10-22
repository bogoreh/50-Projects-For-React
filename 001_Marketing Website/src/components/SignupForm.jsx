import { useState } from 'react'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for signing up! We will be in touch soon.')
  }

  return (
    <div style={formStyle}>
      <h3 style={formTitleStyle}>Start Your Free Trial</h3>
      <form onSubmit={handleSubmit} style={formElementStyle}>
        <div style={inputGroupStyle}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        <div style={inputGroupStyle}>
          <input
            type="email"
            name="email"
            placeholder="Work Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        <div style={inputGroupStyle}>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        <button type="submit" style={submitButtonStyle}>
          Create Account
        </button>
        <p style={termsStyle}>
          By signing up, you agree to our <a href="#" style={linkStyle}>Terms of Service</a> and <a href="#" style={linkStyle}>Privacy Policy</a>.
        </p>
      </form>
    </div>
  )
}

const formStyle = {
  color: '#333'
}

const formTitleStyle = {
  marginBottom: '2rem',
  textAlign: 'center',
  color: '#333'
}

const formElementStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const inputStyle = {
  padding: '12px',
  border: '1px solid #ddd',
  borderRadius: '6px',
  fontSize: '1rem'
}

const submitButtonStyle = {
  padding: '12px',
  background: '#0066ff',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background 0.3s ease'
}

const termsStyle = {
  fontSize: '0.9rem',
  color: '#666',
  textAlign: 'center',
  marginTop: '1rem'
}

const linkStyle = {
  color: '#0066ff',
  textDecoration: 'none'
}

export default SignupForm