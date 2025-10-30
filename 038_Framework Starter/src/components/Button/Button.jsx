import styles from './Button.module.css'

const Button = ({ children, onClick, active = false }) => {
  return (
    <button 
      className={`${styles.button} ${active ? styles.active : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button