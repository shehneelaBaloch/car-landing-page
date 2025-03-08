'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/car-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }} // Animations will trigger every time the component comes into view
      >
        <h1 className="text-6xl font-bold mb-4">Find Your Dream Car</h1>
        <p className="text-xl mb-8">Explore the best collection of luxury and performance cars.</p>
        <motion.a
          href="#features"
          className="bg-red-500 text-white px-8 py-3 rounded-full text-lg hover:bg-red-600 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Cars
        </motion.a>
      </motion.div>
    </div>
  );
}