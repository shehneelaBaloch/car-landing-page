'use client';

import { motion } from 'framer-motion';

const cars = [
  {
    id: 1,
    name: 'Tesla Model S',
    price: '$79,990',
    features: ['Electric', '0-60 mph in 2.3s', '390 mi range'],
    image: '/car1.jpg',
  },
  {
    id: 2,
    name: 'Porsche 911',
    price: '$99,900',
    features: ['Gasoline', '0-60 mph in 3.5s', 'Top speed 191 mph'],
    image: '/car2.jpg',
  },
  {
    id: 3,
    name: 'Audi R8',
    price: '$142,700',
    features: ['V10 Engine', '0-60 mph in 3.2s', 'Top speed 205 mph'],
    image: '/car3.jpg',
  },
];

export default function FeatureCards() {
  return (
    <div id="features" className="container mx-auto py-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }} // Animations will trigger every time the component comes into view
      >
        Featured Cars
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cars.map((car, index) => (
          <motion.div
            key={car.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false }} // Animations will trigger every time the component comes into view
          >
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
              <p className="text-red-500 text-xl mb-4">{car.price}</p>
              <ul className="text-gray-400 mb-6">
                {car.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="w-full bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Buy Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}