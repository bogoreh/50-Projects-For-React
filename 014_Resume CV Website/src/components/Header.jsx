import '../styles/App.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h2>John Doe</h2>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;