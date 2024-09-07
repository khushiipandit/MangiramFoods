import { useState, useEffect } from 'react';
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
    alignItems: 'flex-start',
    marginLeft: '0px', // Align logo and text with same left margin
  };

  const logoImgStyle = {
    height: '50px',
    cursor: 'pointer',
  };

  const logoTextStyle = {
    marginTop: '5px',
    fontSize: '11px',
    color: 'black',
    textAlign: 'left',
    marginLeft: '0px', // Align text directly below logo
    display: scrolled ? 'none' : 'block', // Hide the text when scrolled
  };

  const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    flex: '1',
    marginLeft: '450px',
  };

  const navLinkItemStyle = {
    marginLeft: '20px',
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  const cartStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px', // Adjusted margin to make room for the menu icon
    marginLeft: '12px',
    fontSize: '14px',
    cursor: 'pointer',
  };

  const cartIconStyle = {
    width: '28px',
    height: '28px',
    marginRight: '5px',
  };

  // Style for the menu icon
  const menuIconStyle = {
    width: '30px', // You can adjust the size as per your design
    height: '30px',
    cursor: 'pointer',
    marginRight:'70px',
    marginLeft:'80px'
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
      {/* Menu icon on the far right */}
      <img 
        src="/src/images/menu.png" // Replace with your menu icon image path
        alt="Menu Icon"
        style={menuIconStyle}
      />
    </nav>
  );
};

export default Navbar;
