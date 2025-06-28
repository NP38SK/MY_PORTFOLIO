import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaLinkedin, FaGithub, FaDownload, FaCode, FaMobileAlt, FaRobot, FaEnvelope, FaPhone } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import { saveAs } from 'file-saver';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Resume() {
  const [expandedProject, setExpandedProject] = useState(null);
  const resumeRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Skills
  const skills = [
    { name: 'Java', icon: <FaCode /> },
    { name: 'React', icon: <FaCode /> },
    { name: 'Node.js', icon: <FaCode /> },
    { name: 'Python', icon: <FaCode /> },
    { name: 'Android', icon: <FaMobileAlt /> },
    { name: 'AI/ML', icon: <FaRobot /> },
  ];

  // Projects
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A responsive online store with cart, payments, and authentication using React, Node.js, and MongoDB.',
      tech: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'AI Chatbot',
      description: 'A Python-based chatbot with NLP and TensorFlow, integrated with Node.js for real-time responses.',
      tech: ['Python', 'TensorFlow', 'Node.js'],
    },
    {
      title: 'Android Fitness App',
      description: 'A Java-based mobile app for tracking workouts and nutrition, using Firebase for data storage.',
      tech: ['Java', 'Android', 'Firebase'],
    },
    {
      title: 'Personal Portfolio',
      description: 'A dynamic portfolio website built with React, Tailwind CSS, and Vite to showcase my skills.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
    },
  ];

  // Contact Info
  const contactInfo = [
    { icon: <FaLinkedin className="text-blue-600 text-2xl" />, text: 'LinkedIn', link: 'https://www.linkedin.com/in/manish-butola-409984225/' },
    { icon: <FaGithub className="text-gray-800 text-2xl" />, text: 'GitHub', link: 'https://github.com/manishbutola' },
    { icon: <FaEnvelope className="text-blue-600 text-2xl" />, text: 'manish@example.com' },
    { icon: <FaPhone className="text-blue-600 text-2xl" />, text: '+91-8130560794' },
  ];

  // Education
  const education = {
    degree: 'BTech in Computer Science',
    institution: 'Institute of Technology, Gopeshwar',
    duration: '2019–2023',
  };

  // Experience
  const experiences = [
    {
      title: 'Software Trainer',
      company: 'Unique ERP · Full-time',
      duration: 'Nov 2024–Present · 8 mos',
      location: 'Head Office: 220, 2nd Floor, Vardhman Star Shop Mall · On-site',
      description: 'As a Web Development Instructor at Unique ERP and a Professional Software Trainer, I teach MERN Stack, PHP, Java, and other programming languages. I focus on hands-on training, real-world projects, and industry best practices to prepare students for the job market. My goal is to build confident, skilled developers ready for real-world challenges.',
    },
    {
      title: 'Coding Faculty (IT Trainer) | Java Trainer & Faculty',
      company: 'Aptech Learning (Asian School of Education and Training) · Full-time',
      duration: 'Sep 2023–Oct 2024 · 1 yr 2 mos',
      location: 'Faridabad, Haryana, India · On-site',
      description: 'Specialized in teaching Java programming alongside other coding and IT-related subjects. Designed and delivered comprehensive training sessions, mentored students to build strong coding foundations, and prepared them for real-world applications. Focused on making complex topics accessible and engaging, helping students enhance their technical expertise.',
    },
    {
      title: 'Coding Faculty (IT Trainer) | Java Trainer & Faculty',
      company: 'Aptech Learning (JCE Management Services Private Limited) · Full-time',
      duration: 'Aug 2022–Sep 2023 · 1 yr 2 mos',
      location: 'Kalkaji, New Delhi, India · On-site',
      description: 'Trained students in C, C++, Java, Web Development, and Android Development. Delivered high-quality training sessions, created practical learning environments, and guided students in developing real-world projects. Ensured strong understanding of fundamental and advanced concepts, preparing students for industry demands.',
    },
    {
      title: 'Android Developer',
      company: 'Indev Consultancy Pvt. Ltd. · Full-time',
      duration: 'Apr 2022–Aug 2022 · 5 mos',
      location: 'New Delhi, Delhi, India · On-site',
      description: 'Developed user-friendly and high-performance Android applications using Java and Kotlin. Collaborated with design teams for intuitive UI/UX, integrated RESTful APIs, conducted testing/debugging, and managed Play Store deployments. Utilized Git for version control and worked in an Agile environment.',
    },
    {
      title: 'Java Web Developer',
      company: 'Creative Developers · Full-time',
      duration: 'Dec 2020–Apr 2022 · 1 yr 5 mos',
      location: 'Faridabad, Haryana, India · On-site',
      description: 'Designed and implemented high-quality web and Android applications using Java, Spring Boot, and related technologies. Developed scalable backend solutions, integrated databases, and ensured optimal performance. Collaborated with teams to deliver robust digital solutions meeting client requirements.',
    },
  ];

  // Download PDF
  const downloadPDF = async () => {
    try {
      setErrorMessage('');
      const element = resumeRef.current;
      
      // Ensure element is visible and styled correctly
      const canvas = await html2canvas(element, {
        scale: 2, // Higher resolution for better quality
        useCORS: true, // Handle cross-origin images
        logging: false,
        width: element.offsetWidth,
        height: element.offsetHeight,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgProps = pdf.getImageProperties(imgData);
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

      // Handle multi-page PDF if content is too long
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;

      // Add additional pages if needed
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save('resume.pdf');
    } catch (error) {
      console.error('PDF generation failed:', error);
      setErrorMessage('Failed to generate PDF. Please try again.');
    }
  };

  // Download Word
  const downloadWord = () => {
    try {
      setErrorMessage('');
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              // Header
              new Paragraph({
                text: 'Manish Butola',
                heading: HeadingLevel.HEADING_1,
                alignment: 'center',
                spacing: { after: 200 },
              }),
              new Paragraph({
                text: 'Full Stack Developer with expertise in Java, Android, and AI/ML',
                alignment: 'center',
                spacing: { after: 400 },
              }),
              // Contact Information
              new Paragraph({
                text: 'Contact Information',
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 200 },
              }),
              ...contactInfo.map(
                (info) =>
                  new Paragraph({
                    children: [
                      new TextRun({ text: info.text, size: 24 }),
                      info.link ? new TextRun({ text: ` (${info.link})`, size: 24, italics: true }) : null,
                    ].filter(Boolean),
                    spacing: { after: 100 },
                  })
              ),
              // Professional Summary
              new Paragraph({
                text: 'Professional Summary',
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 200 },
              }),
              new Paragraph({
                text: 'IT professional with extensive experience in Java, Android, and Full Stack development, where I mentor and guide aspiring IT professionals. Throughout my career, I’ve contributed to projects ranging from mobile applications to enterprise-level solutions, always focusing on creating scalable, efficient, and user-friendly systems. Passionate about staying ahead of industry trends and continuously improving my skills, I’m driven by a commitment to both personal and professional growth. I thrive in collaborative environments and enjoy sharing my knowledge with others to help them achieve their goals.',
                spacing: { after: 400 },
              }),
              // Education
              new Paragraph({
                text: 'Education',
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 200 },
              }),
              new Paragraph({
                text: education.degree,
                children: [new TextRun({ text: education.degree, bold: true, size: 28 })],
              }),
              new Paragraph({ text: education.institution }),
              new Paragraph({ text: education.duration, spacing: { after: 400 } }),
              // Experience
              new Paragraph({
                text: 'Experience',
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 200 },
              }),
              ...experiences.flatMap((exp) => [
                new Paragraph({
                  text: exp.title,
                  children: [new TextRun({ text: exp.title, bold: true, size: 28 })],
                }),
                new Paragraph({ text: exp.company }),
                new Paragraph({ text: exp.duration }),
                new Paragraph({ text: exp.location }),
                new Paragraph({ text: exp.description, spacing: { after: 200 } }),
              ]),
              // Skills
              new Paragraph({
                text: 'Skills',
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 200 },
              }),
              new Paragraph({
                text: skills.map((s) => s.name).join(' • '),
                spacing: { after: 400 },
              }),
              // Projects
              new Paragraph({
                text: 'Key Projects',
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 200 },
              }),
              ...projects.flatMap((proj) => [
                new Paragraph({
                  text: proj.title,
                  children: [new TextRun({ text: proj.title, bold: true, size: 28 })],
                }),
                new Paragraph({ text: proj.description }),
                new Paragraph({
                  text: `Technologies: ${proj.tech.join(', ')}`,
                  spacing: { after: 200 },
                }),
              ]),
            ],
          },
        ],
      });

      Packer.toBlob(doc).then((blob) => {
        saveAs(blob, 'resume.docx');
      });
    } catch (error) {
      console.error('Word generation failed:', error);
      setErrorMessage('Failed to generate Word document. Please try again.');
    }
  };

  return (
    <div className="w-full overflow-visible bg-gray-50">
      {/* Visible Resume Content for PDF Rendering */}
      <div ref={resumeRef} className="bg-white p-8 max-w-5xl mx-auto">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <div className="flex flex-col items-center text-center">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4"
            >
              Manish Butola
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 mb-6"
            >
              Full Stack Developer with expertise in Java, Android, and AI/ML
            </motion.p>
            <motion.div variants={itemVariants} className="flex space-x-4 mb-8">
              <motion.button
                onClick={downloadPDF}
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-blue-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Download resume as PDF"
              >
                <span>Download PDF</span>
                <FaDownload />
              </motion.button>
              <motion.button
                onClick={downloadWord}
                className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-900"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Download resume as Word"
              >
                <span>Download Word</span>
                <FaDownload />
              </motion.button>
            </motion.div>
            {errorMessage && (
              <motion.p
                variants={itemVariants}
                className="text-red-500 text-sm text-center mb-4"
              >
                {errorMessage}
              </motion.p>
            )}
          </div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-800 mb-6"
          >
            Contact Information
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center"
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center justify-center space-x-2">
                {info.icon}
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {info.text}
                  </a>
                ) : (
                  <span>{info.text}</span>
                )}
              </div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-800 mb-6"
          >
            Professional Summary
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700"
          >
            IT professional with extensive experience in Java, Android, and Full Stack development, where I mentor and guide aspiring IT professionals. Throughout my career, I’ve contributed to projects ranging from mobile applications to enterprise-level solutions, always focusing on creating scalable, efficient, and user-friendly systems. Passionate about staying ahead of industry trends and continuously improving my skills, I’m driven by a commitment to both personal and professional growth. I thrive in collaborative environments and enjoy sharing my knowledge with others to help them achieve their goals.
          </motion.p>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-800 mb-6"
          >
            Education
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-800">{education.degree}</h3>
            <p className="text-gray-600">{education.institution}</p>
            <p className="text-gray-600">{education.duration}</p>
          </motion.div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-800 mb-6"
          >
            Experience
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-gray-600">{exp.duration}</p>
                <p className="text-gray-600">{exp.location}</p>
                <p className="text-gray-600 mt-2">{exp.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-800 mb-6"
          >
            Skills
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
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-800 mb-6"
          >
            Key Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-lg"
                onClick={() => setExpandedProject(expandedProject === index ? null : index)}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-2">{project.description}</p>
                {expandedProject === index && (
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default Resume;