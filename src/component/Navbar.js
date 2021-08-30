import React, { useEffect, useState } from "react";
import ImgLogo from "./images/Logo.png";
import { FaTimes, FaHamburger, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link onClick={closeMobileMenu} className="logo-img">
              <img src={ImgLogo} />
            </Link>
            <div onClick={handleClick} className="menu-icon">
              {click ? (
                <FaTimes className="icon" />
              ) : (
                <FaHamburger className="icon" />
              )}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to='/' onClick={closeMobileMenu} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/products' onClick={closeMobileMenu} className="nav-link">Products</Link>
              </li>
              <li className="nav-item">
                <Link to='/booking' onClick={closeMobileMenu} className="nav-link">Booking</Link>
              </li>
              <li className="nav-item">
                <Link to='/services' onClick={closeMobileMenu} className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to='/foods' onClick={closeMobileMenu} className="nav-link">Foods</Link>
              </li>
              <li className="nav-item">
                <Link to='/contacts' onClick={closeMobileMenu} className="nav-link">Contacts</Link>
              </li>
              <li className="nav-item">
                {button ? (
                  <Link to='/downloadApp' onClick={closeMobileMenu} className="nav-link">
                    <FaUser className="user-icon" />
                    User
                  </Link>
                ) : (
                  <Link to='/downloadApp' onClick={closeMobileMenu} className="nav-link">
                    <FaUser className="user-icon" />
                    User
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
