import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Navigation } from './components/layout/Navigation';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';

const App = () => {
  const [currentSection, setCurrentSection] = useState('about');

  return (
    <div className="min-h-screen bg-notion-light">
      {/* Notion-style width constraint */}
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-20">
        <Header />
        <Navigation 
          currentSection={currentSection} 
          setCurrentSection={setCurrentSection} 
        />
        <main className="mt-8">
          {currentSection === 'about' && <About />}
          {currentSection === 'projects' && <Projects />}
        </main>
      </div>
    </div>
  );
};

export default App;