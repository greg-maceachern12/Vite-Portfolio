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
      <div className="flex items-start gap-3 relative">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-pink-100/20 to-yellow-100/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img
            src={icon}
            alt={title}
            className="w-10 h-10 object-contain rounded relative z-10"
          />
        </div>
        <div>
          <h3 className="font-medium mb-1 text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </motion.a>
  );
};