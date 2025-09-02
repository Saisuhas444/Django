import React from 'react';
import { BookOpen, Award, Code, Zap } from 'lucide-react';

const Learning = () => {
  const courses = [
    {
      title: "Advanced Django Development",
      provider: "Django Official Documentation",
      status: "Completed",
      icon: <Code className="text-green-400" size={24} />,
      skills: ["Django ORM", "Custom User Models", "Advanced Queries", "Performance Optimization"]
    },
    {
      title: "Python Web Development Bootcamp",
      provider: "Online Platform",
      status: "Completed",
      icon: <BookOpen className="text-blue-400" size={24} />,
      skills: ["Flask", "Django", "SQLAlchemy", "RESTful APIs"]
    },
    {
      title: "Database Design & Management",
      provider: "University Course",
      status: "Completed",
      icon: <Award className="text-purple-400" size={24} />,
      skills: ["PostgreSQL", "Database Optimization", "Query Performance", "Data Modeling"]
    },
    {
      title: "Cloud Computing with AWS",
      provider: "AWS Training",
      status: "In Progress",
      icon: <Zap className="text-yellow-400" size={24} />,
      skills: ["EC2", "RDS", "S3", "Lambda Functions"]
    },
    {
      title: "Docker & Containerization",
      provider: "DevOps Course",
      status: "Completed",
      icon: <Code className="text-cyan-400" size={24} />,
      skills: ["Docker", "Docker Compose", "Container Orchestration", "CI/CD"]
    },
    {
      title: "Advanced JavaScript & React",
      provider: "Frontend Specialization",
      status: "In Progress",
      icon: <BookOpen className="text-orange-400" size={24} />,
      skills: ["Modern JavaScript", "React Hooks", "State Management", "API Integration"]
    }
  ];

  const achievements = [
    { title: "Django Certified Developer", year: "2023" },
    { title: "Python Programming Certificate", year: "2022" },
    { title: "Web Development Bootcamp Graduate", year: "2022" },
    { title: "Database Administration Certified", year: "2023" }
  ];

  return (
    <section id="learning" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Learning Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Continuous learning and skill development in modern web technologies
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Courses Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Courses & Training</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-700/50 p-3 rounded-lg flex-shrink-0">
                      {course.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xl font-bold text-white">{course.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          course.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {course.status}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-4">{course.provider}</p>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Certifications & Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-green-400 font-semibold">{achievement.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;