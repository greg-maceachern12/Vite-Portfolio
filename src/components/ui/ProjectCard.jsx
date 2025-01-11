import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const ProjectCard = ({ icon, title, description, link, isFavorite }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="notion-card p-4 block group relative"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {isFavorite && (
        <div className="absolute -top-1 -right-1 bg-white shadow-sm border border-gray-200 rounded-md px-2 py-1 flex items-center gap-1 z-20">
          <Star size={12} className="text-gray-500" />
          <span className="text-xs text-gray-500">Personal Fav</span>
        </div>
      )}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 relative">
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-pink-100/20 to-yellow-100/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="w-16 h-16 sm:w-14 sm:h-14 relative z-10 rounded overflow-hidden">
            <img
              src={icon}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="font-medium mb-1 text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </motion.a>
  );
};