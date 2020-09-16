import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
          <Link to='/'><h2>About Us</h2></Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>WA: 0852 8181 2202</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src='favicon.svg' alt="Logo" className="navbar-icon"/>
            </Link>
          </div>
          <small className='website-rights'>Risetku © 2020</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;