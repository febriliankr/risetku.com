import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  return (

    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <img src='favicon.svg' alt="Logo" className="navbar-icon"/>
          <div className="logo-title">RISETKU</div>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/uji-hipotesis" className="nav-links">
              Uji Hipotesis
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/hitung-besar-sampel" className="nav-links">
            Hitung Besar Sampel
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/Konsultasi" className="nav-links">
              FAQ
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/Konsultasi" className="nav-links">
              Konsultasi
            </Link>
          </li>



        </ul>
      </div>
    </div>

  );
}

export default Navbar;