import React from 'react';

export const Navigation = ({ currentSection, setCurrentSection }) => {
  const sections = ['about', 'projects'];
  
  return (
    <nav className="border-b border-gray-200 -mx-4 px-4">
      <ul className="flex gap-4">
        {sections.map((section) => (
          <li key={section}>
            <button
              onClick={() => setCurrentSection(section)}
              className={`px-2 py-2 font-medium transition-colors relative ${
                currentSection === section
                ? 'text-notion-default'
                : 'text-notion-gray hover:text-notion-default'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {currentSection === section && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-notion-default" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};