import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaArrowRight } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import axios from 'axios';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState({ show: false, success: false, message: '' });
  const formRef = useRef();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const sendSMS = async () => {
    try {
      // Backend endpoint for Fast2SMS (deployed on Vercel, Netlify, or your server)
      await axios.post('/api/send-sms', {
        to: '8130560794', // Fast2SMS uses numbers without country code for India
        message: `New contact form submission from ${formData.name} (${formData.email}): ${formData.message}`,
      });
    } catch (error) {
      console.error('Failed to send SMS:', error);
      // Silent error to avoid disrupting user experience
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Send email via EmailJS
    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID (e.g., 'service_abc123')
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID (e.g., 'template_xyz789')
        formData,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
      .then(
        async () => {
          // Send SMS after successful email
          await sendSMS();
          setModal({
            show: true,
            success: true,
            message: 'Message sent successfully! You will be contacted soon.',
          });
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          setModal({
            show: true,
            success: false,
            message: 'Failed to send message. Please try again.',
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto p-4 sm:p-6 max-w-7xl"
    >
      <motion.h1
        variants={itemVariants}
        className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6"
      >
        Contact Me
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto"
      >
        Get in touch for collaborations, inquiries, or to discuss your next project!
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md p-6">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                required
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                required
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                rows="5"
                required
                aria-describedby={errors.message ? 'message-error' : undefined}
              ></textarea>
              {errors.message && (
                <p id="message-error" className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>
            <motion.button
              type="submit"
              className={`w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              disabled={isSubmitting}
              aria-label="Send message"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div variants={itemVariants} className="bg-gray-100 rounded-lg shadow-md p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaPhone className="text-blue-600" />
              <p className="text-gray-700">+91 8130560794</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600" />
              <p className="text-gray-700">butolamohit7@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <p className="text-gray-700">Delhi, India</p>
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-4">Follow Me</h2>
          <div className="flex space-x-4">
            <motion.a
              href="https://www.linkedin.com/in/manish-butola-409984225/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
              whileHover={{ scale: 1.2 }}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/NP38SK/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
              whileHover={{ scale: 1.2 }}
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://twitter.com/manishbutola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
              whileHover={{ scale: 1.2 }}
              aria-label="Twitter Profile"
            >
              <FaTwitter size={24} />
            </motion.a>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-4">Schedule a Consultation</h2>
          <motion.a
            href="https://calendly.com/butolamohit7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Schedule a consultation"
          >
            Book a Call <FaArrowRight className="ml-2" />
          </motion.a>
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Find Me</h2>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Google Maps Placeholder</p>
              {/* Embed Google Maps iframe here */}
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe> */}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success/Error Modal */}
      <AnimatePresence>
        {modal.show && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
              <h2 className={`text-xl font-semibold ${modal.success ? 'text-green-600' : 'text-red-600'} mb-4`}>
                {modal.success ? 'Success' : 'Error'}
              </h2>
              <p className="text-gray-700 mb-6">{modal.message}</p>
              <motion.button
                onClick={() => setModal({ show: false, success: false, message: '' })}
                className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close modal"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ContactUs;