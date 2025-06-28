import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, staggerChildren: 0.2, ease: 'easeOut' }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const blogVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Blog data
const blogs = [
  // Education
  {
    id: 1,
    title: "The Future of Online Learning: Trends to Watch",
    summary: "Explore how AI and interactive platforms are transforming online education, making it more accessible and personalized for students worldwide.",
    date: "May 15, 2025",
    category: "Education",
    image: "https://picsum.photos/800/600?education",
  },
  {
    id: 2,
    title: "Why Coding Should Be Part of Every Curriculum",
    summary: "Coding fosters problem-solving and creativity. Learn why schools should integrate programming languages like Java and Python into their syllabi.",
    date: "Apr 20, 2025",
    category: "Education",
    image: "https://picsum.photos/800/600?coding",
  },
  {
    id: 3,
    title: "Mentorship in Tech: Guiding the Next Generation",
    summary: "As a software trainer, I share insights on mentoring aspiring developers to build confidence and skills for real-world challenges.",
    date: "Mar 10, 2025",
    category: "Education",
    image: "https://picsum.photos/800/600?mentorship",
  },
  {
    id: 4,
    title: "The Role of EdTech in Rural India",
    summary: "Discover how technology can bridge educational gaps in rural areas, with a focus on affordable tools and internet access.",
    date: "Feb 5, 2025",
    category: "Education",
    image: "https://picsum.photos/800/600?rural",
  },
  {
    id: 5,
    title: "Hands-On Learning: Why Projects Matter in Coding",
    summary: "Real-world projects in MERN Stack and Java training prepare students for industry demands. Learn the value of practical experience.",
    date: "Jan 12, 2025",
    category: "Education",
    image: "https://picsum.photos/800/600?projects",
  },
  {
    id: 6,
    title: "Upskilling Teachers for a Digital Classroom",
    summary: "Teachers need training in modern tools to adapt to digital education. Explore strategies to empower educators in tech-driven classrooms.",
    date: "Dec 18, 2024",
    category: "Education",
    image: "https://picsum.photos/800/600?teacher",
  },
  // Politics
  {
    id: 7,
    title: "Youth Engagement in Indian Politics",
    summary: "Young voters are shaping India’s future. Analyze the role of youth in driving political change and policy innovation.",
    date: "May 8, 2025",
    category: "Politics",
    image: "https://picsum.photos/800/600?politics",
  },
  {
    id: 8,
    title: "The Impact of Social Media on Elections",
    summary: "Social media influences voter behavior. Examine its role in political campaigns and the challenges of misinformation.",
    date: "Apr 3, 2025",
    category: "Politics",
    image: "https://picsum.photos/800/600?social-media",
  },
  {
    id: 9,
    title: "Policy Reforms for Sustainable Development",
    summary: "Political policies must prioritize sustainability. Discuss reforms needed to balance economic growth and environmental protection.",
    date: "Mar 22, 2025",
    category: "Politics",
    image: "https://picsum.photos/800/600?sustainability",
  },
  {
    id: 10,
    title: "Women in Politics: Breaking Barriers",
    summary: "Explore the challenges and triumphs of women in political leadership, with a focus on India’s evolving landscape.",
    date: "Feb 14, 2025",
    category: "Politics",
    image: "https://picsum.photos/800/600?women",
  },
  {
    id: 11,
    title: "The Role of Technology in Transparent Governance",
    summary: "Blockchain and AI can enhance government transparency. Learn how tech is revolutionizing political accountability.",
    date: "Jan 25, 2025",
    category: "Politics",
    image: "https://picsum.photos/800/600?blockchain",
  },
  {
    id: 12,
    title: "Decentralization: Empowering Local Governance",
    summary: "Decentralized governance strengthens democracy. Analyze how local bodies can drive community development in India.",
    date: "Dec 30, 2024",
    category: "Politics",
    image: "https://picsum.photos/800/600?governance",
  },
  // Nature
  {
    id: 13,
    title: "Protecting India’s Biodiversity Hotspots",
    summary: "India’s rich biodiversity is at risk. Discover conservation strategies to protect ecosystems like the Western Ghats and Sundarbans.",
    date: "May 1, 2025",
    category: "Nature",
    image: "https://picsum.photos/800/600?nature",
  },
  {
    id: 14,
    title: "Climate Change: Actions for a Greener Future",
    summary: "Individual and collective actions can combat climate change. Explore practical steps to reduce carbon footprints in daily life.",
    date: "Apr 10, 2025",
    category: "Nature",
    image: "https://picsum.photos/800/600?climate",
  },
  {
    id: 15,
    title: "The Importance of Urban Green Spaces",
    summary: "Green spaces improve mental health and air quality. Learn why cities like Delhi need more parks and urban forests.",
    date: "Mar 5, 2025",
    category: "Nature",
    image: "https://picsum.photos/800/600?park",
  },
  {
    id: 16,
    title: "Renewable Energy: A Path to Sustainability",
    summary: "Solar and wind energy are key to a sustainable future. Discuss India’s progress and challenges in renewable adoption.",
    date: "Feb 8, 2025",
    category: "Nature",
    image: "https://picsum.photos/800/600?solar",
  },
  {
    id: 17,
    title: "Saving Our Rivers: The Ganga Revival",
    summary: "The Ganga’s health is critical for millions. Examine efforts to clean and preserve India’s sacred rivers.",
    date: "Jan 15, 2025",
    category: "Nature",
    image: "https://picsum.photos/800/600?river",
  },
  // Technology
  {
    id: 18,
    title: "AI Trends Shaping 2025",
    summary: "AI is transforming industries. Explore advancements in NLP and machine learning, with insights from my chatbot project.",
    date: "Apr 25, 2025",
    category: "Technology",
    image: "https://picsum.photos/800/600?ai",
  },
  {
    id: 19,
    title: "Building Scalable Full-Stack Apps with MERN",
    summary: "The MERN stack powers modern web apps. Share tips from my e-commerce platform project for robust development.",
    date: "Mar 15, 2025",
    category: "Technology",
    image: "https://picsum.photos/800/600?web-development",
  },
  {
    id: 20,
    title: "Java in 2025: Still Relevant?",
    summary: "Java remains a cornerstone of enterprise apps. Reflect on its evolution and my experience teaching Java at Unique ERP.",
    date: "Feb 1, 2025",
    category: "Technology",
    image: "https://picsum.photos/800/600?java",
  },
];

