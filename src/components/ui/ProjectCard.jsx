import React from 'react';
import { motion } from 'framer-motion';

export const ProjectCard = ({ icon, title, description, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="notion-card p-4 block group"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start gap-3 relative">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 rounded opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          <img
            src={icon}
            alt={title}
            className="w-10 h-10 object-contain rounded relative z-10"
          />
        </div>
        <div>
          <h3 className="font-medium mb-1 group-hover:text-blue-900 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-notion-gray text-sm">{description}</p>
        </div>
      </div>
    </motion.a>
  );
};