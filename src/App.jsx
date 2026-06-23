import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon, ExternalLink, Code, Zap, Award, BookOpen } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [stats, setStats] = useState({ leetcode: 0, projects: 0, experience: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        leetcode: prev.leetcode < 300 ? prev.leetcode + 15 : 300,
        projects: prev.projects < 6 ? prev.projects + 1 : 6,
        experience: prev.experience < 1 ? prev.experience + 0.1 : 1
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: 1,
      title: "AI-Powered eKYC Verification System",
      description: "End-to-end identity verification platform using OCR for document extraction and DeepFace for facial recognition. Production-ready with 12 comprehensive test files.",
      tech: ["Python", "OpenCV", "DeepFace", "Streamlit", "MySQL"],
      highlights: ["95%+ Accuracy", "12 Test Files", "Production-Ready"],
      link: "https://github.com/Kashish-x1/AI-Powered-eKYC-System",
      icon: "🔐"
    },
    {
      id: 2,
      title: "Airbnb Analytics Engineering Pipeline",
      description: "Enterprise-grade data engineering solution with Medallion Architecture. Implements incremental models, SCD Type 2 snapshots, and dynamic SQL generation using dbt macros.",
      tech: ["dbt", "Snowflake", "SQL", "Jinja", "AWS S3"],
      highlights: ["Medallion Architecture", "15+ Models", "SCD Type 2"],
      link: "https://github.com/Kashish-x1/airbnb-analytics-engineering",
      icon: "📊"
    },
    {
      id: 3,
      title: "Flight Price Prediction (SageMaker)",
      description: "ML pipeline with Bayesian hyperparameter optimization. Comprehensive feature engineering, outlier treatment, and XGBoost model deployment with Streamlit interface.",
      tech: ["AWS SageMaker", "XGBoost", "Scikit-Learn", "Streamlit"],
      highlights: ["Bayesian Tuning", "35% Efficiency", "Real-time API"],
      link: "https://github.com/Kashish-x1/Sagemaker-flight-price-prediction",
      icon: "✈️"
    },
    {
      id: 4,
      title: "License Plate Detection System",
      description: "Computer vision system using YOLOv8 for real-time detection. OpenCV image processing and Pytesseract OCR integration for automated plate recognition.",
      tech: ["YOLOv8", "OpenCV", "Python", "Pytesseract", "Streamlit"],
      highlights: ["Real-time Detection", "Deep Learning", "OCR Integration"],
      link: "https://github.com/Kashish-x1",
      icon: "🚗"
    },
    {
      id: 5,
      title: "AI Blog Writing Agent",
      description: "Multi-agent LLM system using LangGraph. Intelligent workflow: Router → Research → Orchestrator → Worker → Reducer for autonomous blog generation.",
      tech: ["LangGraph", "LangChain", "Groq", "Gemini", "Streamlit"],
      highlights: ["Multi-Agent Orchestration", "Dual LLM APIs", "State Management"],
      link: "https://github.com/Kashish-x1",
      icon: "✍️"
    },
    {
      id: 6,
      title: "Zomato MERN Clone",
      description: "Full-stack web application with authentication, real-time data management, and cloud image uploads. Demonstrates complete MERN ecosystem integration.",
      tech: ["React", "Node.js", "MongoDB", "Express", "ImageKit"],
      highlights: ["Full-Stack", "Real Uploads", "Responsive Design"],
      link: "https://github.com/Kashish-x1",
      icon: "🍽️"
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript", "SQL", "C++"],
    "ML & AI": ["TensorFlow", "PyTorch", "Scikit-Learn", "LangChain", "LangGraph", "Computer Vision"],
    "Data Engineering": ["Snowflake", "dbt", "AWS (SageMaker, S3)", "ETL/ELT Pipelines"],
    "Web & Tools": ["React", "Node.js", "Streamlit", "FastAPI", "Docker", "Git"],
    "Core Concepts": ["ML Pipelines", "Feature Engineering", "Bayesian Optimization", "Data Analysis"]
  };

  const bgColor = isDark ? 'bg-[#0a0a0a]' : 'bg-white';
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const cardBg = isDark ? 'bg-[#1a1a1a]' : 'bg-gray-50';
  const accentColor = '#fbbf24';
  const accentHover = '#f59e0b';
  const secondaryText = isDark ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`${bgColor} ${textColor} transition-colors duration-300 min-h-screen font-inter`}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
          
          * {
            font-family: 'Inter', sans-serif;
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Outfit', sans-serif;
            font-weight: 700;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.3); }
            50% { box-shadow: 0 0 30px rgba(251, 191, 36, 0.6); }
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
          }
          
          .animate-slide-in-left {
            animation: slideInLeft 0.8s ease-out forwards;
            opacity: 0;
          }
          
          .glow-effect {
            animation: glow 3s ease-in-out infinite;
          }
          
          .delay-1 { animation-delay: 0.1s; }
          .delay-2 { animation-delay: 0.2s; }
          .delay-3 { animation-delay: 0.3s; }
          .delay-4 { animation-delay: 0.4s; }
          .delay-5 { animation-delay: 0.5s; }
        `}
      </style>

      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md ${scrolled ? (isDark ? 'bg-[#0a0a0a]/95 border-b border-yellow-900/30' : 'bg-white/95 border-b border-gray-200') : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-3xl font-bold font-outfit" style={{ color: accentColor }}>
              KC
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:opacity-70 transition duration-300"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2.5 rounded-lg transition duration-300 ${isDark ? 'bg-[#1a1a1a]' : 'bg-gray-200'}`}
              >
                {isDark ? <Sun size={20} style={{ color: accentColor }} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button onClick={() => setIsDark(!isDark)} className="p-2">
                {isDark ? <Sun size={20} style={{ color: accentColor }} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className={`md:hidden pb-4 space-y-2 ${cardBg} rounded-xl p-4 mt-2`}>
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 hover:opacity-70">
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: accentColor + '20' }}></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: accentColor + '10' }}></div>
        </div>

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl sm:text-7xl font-bold mb-6 font-outfit">
              Hi, I'm <span style={{ color: accentColor }}>Kashish</span>
            </h1>
          </div>

          <div className="animate-fade-in-up delay-1">
            <p className="text-2xl sm:text-3xl font-medium mb-4" style={{ color: accentColor }}>
              Data Science & AI/ML Developer
            </p>
          </div>

          <div className="animate-fade-in-up delay-2">
            <p className={`text-lg mb-8 ${secondaryText} max-w-2xl mx-auto leading-relaxed`}>
              Building production-grade ML systems, data engineering pipelines, and GenAI applications. 
              3rd year B.Tech student at Sharda University with a passion for solving real-world problems through data and AI.
            </p>
          </div>

          <div className="animate-fade-in-up delay-3 flex gap-4 justify-center mb-16 flex-wrap">
            <a
              href="https://github.com/Kashish-x1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition duration-300 hover:scale-105 glow-effect"
              style={{ backgroundColor: accentColor, color: '#0a0a0a' }}
            >
              <Github size={20} /> View GitHub
            </a>
            <a
              href="mailto:kashishchug90@gmail.com"
              className="px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition duration-300 hover:scale-105 border-2"
              style={{ borderColor: accentColor, color: accentColor }}
            >
              <Mail size={20} /> Get in Touch
            </a>
          </div>

          <div className="animate-fade-in-up delay-4">
            <div className="text-center text-sm opacity-50">
              ↓ Scroll to explore
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: accentColor + '20' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className={`${cardBg} rounded-2xl p-8 text-center animate-fade-in-up delay-1`}>
            <Code size={40} style={{ color: accentColor }} className="mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-2 font-outfit">{stats.leetcode}+</h3>
            <p className={secondaryText}>LeetCode Problems Solved</p>
          </div>

          <div className={`${cardBg} rounded-2xl p-8 text-center animate-fade-in-up delay-2`}>
            <Award size={40} style={{ color: accentColor }} className="mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-2 font-outfit">{stats.projects}</h3>
            <p className={secondaryText}>Full-Scale Projects</p>
          </div>

          <div className={`${cardBg} rounded-2xl p-8 text-center animate-fade-in-up delay-3`}>
            <Zap size={40} style={{ color: accentColor }} className="mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2 font-outfit">GenAI</h3>
            <p className={secondaryText}>LLM & Multi-Agent Systems</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center font-outfit">
            About <span style={{ color: accentColor }}>Me</span>
          </h2>

          <div className={`${cardBg} rounded-2xl p-8 md:p-12 animate-fade-in-up`}>
            <p className={`text-lg leading-relaxed mb-6 ${secondaryText}`}>
              I'm a passionate developer focused on transforming complex problems into elegant, data-driven solutions. 
              With expertise spanning machine learning, data engineering, and full-stack development, I've built systems that demonstrate 
              technical depth and real-world impact.
            </p>

            <p className={`text-lg leading-relaxed mb-6 ${secondaryText}`}>
              My journey includes building OCR-powered identity verification systems, designing enterprise data pipelines with Medallion Architecture, 
              deploying ML models on cloud platforms, and creating multi-agent LLM systems for autonomous content generation.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="flex gap-4">
                <BookOpen size={24} style={{ color: accentColor }} className="flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Currently Learning</h4>
                  <p className={secondaryText}>Advanced ML systems, LLM optimization, and cloud-native architectures</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Zap size={24} style={{ color: accentColor }} className="flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Passionate About</h4>
                  <p className={secondaryText}>Building products, solving problems with data, and open-source contributions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center font-outfit">
            Featured <span style={{ color: accentColor }}>Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`${cardBg} rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-32 bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(135deg, ${accentColor}80, ${accentColor}40)` }}>
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    {project.icon}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 font-outfit" style={{ color: accentColor }}>
                    {project.title}
                  </h3>

                  <p className={`mb-6 leading-relaxed ${secondaryText}`}>
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold mb-3 opacity-70">Key Achievements:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium px-3 py-2 rounded-full"
                          style={{ backgroundColor: accentColor + '20', color: accentColor }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm font-semibold mb-3 opacity-70">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`text-xs font-medium px-3 py-2 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-300'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold transition duration-300 hover:gap-3"
                    style={{ color: accentColor }}
                  >
                    Explore Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - FIXED */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: accentColor + '20' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center font-outfit">
            <span style={{ color: accentColor }}>Skills</span> & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map((category, index) => (
              <div
                key={index}
                className={`${cardBg} rounded-2xl p-8 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-6 font-outfit" style={{ color: accentColor }}>
                  {category[0]}
                </h3>
                <div className="space-y-3">
                  {category[1].map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 pb-2">
                      <div 
                        className="w-2 h-2 rounded-full flex-shrink-0" 
                        style={{ backgroundColor: accentColor }}
                      ></div>
                      <span className="text-sm font-medium" style={{ color: textColor }}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 font-outfit">
            Let's <span style={{ color: accentColor }}>Connect</span>
          </h2>

          <p className={`text-xl mb-12 ${secondaryText} leading-relaxed`}>
            I'm always interested in hearing about new projects, opportunities, and interesting problems to solve. 
            Let's connect and create something amazing together!
          </p>

          <div className="flex gap-8 justify-center mb-12 flex-wrap">
            <a
              href="https://github.com/Kashish-x1"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-full ${cardBg} hover:shadow-lg transition duration-300 transform hover:scale-110`}
              title="GitHub"
            >
              <Github size={28} style={{ color: accentColor }} />
            </a>
            <a
              href="https://linkedin.com/in/kashish-chug-633821239"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-full ${cardBg} hover:shadow-lg transition duration-300 transform hover:scale-110`}
              title="LinkedIn"
            >
              <Linkedin size={28} style={{ color: accentColor }} />
            </a>
            <a
              href="mailto:kashishchug90@gmail.com"
              className={`p-6 rounded-full ${cardBg} hover:shadow-lg transition duration-300 transform hover:scale-110`}
              title="Email"
            >
              <Mail size={28} style={{ color: accentColor }} />
            </a>
          </div>

          <div className={`${cardBg} rounded-2xl p-8 mb-12`}>
            <p className="text-lg font-medium mb-4">Email me directly:</p>
            <a href="mailto:kashishchug90@gmail.com" className="text-2xl font-bold hover:opacity-70 transition" style={{ color: accentColor }}>
              kashishchug90@gmail.com
            </a>
          </div>

          <div className={`text-sm ${secondaryText}`}>
            <p>© 2026 Kashish Chug. All rights reserved.</p>
            <p className="mt-2">Built with React, Tailwind CSS, and passion for code.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
