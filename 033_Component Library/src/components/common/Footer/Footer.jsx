import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3>MediaStore</h3>
            <p>Your one-stop shop for all entertainment needs.</p>
          </div>
          <div className="footer__section">
            <h4>Categories</h4>
            <a href="#music">Music</a>
            <a href="#games">Video Games</a>
            <a href="#movies">Movies</a>
          </div>
          <div className="footer__section">
            <h4>Support</h4>
            <a href="#help">Help Center</a>
            <a href="#contact">Contact Us</a>
            <a href="#returns">Returns</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2025 MediaStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;