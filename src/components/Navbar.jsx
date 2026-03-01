import { Link } from 'react-router-dom';
import './Navbar.css';
import logoNetflix from '../assets/logo_netflix.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logoNetflix} alt="Netflix Logo" className="navbar-logo-image" />
          <span>Aplicación de películas</span>
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
