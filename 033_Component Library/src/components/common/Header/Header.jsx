import './Header.css';
import Button from '../Button/Button';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <h1>MediaStore</h1>
            <span>Music • Games • Movies</span>
          </div>
          
          <nav className="header__nav">
            <a href="#home">Home</a>
            <a href="#music">Music</a>
            <a href="#games">Games</a>
            <a href="#movies">Movies</a>
          </nav>

          <div className="header__actions">
            <Button variant="outline" size="small">
              🛒 Cart (0)
            </Button>
            <Button variant="primary" size="small">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;