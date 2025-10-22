import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    console.log('Contact form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div style={formStyle}>
      <h3 style={formTitleStyle}>Send us a Message</h3>
      <form onSubmit={handleSubmit} style={formElementStyle}>
        <div style={inputRowStyle}>
          <div style={inputGroupStyle}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
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
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
        </div>
        
        <div style={inputGroupStyle}>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        
        <div style={inputGroupStyle}>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            style={textAreaStyle}
            required
          />
        </div>
        
        <button type="submit" style={submitButtonStyle}>
          Send Message
        </button>
      </form>
    </div>
  )
}

const formStyle = {
  width: '100%'
}

const formTitleStyle = {
  marginBottom: '2rem',
  color: '#333',
  textAlign: 'center'
}

const formElementStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}

const inputRowStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
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

const textAreaStyle = {
  padding: '12px',
  border: '1px solid #ddd',
  borderRadius: '6px',
  fontSize: '1rem',
  resize: 'vertical',
  fontFamily: 'inherit'
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

export default ContactForm