'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cars = [
  {
    id: 1,
    name: 'Tesla Model S',
    image: '/car1.jpg',
    description: 'Experience the future with the Tesla Model S. Electric, fast, and luxurious.',
  },
  {
    id: 2,
    name: 'Porsche 911',
    image: '/car2.jpg',
    description: 'The iconic Porsche 911. Timeless design, unmatched performance.',
  },
  {
    id: 3,
    name: 'Audi R8',
    image: '/car3.jpg',
    description: 'The Audi R8. A supercar with everyday usability.',
  },
];

export default function CarGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cars.length);
    setIsHovered(false); // Reset hover state on car change
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cars.length) % cars.length);
    setIsHovered(false); // Reset hover state on car change
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div id="gallery" className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Our Collection</h2>
      <div className="relative h-[400px] w-full flex items-center justify-center">
        {/* Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute w-[600px] h-[400px] flex items-center justify-center"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            onTouchStart={handleHover}
            onTouchEnd={handleLeave}
          >
            <div className="relative w-full h-full">
              <img
                src={cars[activeIndex].image}
                alt={`Car ${activeIndex + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              {/* Overlay with Description and Button */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center p-4 rounded-lg"
                  >
                    <motion.p
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-white text-lg text-center mb-4"
                    >
                      {cars[activeIndex].description}
                    </motion.p>
                    <motion.button
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300"
                    >
                      Book Now
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}