import React, { useState, useEffect } from 'react';
import logoImage from '/src/images/bg.jpg';
import cartIcon from '/src/images/bg2.jpg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
   
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    width: '100%',
    padding: '5px 30px',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'background-color 0.1s ease',
    backgroundColor: scrolled ? 'white' : 'transparent',
    boxShadow: scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
  };

  const logoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const logoImgStyle = {
    height: '40px',
  };

  const logoTextStyle = {
    marginTop: '5px',
    fontSize: '14px',
    color: 'black',
  };

  const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
  };

  const navLinkItemStyle = {
    marginLeft: '20px',
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
  };

  const cartStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '80px',
  };

  const cartIconStyle = {
    width: '24px',
    height: '24px',
    marginRight: '10px',
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>
        <img src={logoImage} alt="Logo" style={logoImgStyle} />
        <span style={logoTextStyle}>ORGANIC STORE</span>
      </div>
      <ul style={navLinksStyle}>
        <li style={navLinkItemStyle}>
        <Link to="/src/pages/HomePage" style={navLinkStyle}>
    HOME
  </Link>
        </li>
        <li style={navLinkItemStyle}>
        <Link to="/src/pages/AboutUs" style={navLinkStyle}>
    ABOUT US
  </Link>
        </li>
        <li style={navLinkItemStyle}>
          <a href="#" style={navLinkStyle}>
            SHOP
          </a>
        </li>
        <li style={navLinkItemStyle}>
          <a href="#" style={navLinkStyle}>
            BLOG
          </a>
        </li>
        <li style={navLinkItemStyle}>
          <a href="#" style={navLinkStyle}>
            CONTACT US
          </a>
        </li>
        <li style={navLinkItemStyle}>
          <a href="#" style={navLinkStyle}>
            PAGES
          </a>
        </li>
      </ul>
      <div style={cartStyle}>
        <img src={cartIcon} alt="Cart Icon" style={cartIconStyle} />
        <span>$2,170.00</span>
      </div>
    </nav>
  );
};

export default Navbar;
