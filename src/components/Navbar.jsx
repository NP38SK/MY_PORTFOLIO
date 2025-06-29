import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and close icons
import profileImage from '../assets/images/img.jpg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Resume', path: '/resume' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact Us', path: '/contact-us' },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white p-4 sticky top-0 z-50 w-full"
    >
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <img
              src={profileImage}
              alt="Manish Butola"
              className="w-10 h-10 rounded-full object-cover"
            />
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut',
              }}
              className="text-2xl font-bold"
            >
              Manish Butola
            </motion.span>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `hover:text-blue-400 ${isActive ? 'text-blue-400' : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <ul className="flex flex-col space-y-2 mt-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block py-2 px-4 hover:text-blue-400 ${isActive ? 'text-blue-400' : ''}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;