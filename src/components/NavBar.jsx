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
    maxWidth: '100%',
    padding: scrolled ? '0.75rem 2rem' : '2rem 3rem',
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
    boxSizing: 'border-box',
  };

  const logoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '0px',
  };

  const logoImgStyle = {
    height: '2.5rem',
    cursor: 'pointer',
  };

  const logoTextStyle = {
    marginTop: '5px',
    fontSize: '11px',
    color: 'black',
    textAlign: 'left',
    marginLeft: '0px',
    display: scrolled ? 'none' : 'block',
  };

  const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    flex: '1',
    padding: 0,
    margin: 0,
  };

  const navLinkItemStyle = {
    marginLeft: '1.25rem',
    transition: 'color 0.1s ease',
    fontWeight:'500',
    letterSpacing:'-0.25px',
    color:'#3c3c3c',
    fontSize:'1rem'
  };

  const navLinkStyle = {
    textDecoration: 'none',
  };

  const cartStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    cursor: 'pointer',
  };

  const cartIconStyle = {
    width: '28px',
    height: '28px',
    marginRight: '5px',
  };

  const menuIconStyle = {
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    marginLeft: '0px'
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>
        <img src={logoImage} alt="Logo" style={logoImgStyle} />
        <span style={logoTextStyle}>ORGANIC STORE</span>
      </div>
      <div className='flex items-center gap-8'>
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
        <img 
          src="/src/images/menu.png"
          alt="Menu Icon"
          style={menuIconStyle}
        />
      </div>
    </nav>
  );
};

export default Navbar;