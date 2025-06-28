import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaExternalLinkAlt, FaLinkedin, FaGithub, FaDownload, FaCode, FaMobileAlt, FaRobot } from 'react-icons/fa';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Portfolio() {
  // Project data
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A responsive online store with cart, payments, and authentication using React, Node.js, and MongoDB.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600',
      category: 'Web',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      title: 'AI Chatbot',
      description: 'A Python-based chatbot with NLP and TensorFlow, integrated with Node.js for real-time responses.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
      category: 'AI/ML',
      tech: ['Python', 'TensorFlow', 'Node.js'],
      link: '#',
    },
    {
      title: 'Personal Portfolio',
      description: 'A dynamic portfolio website built with React, Tailwind CSS, and Vite to showcase my skills.',
      image: 'https://images.unsplash.com/photo-1467232004584-959fb46c91c8?w=600',
      category: 'Web',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      link: '#',
    },
    {
      title: 'Android Fitness App',
      description: 'A Java-based mobile app for tracking workouts and nutrition, using Firebase for data storage.',
      image: 'https://images.unsplash.com/photo-1512941937669-0c7b58a873b3?w=600',
      category: 'Mobile',
      tech: ['Java', 'Android', 'Firebase'],
      link: '#',
    },
    {
      title: 'Task Management App',
      description: 'A full-stack Todo app with React, Express, and MongoDB, supporting CRUD and authentication.',
      image: 'https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=600',
      category: 'Web',
      tech: ['React', 'Express', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A dashboard for managing social media posts, built with React, Node.js, and Chart.js.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600',
      category: 'Web',
      tech: ['React', 'Node.js', 'Chart.js'],
      link: '#',
    },
    {
      title: 'Real-Time Chat App',
      description: 'A chat app using Socket.io, React, and Node.js, with MongoDB for message storage.',
      image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600',
      category: 'Web',
      tech: ['React', 'Socket.io', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Inventory System',
      description: 'A Java Spring Boot app with MySQL and Angular for managing inventory via REST APIs.',
      image: 'https://images.unsplash.com/photo-1580983561371-7f7b218e9f8c?w=600',
      category: 'Web',
      tech: ['Spring Boot', 'Angular', 'MySQL'],
      link: '#',
    },
    {
      title: 'Weather Forecast App',
      description: 'A React app fetching real-time weather data, styled with Tailwind CSS and Framer Motion.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600',
      category: 'Web',
      tech: ['React', 'Tailwind CSS', 'APIs'],
      link: '#',
    },
    {
      title: 'Blog Platform',
      description: 'A full-stack blog with Node.js, Express, MongoDB, and React for user posts and comments.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600',
      category: 'Web',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Expense Tracker',
      description: 'A React Native app for expense tracking, with SQLite and charts for visualization.',
      image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=600',
      category: 'Mobile',
      tech: ['React Native', 'SQLite'],
      link: '#',
    },
    {
      title: 'ML House Price Predictor',
      description: 'A Python ML model for house price prediction, deployed with Flask and AWS.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600',
      category: 'AI/ML',
      tech: ['Python', 'Flask', 'AWS'],
      link: '#',
    },
  ];

  // Skills snapshot
  const skills = [
    { name: 'React', icon: <FaCode /> },
    { name: 'Node.js', icon: <FaCode /> },
    { name: 'Java', icon: <FaCode /> },
    { name: 'Python', icon: <FaCode /> },
    { name: 'Android', icon: <FaMobileAlt /> },
    { name: 'AI/ML', icon: <FaRobot /> },
  ];

  // State for category filter
  const [category, setCategory] = useState('All');

  // Filter projects
  const filteredProjects = category === 'All' ? projects : projects.filter((project) => project.category === category);

  return (
    <div className="w-full overflow-visible bg-gray-50">
      {/* Header Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 md:py-32 w-full"
      >
        <div className="w-full px-4 flex flex-col items-center text-center">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
          >
            My <span className="text-yellow-300">Portfolio</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-6 px-4"
          >
            A curated collection of my best work, showcasing expertise in web, mobile, and AI/ML projects.
          </motion.p>
        </div>
      </motion.section>

      {/* Filter Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-8 w-full"
      >
        <div className="w-full px-4 max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="flex justify-center space-x-4 mb-8">
            {['All', 'Web', 'Mobile', 'AI/ML'].map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full font-semibold ${
                  category === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 w-full"
      >
        <div className="w-full px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/600x400')}
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                  <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold flex items-center space-x-2 w-max hover:bg-blue-700"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Project</span>
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Snapshot */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 bg-gray-100 w-full"
      >
        <div className="w-full px-4 max-w-7xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800"
          >
            Core Skills
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-3xl text-blue-600 mb-2">{skill.icon}</span>
                <span className="text-base sm:text-lg font-semibold text-gray-700">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call-to-Action & Social Links */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 w-full"
      >
        <div className="w-full px-4 max-w-7xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800"
          >
            Let’s Work Together
          </motion.h2>
          <motion.div variants={itemVariants} className="flex justify-center space-x-4 mb-8">
            <motion.a
              href="/contact-us"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-blue-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contact Me</span>
              <FaExternalLinkAlt />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download Resume</span>
              <FaDownload />
            </motion.a>
          </motion.div>
          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            <motion.a
              href="https://www.linkedin.com/in/manish-butola-409984225/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-3xl"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black text-3xl"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaGithub />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Portfolio;