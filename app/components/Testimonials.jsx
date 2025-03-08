'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-800 py-16">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }} // Animations will trigger every time the component comes into view
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-700 p-6 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }} // Animations will trigger every time the component comes into view
          >
            <p className="text-gray-400">"Amazing service! Found my dream car at an affordable price."</p>
            <p className="mt-4 font-bold">- John Doe</p>
          </motion.div>
          <motion.div
            className="bg-gray-700 p-6 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }} // Animations will trigger every time the component comes into view
          >
            <p className="text-gray-400">"The team was very helpful and made the process seamless."</p>
            <p className="mt-4 font-bold">- Jane Smith</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}