function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeBlog, setActiveBlog] = useState(null);
  const [imageLoading, setImageLoading] = useState({});

  const categories = ['All', 'Education', 'Politics', 'Nature', 'Technology'];

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter((blog) => blog.category === selectedCategory);

  const handleImageLoad = (id) => {
    setImageLoading((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 md:py-24 w-full"
      >
        <div className="w-full px-4 flex flex-col items-center text-center">
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
          >
            <span className="text-yellow-300">Manish Butola</span>'s Blogs
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl max-w-3xl mb-6 px-4"
          >
            Read my latest insights on Education, Politics, Nature, and Technology
          </motion.p>
        </div>
      </motion.section>

      {/* Category Filter */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-8 w-full"
      >
        <div className="w-full px-4 max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800"
          >
            Filter by Category
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-full font-semibold text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } transition-colors duration-200`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-12 w-full"
      >
        <div className="w-full px-4 max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800"
          >
            Latest Posts
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={blogVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer"
                whileHover={{ scale: 1.03, boxShadow: '0 8px 16px rgba(0,0,0,0.15)' }}
                onClick={() => setActiveBlog(blog)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveBlog(blog)}
                aria-label={`Open blog: ${blog.title}`}
              >
                {!imageLoading[blog.id] && (
                  <div className="w-full h-48 bg-gray-200 animate-pulse" />
                )}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className={`w-full h-48 object-cover ${imageLoading[blog.id] ? 'block' : 'hidden'}`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(blog.id)}
                  onError={(e) => {
                    e.target.src = 'https://picsum.photos/800/600';
                    handleImageLoad(blog.id);
                  }}
                />
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-xs font-semibold text-blue-600 uppercase mb-2">
                    {blog.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 flex-grow line-clamp-3">
                    {blog.summary}
                  </p>
                  <p className="text-gray-500 text-xs mb-4">{blog.date}</p>
                  <motion.div
                    className="text-blue-600 font-semibold flex items-center space-x-2 hover:text-blue-800"
                    whileHover={{ x: 5 }}
                  >
                    <span>Read More</span>
                    <FaArrowRight />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Blog Modal */}
      <AnimatePresence>
        {activeBlog && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed inset-0 bg-white z-50 overflow-y-auto p-4 sm:p-6 flex items-center justify-center"
          >
            <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-6">
              {!imageLoading[activeBlog.id] && (
                <div className="w-full h-64 bg-gray-200 animate-pulse rounded mb-4" />
              )}
              <img
                src={activeBlog.image}
                alt={activeBlog.title}
                className={`w-full h-64 object-cover rounded mb-4 ${imageLoading[activeBlog.id] ? 'block' : 'hidden'}`}
                loading="lazy"
                onLoad={() => handleImageLoad(activeBlog.id)}
                onError={(e) => {
                  e.target.src = 'https://picsum.photos/800/600';
                  handleImageLoad(activeBlog.id);
                }}
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{activeBlog.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                {activeBlog.date} | {activeBlog.category}
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-6">{activeBlog.summary}</p>
              <motion.button
                onClick={() => setActiveBlog(null)}
                className="px-5 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close blog modal"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 bg-gray-100 w-full"
      >
        <div className="w-full px-4 max-w-6xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800"
          >
            Want to Read More?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-700 mb-6"
          >
            Follow me on LinkedIn for updates and more insights!
          </motion.p>
          <motion.a
            href="https://www.linkedin.com/in/manish-butola-409984225/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 mx-auto w-fit hover:bg-blue-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Connect on LinkedIn"
          >
            <span>Connect on LinkedIn</span>
            <FaArrowRight />
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}

export default Blogs;