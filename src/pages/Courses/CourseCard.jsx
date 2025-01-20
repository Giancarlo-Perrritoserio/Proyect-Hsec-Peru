import React from "react";
import { motion } from "framer-motion";

const CourseCard = ({ image, title, description, onReadMore }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/3"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        onClick={onReadMore}
        className="inline-block px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
      >
        Leer Más
      </button>
    </div>
  </motion.div>
);

export default CourseCard;
