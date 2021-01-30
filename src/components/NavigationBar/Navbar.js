import React from "react";
import { Link } from "react-router-dom";
import menuIcon from "../../images/stopwatch.png";
import "../../css/Navbar.css";
import "../../App.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            INV
            <img src={menuIcon} alt="Girl in a jacket" width="30" height="30" />
          </Link>
        </div>
        <ul>
          <li className="nav-item">
            <Link to="/brand" className="nav-links">
              Brand
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
