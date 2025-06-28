import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

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
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white p-4 sticky top-0 z-50 w-full"
    >
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="./src/assets/images/img.jpg"
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
          <ul className="flex space-x-4">
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
      </div>
    </motion.nav>
  );
}

export default Navbar;