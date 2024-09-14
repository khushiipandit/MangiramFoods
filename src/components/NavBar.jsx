import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '/images/bg.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      if (isHomePage) {
        window.removeEventListener('scroll', handleScroll);
      }
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isHomePage]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav ref={navRef} className={`
      w-full max-w-full fixed top-0 left-0 z-50
      ${isHomePage ? (scrolled ? 'bg-white shadow-md' : 'bg-transparent') : 'bg-white shadow-md'}
      transition-all duration-300 ease-in-out
    `}>
      <div className="container mx-auto px-6 sm:px-8 md:px-10 py-3 md:py-4 flex justify-between items-center">
        <Link to="/" className="flex items-start text-left justify-start  flex-col">
          <img src={logoImage} alt="Logo" className="h-8 md:h-10" />
          <span className={`
             text-xs md:text-sm font-medium  text-black mt-2 text-left
            ${scrolled || !isHomePage ? 'hidden' : 'block'}
          `}>
            ORGANIC STORE
          </span>
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        <ul className={`
          md:flex md:items-center md:space-x-6
          ${menuOpen ? 'absolute top-full left-0 right-0 bg-white shadow-md p-4' : 'hidden'}
          md:static md:bg-transparent md:shadow-none md:p-0
        `}>
          {['HOME', 'ABOUT', 'SHOP', 'CONTACT'].map((item) => (
            <li key={item} className="py-2 md:py-0">
              <Link
                to={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className={`
                  text-base font-medium tracking-wide
                  ${location.pathname === (item === 'HOME' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`) ? 'text-green-500' : 'text-gray-700'}
                  hover:text-green-500 transition-colors duration-300
                `}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;