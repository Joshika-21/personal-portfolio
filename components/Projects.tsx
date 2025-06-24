'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'ResuMatch',
    shortDescription: 'Cross-platform AI-powered resume builder using Flutter, FastAPI, IPFS.',
    fullDescription:
      'A full-stack cross-platform mobile application allowing users to effortlessly create, manage, and store professional resumes. Built using Flutter and Dart for native performance on iOS, Android, desktop, and web, the app features intuitive form-based data collection and cloud persistence using Pinata API and IPFS decentralized storage. The backend, powered by Python and SQLAlchemy, securely manages resume metadata while ensuring fast retrieval and permanent storage. Designed to simplify resume creation for students, the app offers scalable, secure, and globally accessible resume management capabilities.',
    tech: ['C++', 'CMake', 'Dart', 'Python', 'Swift', 'C', 'FastAPI', 'IPFS', 'AI'],
    image: '/resumatch.png',
  },
  {
    title: 'Multi-threaded Web Crawler',
    shortDescription: 'Java web crawler with Jsoup and multithreading for efficient web scraping.',
    fullDescription:
      'An advanced Java-based web crawler designed to extract and parse website content in parallel using multithreading. The system employs a dynamic thread pool to manage concurrency while efficiently scraping data from web pages via Jsoup’s HTML parsing API. To ensure scalability and fault tolerance, the crawler implements intelligent failure retries, serialization of visited URLs, and real-time thread pool adjustments. This project showcases expertise in Java multithreading, web scraping, data persistence, and network programming.',
    tech: ['Java', 'Jsoup', 'Multithreading', 'Web Scraping'],
    image: '/webcrawler.png',
  },
  {
    title: 'Prepper.ai',
    shortDescription: 'AI meal planner generating recipes based on user’s ingredients.',
    fullDescription:
      'AI-driven web application that helps users create customized meal plans based on their available ingredients and dietary preferences. Built with Streamlit and Python, Prepper.ai integrates Google Gemini 1.5 Flash large language model to generate personalized recipe suggestions using advanced prompt engineering. The app features an intuitive interface, dynamic user inputs, custom UI styling, and real-time conversational AI generation, delivering highly personalized dietary recommendations.',
    tech: ['Python', 'Streamlit', 'Gemini AI', 'Firestore'],
    image: '/prepper.png',
  },
  {
    title: 'BitQuest',
    shortDescription: 'Interactive coding platform with AI-powered problem-solving and live code execution.',
    fullDescription:
      'An interactive full-stack web application where students solve coding challenges to unlock each level, inspired by escape room mechanics. Users write live code directly in the browser across Python, Java, and C++ using an integrated Monaco Editor. The platform dynamically evaluates solutions through automated test cases and AI-powered feedback using Ollama API, providing adaptive hints and personalized assistance. Each challenge includes helpful video tutorials and GeeksForGeeks references, ensuring concept reinforcement alongside problem solving.',
    tech: ['TypeScript', 'CSS', 'JavaScript', 'HTML'],
    image: '/bitquest.png',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-16 text-accent">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-[#1a1b33] to-[#2c2e4b] rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Image src={project.image} alt={project.title} width={600} height={300} className="w-full h-48 object-cover rounded-t-3xl" />
            <div className="p-6">
              <p className="text-white text-lg mb-4">{project.shortDescription}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-md">
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-gradient">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-[#1a1b33] to-[#2c2e4b] p-8 rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.8, y: -50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: -50 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <Image src={selectedProject.image} alt={selectedProject.title} width={800} height={400} className="w-full h-auto rounded-2xl mb-6" />
              <h3 className="text-3xl font-bold text-white mb-6">{selectedProject.title}</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">{selectedProject.fullDescription}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.tech.map((techItem: string, i: number) => (
                  <span key={i} className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm rounded-full shadow-md">
                    {techItem}
                  </span>
                ))}
              </div>
              <div className="flex justify-center">
                <button onClick={() => setSelectedProject(null)} className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition">
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
