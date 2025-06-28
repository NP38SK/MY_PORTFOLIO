import { motion } from 'framer-motion';

const notifications = [
  { id: 1, message: 'New project added: E-Commerce Platform!' },
  { id: 2, message: 'Completed Todo App with advanced features.' },
  { id: 3, message: 'Connect with me on LinkedIn!' },
];

function NotificationSidebar() {
  return (
    <motion.div
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed right-0 top-1/4 w-64 bg-gray-800 text-white p-4 rounded-l-lg shadow-lg"
    >
      <h3 className="text-lg font-semibold mb-4">Notifications</h3>
      <ul className="space-y-2">
        {notifications.map((notification) => (
          <motion.li
            key={notification.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: notification.id * 0.2 }}
            className="text-sm"
          >
            {notification.message}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default NotificationSidebar;