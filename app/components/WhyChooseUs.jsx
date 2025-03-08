'use client';

import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    icon: '🚗',
    title: 'Wide Selection',
    description: 'Choose from a wide range of luxury and performance cars.',
  },
  {
    id: 2,
    icon: '💳',
    title: 'Easy Financing',
    description: 'Flexible financing options to suit your budget.',
  },
  {
    id: 3,
    icon: '🔧',
    title: 'Expert Service',
    description: 'Our team of experts is here to assist you.',
  },
];

export default function WhyChooseUs() {
  return (
    <div id="why-choose-us" className="bg-gray-800 py-16">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-gray-700 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}