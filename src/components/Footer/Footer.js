import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">WA: 0852 8181 2202</Link>
          </div>
        </div>
      </div>
      
        <div className="website-rights">Risetku © 2020</div>
      
    </div>
  );
}

export default Footer;
