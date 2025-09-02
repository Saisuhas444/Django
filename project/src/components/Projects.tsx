import React from 'react';
import { ExternalLink, Github, Database, Globe, Server } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform built with Django, featuring user authentication, payment integration, order management, and admin dashboard.",
      tech: ["Django", "PostgreSQL", "Stripe API", "Bootstrap"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Task Management API",
      description: "RESTful API for task management with user authentication, team collaboration features, and real-time notifications using Django REST Framework.",
      tech: ["Django REST", "Celery", "Redis", "JWT"],
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Blog Platform",
      description: "Modern blog platform with rich text editor, comment system, user profiles, and social media integration built with Django.",
      tech: ["Django", "MySQL", "CKEditor", "Bootstrap"],
      image: "https://images.pexels.com/photos/34676/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Real Estate Portal",
      description: "Property listing website with advanced search filters, user dashboards, and integrated mapping functionality.",
      tech: ["Django", "PostgreSQL", "Google Maps API", "jQuery"],
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course management, progress tracking, quizzes, and video streaming capabilities.",
      tech: ["Django", "SQLite", "Video.js", "Chart.js"],
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization and automated reporting features.",
      tech: ["Django", "MongoDB", "Chart.js", "Celery"],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of the Django projects I've built to solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex space-x-3">
                    <a 
                      href={project.github}
                      className="bg-gray-900/80 backdrop-blur-sm p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                    <a 
                      href={project.live}
                      className="bg-green-500/80 backdrop-blur-sm p-2 rounded-full hover:bg-green-600 transition-colors duration-200"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <span>View More Projects</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;