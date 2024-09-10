import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '/src/images/bg.jpg';
// import cartIcon from '/src/images/bg2.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isHomePage]);

  const navbarStyle = {
    width: '100%',
    maxWidth: '100%',
    padding: isHomePage 
      ? (scrolled ? '0.75rem 2rem' : '2rem 3rem')
      : '0.75rem 2rem',
    position: isHomePage ? 'fixed' : 'static',
    top: '0',
    left: '0',
    zIndex: '1000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'background-color 0.1s ease',
    backgroundColor: isHomePage 
      ? (scrolled ? 'white' : 'transparent')
      : 'white',
    boxShadow: isHomePage 
      ? (scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none')
      : '0 2px 4px rgba(0, 0, 0, 0.1)',
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
            <Link to="/" style={navLinkStyle}>
              HOME
            </Link>
          </li>
          <li style={navLinkItemStyle}>
            <Link to="/about" style={navLinkStyle}>
              ABOUT US
            </Link>
          </li>
          <li style={navLinkItemStyle}>
            <Link to="/shop" style={navLinkStyle}>
              SHOP
            </Link>
          </li>
          <li style={navLinkItemStyle}>
            <Link to="/contact" style={navLinkStyle}>
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;