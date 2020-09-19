import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/konsultasi"><h2>Konsultasi</h2></Link>
          </div>
          <div className="footer-link-items">
            <Link to="/faq"><h2>FAQ</h2></Link>
          </div>
        </div>
      </div>
      
        <div className="website-rights">Risetku © 2020</div>
      
    </div>
  );
}

export default Footer;
