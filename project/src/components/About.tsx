import React from 'react';
import { Code2, Lightbulb, Target, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="text-green-400" size={24} />,
      title: "Clean Code",
      description: "Writing maintainable and scalable Django applications with best practices."
    },
    {
      icon: <Target className="text-blue-400" size={24} />,
      title: "Problem Solver",
      description: "Analytical approach to solving complex backend challenges efficiently."
    },
    {
      icon: <Lightbulb className="text-yellow-400" size={24} />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and improving development skills."
    },
    {
      icon: <Users className="text-purple-400" size={24} />,
      title: "Team Player",
      description: "Collaborative developer focused on delivering quality solutions."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-gray-700/50 shadow-2xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-center">
              Hello! I'm <span className="text-green-400 font-semibold">Saisuhas</span>, a passionate Django developer 
              with a strong foundation in Python and backend development. I specialize in building robust, 
              scalable web applications that solve real-world problems. My journey in web development has been 
              driven by curiosity and a desire to create meaningful digital experiences.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-900/50 rounded-xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex-shrink-0 bg-gray-700/50 p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;