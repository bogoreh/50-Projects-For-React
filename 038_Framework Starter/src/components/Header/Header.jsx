import Button from '../Button/Button'
import styles from './Header.module.css'

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>My App</h1>
      </div>
      <nav className={styles.nav}>
        <Button 
          active={currentPage === 'home'}
          onClick={() => setCurrentPage('home')}
        >
          Home
        </Button>
        <Button 
          active={currentPage === 'about'}
          onClick={() => setCurrentPage('about')}
        >
          About
        </Button>
      </nav>
    </header>
  )
}

export default Header