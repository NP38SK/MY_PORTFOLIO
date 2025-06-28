import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Projects() {
  // Project data
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A responsive online store with React, Node.js, and MongoDB, featuring cart, payments, and user authentication.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600',
      link: '#',
    },
    {
      title: 'Personal Portfolio',
      description: 'A dynamic portfolio website built with React, Tailwind CSS, and Vite, showcasing my skills and projects.',
      image: 'https://images.unsplash.com/photo-1467232004584-959fb46c91c8?w=600',
      link: '#',
    },
    {
      title: 'AI-Powered Chatbot',
      description: 'A Python-based chatbot using NLP and TensorFlow, integrated with a Node.js backend for real-time responses.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
      link: '#',
    },
    {
      title: 'Task Management App',
      description: 'A full-stack Todo app with React, Express, and MongoDB, supporting CRUD operations and user authentication.',
      image: 'https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=600',
      link: '#',
    },
    {
      title: 'Android Fitness App',
      description: 'A Java-based Android app for tracking workouts and nutrition, with Firebase for data storage.',
      image: 'https://images.unsplash.com/photo-1512941937669-0c7b58a873b3?w=600',
      link: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A React and Node.js dashboard for managing social media posts, with analytics powered by Chart.js.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600',
      link: '#',
    },
    {
      title: 'Real-Time Chat App',
      description: 'A chat application using Socket.io, React, and Node.js, with MongoDB for message storage.',
      image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600',
      link: '#',
    },
    {
      title: 'Inventory Management System',
      description: 'A Java Spring Boot app with MySQL for managing inventory, featuring REST APIs and Angular frontend.',
      image: 'https://images.unsplash.com/photo-1580983561371-7f7b218e9f8c?w=600',
      link: '#',
    },
    {
      title: 'Weather Forecast App',
      description: 'A React app fetching real-time weather data via APIs, styled with Tailwind CSS and animated with Framer Motion.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600',
      link: '#',
    },
    {
      title: 'Blog Platform',
      description: 'A full-stack blog with Node.js, Express, MongoDB, and React, supporting user posts and comments.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600',
      link: '#',
    },
    {
      title: 'Online Quiz App',
      description: 'A PHP and MySQL-based quiz platform with jQuery for dynamic UI and Bootstrap for styling.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
      link: '#',
    },
    {
      title: 'Expense Tracker',
      description: 'A React Native mobile app for tracking expenses, with SQLite for local storage and charts.',
      image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=600',
      link: '#',
    },
    {
      title: 'Machine Learning Model',
      description: 'A Python-based ML model for predicting house prices, deployed with Flask and AWS.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600',
      link: '#',
    },
    {
      title: 'Event Management System',
      description: 'A Spring Boot and Angular app for managing events, with MySQL and RESTful APIs.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600',
      link: '#',
    },
    {
      title: 'Portfolio Analytics Tool',
      description: 'A Node.js and React tool for analyzing investment portfolios, with D3.js for visualizations.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600',
      link: '#',
    },
  ];

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
            variants={cardVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
          >
            My <span className="text-yellow-300">Projects</span>
          </motion.h1>
          <motion.p
            variants={cardVariants}
            className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-6 px-4"
          >
            Explore my collection of innovative projects built with modern technologies like React, Node.js, Java, and more.
          </motion.p>
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
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
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
    </div>
  );
}

export default Projects;