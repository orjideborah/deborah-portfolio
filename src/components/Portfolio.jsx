import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Scale, Heart, Globe, Brain, FileText, ChevronDown, Menu, X, MapPin, Calendar, Users } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "HerRights",
      description: "A comprehensive women's rights information portal providing legal resources and support for GBV survivors in Nigeria. Features multilingual support and emergency contacts.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      github: "#",
      live: "#",
      image: "bg-gradient-to-br from-pink-100 to-rose-100"
    },
    {
      id: 2,
      title: "AML/CFT Dashboard",
      description: "Compliance dashboard mockup for financial institutions to report and track suspicious transactions. Includes data visualization and alert systems.",
      tech: ["React", "Chart.js", "Tailwind CSS"],
      icon: <Scale className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-500",
      github: "#",
      live: "#",
      image: "bg-gradient-to-br from-blue-100 to-indigo-100"
    },
    {
      id: 3,
      title: "Smart NDA Generator",
      description: "An intelligent legal document generator that creates customized NDAs based on user inputs. Streamlines legal document creation for small businesses.",
      tech: ["JavaScript", "HTML/CSS", "Local Storage"],
      icon: <FileText className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      github: "#",
      live: "#",
      image: "bg-gradient-to-br from-green-100 to-emerald-100"
    },
    {
      id: 4,
      title: "Explore Nigeria",
      description: "Interactive tourism platform showcasing Nigeria's cultural heritage sites like Olumo Rock and Erin Ijesha Waterfall with interactive maps and guides.",
      tech: ["React", "Leaflet.js", "APIs"],
      icon: <Globe className="w-6 h-6" />,
      color: "from-orange-500 to-amber-500",
      github: "#",
      live: "#",
      image: "bg-gradient-to-br from-orange-100 to-amber-100"
    },
    {
      id: 5,
      title: "Mental Health Tracker",
      description: "A compassionate mental health journaling web app inspired by advocacy work. Features mood tracking, reflection prompts, and wellness resources.",
      tech: ["React", "Firebase", "Chart.js"],
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500",
      github: "#",
      live: "#",
      image: "bg-gradient-to-br from-purple-100 to-violet-100"
    }
  ];

  const skills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3/Tailwind", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Git/GitHub", level: 85 },
    { name: "Legal Tech", level: 95 },
    { name: "Compliance", level: 90 },
    { name: "UI/UX Design", level: 70 }
  ];

  const blogPosts = [
    {
      title: "Why Lawyers Should Learn to Code",
      excerpt: "Exploring the intersection of law and technology, and how coding skills can revolutionize legal practice in Nigeria.",
      date: "May 2025",
      readTime: "5 min read"
    },
    {
      title: "Building Tech for Gender Justice",
      excerpt: "How technology can be leveraged to create safer spaces and better support systems for women facing gender-based violence.",
      date: "April 2025",
      readTime: "7 min read"
    },
    {
      title: "Web3 Compliance: A Beginner's Guide",
      excerpt: "Understanding regulatory frameworks and compliance requirements in the evolving Web3 landscape.",
      date: "March 2025",
      readTime: "6 min read"
    }
  ];

  const NavButton = ({ section, children, icon }) => (
    <button
      onClick={() => {
        setActiveSection(section);
        setMobileMenuOpen(false);
      }}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        activeSection === section
          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {icon}
      <span>{children}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DO</span>
              </div>
              <span className="font-bold text-xl text-gray-800">Deborah Orji</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              <NavButton section="home" icon={<Code className="w-4 h-4" />}>Home</NavButton>
              <NavButton section="about" icon={<Users className="w-4 h-4" />}>About</NavButton>
              <NavButton section="projects" icon={<Globe className="w-4 h-4" />}>Projects</NavButton>
              <NavButton section="blog" icon={<FileText className="w-4 h-4" />}>Blog</NavButton>
              <NavButton section="contact" icon={<Mail className="w-4 h-4" />}>Contact</NavButton>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <NavButton section="home" icon={<Code className="w-4 h-4" />}>Home</NavButton>
              <NavButton section="about" icon={<Users className="w-4 h-4" />}>About</NavButton>
              <NavButton section="projects" icon={<Globe className="w-4 h-4" />}>Projects</NavButton>
              <NavButton section="blog" icon={<FileText className="w-4 h-4" />}>Blog</NavButton>
              <NavButton section="contact" icon={<Mail className="w-4 h-4" />}>Contact</NavButton>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                  <span className="text-white text-4xl font-bold">DO</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
                  Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Deborah Orji</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  I code, I advocate, I build for impact. Front-end developer with a legal mind, creating technology solutions for social justice and compliance.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
                <button
                  onClick={() => setActiveSection('projects')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  View My Work
                </button>
                <button
                  onClick={() => setActiveSection('contact')}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
                >
                  Contact Me
                </button>
              </div>

              {/* Tech Stack Icons */}
              <div className="flex flex-wrap justify-center gap-6 text-gray-500">
                <div className="text-center">
                  <Code className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm">Frontend</span>
                </div>
                <div className="text-center">
                  <Scale className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm">Legal Tech</span>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm">Social Impact</span>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm">Web Dev</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h2>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">My Journey: From Law to Code</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      My path to front-end development began in the courtrooms and compliance offices of Nigeria, where I discovered that the intersection of law and technology holds immense potential for social impact.
                    </p>
                    <p>
                      As a legal practitioner specializing in AML/CFT compliance and women's rights advocacy, I witnessed firsthand how technology could bridge gaps in legal access and create more efficient, transparent systems.
                    </p>
                    <p>
                      This realization led me to learn programming, starting with HTML and CSS, then advancing to JavaScript and React. Today, I build web applications that serve both legal professionals and vulnerable communities.
                    </p>
                    <p>
                      My unique background allows me to create technology solutions that are not only functional but also legally sound and socially conscious.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <Scale className="w-6 h-6 text-blue-500 mr-3" />
                      <h4 className="font-semibold text-gray-800">Legal Expertise</h4>
                    </div>
                    <p className="text-gray-600">AML/CFT Compliance, Women's Rights Law, Contract Drafting</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <Code className="w-6 h-6 text-purple-500 mr-3" />
                      <h4 className="font-semibold text-gray-800">Technical Skills</h4>
                    </div>
                    <p className="text-gray-600">HTML, CSS, JavaScript, React, Git, UI/UX Design</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <Heart className="w-6 h-6 text-pink-500 mr-3" />
                      <h4 className="font-semibold text-gray-800">Advocacy</h4>
                    </div>
                    <p className="text-gray-600">Gender Justice, Tech for Social Good, Legal Access</p>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Technical Skills</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className={`h-48 ${project.image} flex items-center justify-center`}>
                      <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                        {project.icon}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-3">
                        <a
                          href={project.github}
                          className="flex items-center space-x-1 text-gray-600 hover:text-black transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm">Code</span>
                        </a>
                        <a
                          href={project.live}
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm">Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Blog Section */}
        {activeSection === 'blog' && (
          <section className="min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Blog & Insights
              </h2>

              <div className="space-y-8">
                {blogPosts.map((post, index) => (
                  <article key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                    <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                      Read More →
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Build Something Amazing Together</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Whether you're looking for a front-end developer who understands legal compliance, 
                    or you want to collaborate on tech solutions for social impact, I'd love to hear from you.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">deborah.orji@email.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">Lagos, Nigeria</span>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-8">
                    <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      onClick={() => alert('Thank you for your interest! Please reach out via email or LinkedIn.')}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DO</span>
            </div>
            <span className="font-bold text-xl">Deborah Orji</span>
          </div>
          <p className="text-gray-400 mb-6">Building bridges between law, technology, and social impact.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-gray-400 text-sm">
            <p>&copy; 2025 Deborah Orji. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;