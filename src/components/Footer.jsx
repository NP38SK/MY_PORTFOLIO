import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaLinkedin, FaBriefcase, FaArrowUp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const socialLinks = [
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/your_username',
  },
  {
    name: 'Facebook',
    icon: <FaFacebook />,
    url: 'https://www.facebook.com/your_username',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/your_username',
  },
  {
    name: 'Naukri',
    icon: <FaBriefcase />,
    url: 'https://www.naukri.com/your_profile',
  },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact Us', path: '/contact-us' },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 mt-auto relative overflow-hidden shadow-lg"
    >
      {/* Wave Separator */}
      <div className="absolute top-0 left-0 w-full h-6 bg-wave bg-repeat-x" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.1' d='M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E")`,
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Connect with Me</h3>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.3, rotate: 10, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.9 }}
                  className="text-3xl hover:text-blue-400 transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `hover:text-blue-400 transition-colors duration-300 ${isActive ? 'text-blue-400' : ''}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright and Developer Credit */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm prose prose-invert">
            © {new Date().getFullYear()} Manish Butola. All rights reserved.
          </p>
          <p className="text-sm mt-1 prose prose-invert">
            Developed with ❤️ by{' '}
            <motion.span
              whileHover={{ color: '#60a5fa', scale: 1.05 }}
              className="font-semibold"
            >
              Manish Butola
            </motion.span>
          </p>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
          className="absolute bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </motion.button>
      </div>
    </motion.footer>
  );
}

export default Footer;