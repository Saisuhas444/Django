import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-green-400" size={24} />,
      title: "Email",
      content: "saisuhas@example.com",
      link: "mailto:saisuhas@example.com"
    },
    {
      icon: <Phone className="text-blue-400" size={24} />,
      title: "Phone",
      content: "+91 9876543210",
      link: "tel:+919876543210"
    },
    {
      icon: <MapPin className="text-purple-400" size={24} />,
      title: "Location",
      content: "India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/saisuhas",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/saisuhas",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter size={24} />,
      name: "Twitter",
      url: "https://twitter.com/saisuhas",
      color: "hover:text-cyan-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next Django project!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="bg-gray-700/50 p-3 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-gray-400">{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-gray-800/50 backdrop-blur-lg p-4 rounded-xl border border-gray-700/50 text-gray-400 transition-all duration-300 hover:transform hover:scale-110 ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-200"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-200"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700/50 mt-20 pt-8">
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Saisuhas. Built with passion using React & Django expertise.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;