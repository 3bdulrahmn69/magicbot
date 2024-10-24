import { useState, useEffect } from 'react';
import DownloadBtn from './DownloadBtn';
import Logo from './Logo';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Effect to handle header visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down, hide header
        setIsVisible(false);
      } else {
        // Scrolling up, show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Effect to handle body scroll behavior when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'unset'; // Allow scrolling
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`flex justify-between px-6 md:px-16 py-4 items-center drop-shadow-md glass h-[80px] sticky top-0 z-30 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Logo */}
      <Logo />

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="text-2xl focus:outline-none text-black"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isMenuOpen && (
          <button
            className="absolute top-6 right-6 z-50 text-2xl focus:outline-none text-black"
            onClick={closeMenu}
          >
            <FaTimes />
          </button>
        )}
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row md:items-center absolute md:relative top-0 left-0 w-full md:w-auto h-screen md:h-auto bg-blue-500 md:bg-transparent transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 duration-300 ease-in-out z-20 md:z-0`}
      >
        <ul className="flex flex-col md:flex-row gap-8 items-center mt-20 md:mt-0">
          <li className="font-semibold hover:underline hover:underline-offset-4">
            <a
              href="#home"
              onClick={closeMenu}
              className="text-white md:text-black block md:inline"
            >
              Home
            </a>
          </li>
          <li className="font-semibold hover:underline hover:underline-offset-4">
            <a
              href="#about"
              onClick={closeMenu}
              className="text-white md:text-black block md:inline"
            >
              About
            </a>
          </li>
          <li className="font-semibold hover:underline hover:underline-offset-4">
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-white md:text-black block md:inline"
            >
              Contact
            </a>
          </li>
          <li className="hover:scale-105 duration-200 cursor-pointer">
            <DownloadBtn />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
