import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2, ease: 'easeOut' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Amit Sharma',
    role: 'Software Engineer',
    feedback: 'Working with Manish was a game-changer. His MERN stack training was practical and industry-focused.',
    image: 'https://picsum.photos/200/200?person1',
    // video: 'https://example.com/testimonial1.mp4', // Placeholder for video
  },
  {
    id: 2,
    name: 'Priya Singh',
    role: 'Web Developer',
    feedback: 'Manish’s mentorship helped me build confidence in coding complex applications.',
    image: 'https://picsum.photos/200/200?person2',
  },
  {
    id: 3,
    name: 'Rahul Verma',
    role: 'Student',
    feedback: 'The Java course was well-structured and easy to follow. Highly recommend!',
    image: 'https://picsum.photos/200/200?person3',
  },
  {
    id: 4,
    name: 'Sneha Patel',
    role: 'Full Stack Developer',
    feedback: 'Manish’s e-commerce project guidance was invaluable for my career growth.',
    image: 'https://picsum.photos/200/200?person4',
  },
  {
    id: 5,
    name: 'Vikram Rao',
    role: 'Tech Lead',
    feedback: 'His insights on AI integration in projects were cutting-edge and practical.',
    image: 'https://picsum.photos/200/200?person5',
  },
  {
    id: 6,
    name: 'Anjali Gupta',
    role: 'UI/UX Designer',
    feedback: 'Collaborating with Manish on web projects improved my design-to-code workflow.',
    image: 'https://picsum.photos/200/200?person6',
  },
  {
    id: 7,
    name: 'Rohan Kapoor',
    role: 'Entrepreneur',
    feedback: 'Manish’s consultation on scalable apps helped launch my startup successfully.',
    image: 'https://picsum.photos/200/200?person7',
  },
  {
    id: 8,
    name: 'Meera Joshi',
    role: 'Data Analyst',
    feedback: 'His Python workshops were engaging and boosted my analytical skills.',
    image: 'https://picsum.photos/200/200?person8',
  },
  {
    id: 9,
    name: 'Kunal Desai',
    role: 'DevOps Engineer',
    feedback: 'Manish’s guidance on CI/CD pipelines was clear and actionable.',
    image: 'https://picsum.photos/200/200?person9',
  },
  {
    id: 10,
    name: 'Shalini Nair',
    role: 'Freelancer',
    feedback: 'His MERN stack course helped me land high-paying freelance projects.',
    image: 'https://picsum.photos/200/200?person10',
  },
  {
    id: 11,
    name: 'Arjun Malhotra',
    role: 'Software Trainer',
    feedback: 'Manish’s teaching style is inspiring and makes complex topics simple.',
    image: 'https://picsum.photos/200/200?person11',
  },
  {
    id: 12,
    name: 'Nisha Reddy',
    role: 'Product Manager',
    feedback: 'His insights on tech-driven product development were game-changing.',
    image: 'https://picsum.photos/200/200?person12',
  },
  {
    id: 13,
    name: 'Siddharth Menon',
    role: 'Backend Developer',
    feedback: 'Manish’s Java training was hands-on and prepared me for real-world challenges.',
    image: 'https://picsum.photos/200/200?person13',
  },
  {
    id: 14,
    name: 'Pooja Agarwal',
    role: 'Student',
    feedback: 'His coding bootcamp was intensive and rewarding. I’m now job-ready!',
    image: 'https://picsum.photos/200/200?person14',
  },
  {
    id: 15,
    name: 'Karan Thakur',
    role: 'AI Enthusiast',
    feedback: 'Manish’s AI workshops opened new possibilities for my career.',
    image: 'https://picsum.photos/200/200?person15',
  },
];

function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const [imageLoading, setImageLoading] = useState({});
  const itemsPerPage = 6; // Show 6 testimonials per page
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Get testimonials for the current page
  const displayedTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Handle image load
  const handleImageLoad = (id) => {
    setImageLoading((prev) => ({ ...prev, [id]: true }));
  };

  // Navigation for carousel
  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto p-4 sm:p-6 max-w-7xl"
    >
      <motion.h1
        variants={cardVariants}
        className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4"
      >
        Testimonials
      </motion.h1>
      <motion.p
        variants={cardVariants}
        className="text-base sm:text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto"
      >
        What others have to say about working with me.
      </motion.p>

      {/* Testimonial Grid */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {displayedTestimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
            role="article"
            aria-label={`Testimonial from ${testimonial.name}`}
          >
            {!imageLoading[testimonial.id] && (
              <div className="w-24 h-24 bg-gray-200 rounded-full animate-pulse mb-4" />
            )}
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s profile`}
              className={`w-24 h-24 rounded-full object-cover mb-4 ${imageLoading[testimonial.id] ? 'block' : 'hidden'}`}
              loading="lazy"
              onLoad={() => handleImageLoad(testimonial.id)}
              onError={(e) => {
                e.target.src = 'https://picsum.photos/200/200';
                handleImageLoad(testimonial.id);
              }}
            />
            {/* Video placeholder (uncomment to use) */}
            {/* {testimonial.video && (
              <video
                src={testimonial.video}
                controls
                className="w-full h-48 object-cover rounded mb-4"
                aria-label={`Testimonial video from ${testimonial.name}`}
              />
            )} */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{testimonial.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{testimonial.role}</p>
            <p Confederate_p4 className="text-gray-600 text-sm sm:text-base line-clamp-3">{testimonial.feedback}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <motion.div
          variants={cardVariants}
          className="flex justify-center items-center gap-4 mt-8"
        >
          <motion.button
            onClick={handlePrev}
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous testimonials"
            disabled={currentPage === 0}
          >
            <FaArrowLeft />
          </motion.button>
          <span className="text-gray-600">
            Page {currentPage + 1} of {totalPages}
          </span>
          <motion.button
            onClick={handleNext}
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next testimonials"
            disabled={currentPage === totalPages - 1}
          >
            <FaArrowRight />
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Testimonials;