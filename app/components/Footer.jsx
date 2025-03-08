'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      className="bg-gray-900 py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }} // Animations will trigger every time the component comes into view
    >
      <div className="container mx-auto text-center">
        <p className="text-gray-400">&copy; 2023 CarWorld. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}