import React from 'react';
import { Code, Database, Server, Globe, Zap, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="text-green-400" size={32} />,
      skills: [
        { name: "Django", level: 90 },
        { name: "Python", level: 95 },
        { name: "Django REST", level: 85 },
        { name: "FastAPI", level: 75 }
      ]
    },
    {
      title: "Database",
      icon: <Database className="text-blue-400" size={32} />,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "SQLite", level: 90 },
        { name: "Redis", level: 70 }
      ]
    },
    {
      title: "Frontend",
      icon: <Globe className="text-purple-400" size={32} />,
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Zap className="text-yellow-400" size={32} />,
      skills: [
        { name: "Docker", level: 75 },
        { name: "Git", level: 90 },
        { name: "Linux", level: 80 },
        { name: "AWS", level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-gray-700/50 p-3 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-green-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;