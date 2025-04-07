// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../style.css'; // Make sure your CSS is linked

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showMenu = () => setIsMenuOpen(true);
  const hideMenu = () => setIsMenuOpen(false);

  return (
    <nav>
      <Link id="logoo" to="/">
        <img src="/Images/logo.png" alt="Logo" />
      </Link>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
        <i className="fa fa-times" onClick={hideMenu}></i>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><a href="#team">TEAM</a></li>
          <li><Link to="/prizes">PRIZES</Link></li>
          <li><Link to="/events">EVENTS</Link></li>
          <li><a href="#achievements">ACHIEVEMENTS</a></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>

      <i className="fa fa-bars" onClick={showMenu}></i>
    </nav>
  );
}

export default Navbar;
