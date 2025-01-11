import React from 'react';
import { motion } from 'framer-motion';
import { 
  MailOpen, Github, Linkedin, MapPin, 
  GraduationCap, Code
} from 'lucide-react';

export const About = () => {
  return (
    <div className="max-w-3xl">
      {/* Profile Section */}
      <div className="flex flex-col gap-8 mb-12">
        <div className="flex items-center gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-pink-100/20 to-yellow-100/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/assets/head3.jpg"
              alt="Greg MacEachern"
              className="w-24 h-24 rounded-lg object-cover border border-gray-200 relative z-10"
            />
          </motion.div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Product Manager & Engineer</h2>
            <p className="text-gray-500 mt-1">Building delightful products at Range</p>
          </div>
        </div>
        
        <p className="text-gray-600 text-lg leading-relaxed">
          Previously at Microsoft OneNote, I combine engineering expertise with product thinking 
          to create experiences users love. Currently exploring AI and building tools 
          used by creators across 52+ countries.
        </p>
      </div>

      {/* Skills & Experience */}
      <div className="space-y-8 mb-12">
        <motion.div 
          className="p-4 rounded-lg border border-gray-200 relative overflow-hidden group"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-gray-600 mb-3">
              <MapPin size={16} className="text-gray-500" />
              <p>New York City, USA</p>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <GraduationCap size={16} className="text-gray-500" />
              <p>Computer Engineering • Green Card Holder</p>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Areas of Focus</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Product Strategy",
              "Engineering",
              "React",
              "Node.js",
              "AI/ML",
              "Growth"
            ].map((skill, index) => (
              <motion.span 
                key={index}
                className="px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded-md text-sm relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">{skill}</span>
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg overflow-hidden"
      >
        <div className="p-5 border border-gray-200 rounded-lg relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <h3 className="font-medium text-gray-900 mb-4">Let's Connect</h3>
            
            <div className="space-y-1">
              {[
                {
                  icon: MailOpen,
                  text: "gregmaceachern98@gmail.com",
                  href: "mailto:gregmaceachern98@gmail.com"
                },
                {
                  icon: Linkedin,
                  text: "LinkedIn",
                  href: "https://www.linkedin.com/in/greg-maceachern/"
                },
                {
                  icon: Github,
                  text: "Github",
                  href: "https://github.com/greg-maceachern12"
                }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-md transition-all hover:bg-gray-50/80 relative group overflow-hidden"
                  whileHover={{ x: 4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <link.icon size={18} className="text-gray-500 relative z-10" />
                  <span className="text-gray-600 hover:text-gray-900 relative z-10">{link.text}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};