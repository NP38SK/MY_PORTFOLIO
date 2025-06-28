import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaDownload, FaCode, FaDatabase, FaMobileAlt, FaRobot, FaFileExcel, FaServer, FaCloud } from 'react-icons/fa';
import profileImage from '../assets/images/img.jpg';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillVariants = {
  hidden: { width: 0, scale: 1 },
  visible: {
    width: 'var(--progress)',
    scale: [1, 1.1, 1],
    borderColor: ['#e5e7eb', '#3b82f6', '#e5e7eb'],
    transition: {
      width: { duration: 1.5, ease: 'easeInOut' },
      scale: { times: [0, 0.8, 1], duration: 1.5 },
      borderColor: { duration: 1.5 },
    },
  },
};

function About() {
  // Skills list with updated progress
  const skills = [
    { name: 'C', progress: '100%', icon: <FaCode /> },
    { name: 'C++', progress: '100%', icon: <FaCode /> },
    { name: 'Java', progress: '100%', icon: <FaCode /> },
    { name: 'Python', progress: '100%', icon: <FaCode /> },
    { name: 'PHP', progress: '100%', icon: <FaCode /> },
    { name: 'HTML5', progress: '100%', icon: <FaCode /> },
    { name: 'CSS3', progress: '100%', icon: <FaCode /> },
    { name: 'JavaScript', progress: '100%', icon: <FaCode /> },
    { name: 'jQuery', progress: '100%', icon: <FaCode /> },
    { name: 'Angular', progress: '100%', icon: <FaCode /> },
    { name: 'Bootstrap 5', progress: '100%', icon: <FaCode /> },
    { name: 'React', progress: '100%', icon: <FaCode /> },
    { name: 'Node.js', progress: '100%', icon: <FaServer /> },
    { name: 'Express', progress: '100%', icon: <FaServer /> },
    { name: 'MongoDB', progress: '100%', icon: <FaDatabase /> },
    { name: 'XML', progress: '100%', icon: <FaCode /> },
    { name: 'JSON', progress: '100%', icon: <FaCode /> },
    { name: 'Spring', progress: '100%', icon: <FaCode /> },
    { name: 'Spring Boot', progress: '100%', icon: <FaCode /> },
    { name: 'JSP', progress: '100%', icon: <FaCode /> },
    { name: 'Servlet', progress: '100%', icon: <FaCode /> },
    { name: 'Data Science', progress: '96%', icon: <FaRobot /> },
    { name: 'AI/ML', progress: '95%', icon: <FaRobot /> },
    { name: 'Web Development', progress: '99%', icon: <FaCode /> },
    { name: 'App Development', progress: '97%', icon: <FaMobileAlt /> },
    { name: 'MS Office', progress: '98%', icon: <FaFileExcel /> },
    { name: 'Excel', progress: '98%', icon: <FaFileExcel /> },
    { name: 'MySQL', progress: '96%', icon: <FaDatabase /> },
    { name: 'Git', progress: '97%', icon: <FaCode /> },
    { name: 'AWS', progress: '95%', icon: <FaCloud /> },
  ];

  return (
    <div className="w-full overflow-visible bg-gray-50">
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 md:py-32 w-full"
      >
        <div className="w-full px-4 flex flex-col items-center text-center">
          <motion.img
            src={profileImage}
            alt="Manish Butola"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-4 object-cover shadow-lg"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            onError={(e) => (e.target.src = '/placeholder.jpg')}
          />
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
          >
            About <span className="text-yellow-300">Manish Butola</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-6 px-4"
          >
            Full Stack Developer | Java & Android Enthusiast | Passionate Mentor
          </motion.p>
        </div>
      </motion.section>

      {/* Bio Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 w-full"
      >
        <div className="w-full px-4 max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800"
          >
            My Journey
          </motion.h2>
          <div className="text-lg sm:text-xl text-gray-700 space-y-4">
            <motion.p variants={itemVariants}>
              I'm <span className="font-bold text-blue-600">Manish Butola</span>, a Full Stack Developer with a BTech from Institute of Technology, Gopeshwar. I specialize in building responsive web applications using HTML, CSS, JavaScript, React, Node.js, and other modern technologies.
            </motion.p>
            <motion.p variants={itemVariants}>
              With hands-on experience in creating dynamic and user-friendly interfaces, I thrive on turning ideas into reality through clean code and innovative solutions. My projects include e-commerce platforms, portfolio websites, and interactive applications.
            </motion.p>
            <motion.p variants={itemVariants}>
              As an IT professional with extensive experience in Java, Android, and Full Stack development, I mentor and guide aspiring IT professionals. Throughout my career, I’ve contributed to projects ranging from mobile applications to enterprise-level solutions, always focusing on creating scalable, efficient, and user-friendly systems. Passionate about staying ahead of industry trends and continuously improving my skills, I’m driven by a commitment to both personal and professional growth. I thrive in collaborative environments and enjoy sharing my knowledge with others to help them achieve their goals.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 bg-gray-100 w-full"
      >
        <div className="w-full px-4 max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800"
          >
            My Skills
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-4"
              >
                <span className="text-2xl text-blue-600">{skill.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-base sm:text-lg font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.progress}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3.5 border border-gray-300">
                    <motion.div
                      className={`h-3.5 rounded-full ${skill.progress === '100%' ? 'bg-green-500' : 'bg-blue-600'}`}
                      style={{ '--progress': skill.progress }}
                      variants={skillVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Connect Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 w-full"
      >
        <div className="w-full px-4 max-w-5xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800"
          >
            Let’s Connect
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-8"
          >
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
          <motion.a
            href="/resume.pdf"
            download
            variants={itemVariants}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 mx-auto w-max hover:bg-blue-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Download Resume</span>
            <FaDownload />
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}

export default About;