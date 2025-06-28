import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EnquiryForm from '../components/EnquiryForm';
import NotificationSidebar from '../components/NotificationSidebar';
import { FaArrowRight } from 'react-icons/fa';
import profileImage from '../assets/images/img.jpg';
import eCommerceImage from '../assets/images/e-commerce.avif';
import portfolioImage from '../assets/images/portfoliyo.png';
import todoImage from '../assets/images/todo.png';

// Carousel settings
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// Sample projects for carousel
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A responsive e-commerce site built with React and Node.js.',
    image: eCommerceImage,
  },
  {
    title: 'Portfolio Website',
    description: 'A dynamic portfolio showcasing my skills and projects.',
    image: portfolioImage,
  },
  {
    title: 'Todo App',
    description: 'A feature-rich Todo app with CRUD operations.',
    image: todoImage,
  },
];

function Home() {
  return (
    <div className="w-full overflow-visible">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 md:py-32 w-full"
      >
        <div className="w-full px-4 flex flex-col items-center text-center">
          <motion.img
            src={profileImage}
            alt="Manish Butola"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 object-cover"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            onError={(e) => (e.target.src = '/placeholder.jpg')}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
          >
            Welcome to <span className="text-yellow-300">Manish Butola</span>'s Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-6 px-4"
          >
            Hi, I'm <span className="font-bold text-yellow-300">Manish Butola</span>, a passionate Full Stack Developer, Software Trainer & Developer crafting responsive and dynamic web applications & Software with java, React, Node.js, and more.
          </motion.p>
          <motion.a
            href="/contact-us"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center space-x-2"
          >
            <span>Get in Touch</span>
            <FaArrowRight />
          </motion.a>
        </div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gray-100 w-full"
      >
        <div className="w-full px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
            <motion.img
              src={profileImage}
              alt="Manish Butola"
              className="w-48 h-48 rounded-full object-cover"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              onError={(e) => (e.target.src = '/placeholder.jpg')}
            />
            <div className="text-lg sm:text-xl">
              <p className="mb-4">
                I'm <span className="font-bold text-blue-600">Manish Butola</span>, a Full Stack Developer with a INSTITUTE OF TECHNOLOGY, GOPESHWAR. I specialize in building responsive web applications using HTML, CSS, JavaScript, React, Node.js, and other modern technologies.
              </p>
              <p className="mb-4">
                With hands-on experience in creating dynamic and user-friendly interfaces, I thrive on turning ideas into reality through clean code and innovative solutions. My projects include e-commerce platforms, portfolio websites, and interactive applications.
              </p>
              <p className="mb-4">
                As an IT professional with extensive experience in Java, Android, and Full Stack development, I mentor and guide aspiring IT professionals. Throughout my career, I’ve contributed to projects ranging from mobile applications to enterprise-level solutions, always focusing on creating scalable, efficient, and user-friendly systems. Passionate about staying ahead of industry trends and continuously improving my skills, I’m driven by a commitment to both personal and professional growth. I thrive in collaborative environments and enjoy sharing my knowledge with others to help them achieve their goals.
              </p>
              <p>
                Let's connect to build something amazing together! Check out my{' '}
                <a
                  href="https://www.linkedin.com/in/manish-butola-409984225/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn
                </a>{' '}
                for more details.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Carousel Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 w-full"
      >
        <div className="w-full px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            My Projects
          </h2>
          <Slider {...carouselSettings}>
            {projects.map((project, index) => (
              <div key={index} className="px-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-64 md:h-80 object-cover object-center"
                    onError={(e) => (e.target.src = '/placeholder.jpg')}
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.section>

      {/* Enquiry Form Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gray-100 w-full"
      >
        <div className="w-full px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Get in Touch
          </h2>
          <div className="max-w-lg mx-auto">
            <EnquiryForm />
          </div>
        </div>
      </motion.section>

      {/* Notification Sidebar */}
      <NotificationSidebar />
    </div>
  );
}

export default Home;