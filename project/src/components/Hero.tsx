import React, { useEffect, useState } from 'react';
import { ChevronDown, Code, Database, Server } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Django Developer', 'Backend Engineer', 'Python Expert', 'Web Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = roles[currentIndex];
    let index = 0;
    setDisplayText('');
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent">
            Saisuhas
          </h1>
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              I'm a <span className="text-green-400 font-semibold">{displayText}</span>
              <span className="animate-blink">|</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Building robust web applications with Django, crafting scalable backend solutions, 
            and continuously learning new technologies to create amazing digital experiences.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-green-500/30">
              <Code className="text-green-400" size={20} />
              <span className="text-green-300">Django</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-500/30">
              <Database className="text-blue-400" size={20} />
              <span className="text-blue-300">Python</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-500/30">
              <Server className="text-purple-400" size={20} />
              <span className="text-purple-300">Backend</span>
            </div>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <span>Explore My Work</span>
            <ChevronDown size={20} />
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-500/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/10 rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-500/10 rounded-full animate-float"></div>
    </section>
  );
};

export default Hero;