// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "../style.css";
function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/events">EVENTS</Link></li>
        <li><Link to="/prize">PRIZES</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/join">JOIN</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
