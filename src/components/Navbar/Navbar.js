import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { useHistory } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {

  //const history = useHistory();
  const [click, setClick] = useState(false);
 // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener("resize", showButton);

  return (

    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src='favicon.svg' alt="Logo" className="navbar-icon"/>
          <div className="logo-title">RISETKU</div>
          
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/uji-hipotesis" className="nav-links" onClick={closeMobileMenu}>
              Uji Hipotesis
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/hitung-besar-sampel" className="nav-links" onClick={closeMobileMenu}>
            Hitung Besar Sampel
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Konsultasi" className="nav-links" onClick={closeMobileMenu}>
              Konsultasi
            </Link>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default Navbar;