'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const floatingConfigs = [
  { top: '10%', left: '15%', size: '80px', color: 'bg-blue-500/20', x: 60, y: -60, duration: 5 },
  { top: '20%', left: '60%', size: '100px', color: 'bg-purple-500/20', x: -50, y: 50, duration: 6 },
  { top: '50%', left: '30%', size: '120px', color: 'bg-pink-500/20', x: 70, y: -40, duration: 5.5 },
  { top: '70%', left: '75%', size: '90px', color: 'bg-cyan-500/20', x: -60, y: 60, duration: 5.8 },
  { top: '30%', left: '80%', size: '110px', color: 'bg-blue-400/20', x: 50, y: -50, duration: 6 },
  { top: '80%', left: '15%', size: '100px', color: 'bg-fuchsia-500/20', x: 55, y: -55, duration: 5.2 },
  { top: '15%', left: '40%', size: '90px', color: 'bg-indigo-500/20', x: -40, y: 40, duration: 5 },
  { top: '65%', left: '50%', size: '70px', color: 'bg-pink-400/20', x: 45, y: -45, duration: 5.6 },
  { top: '40%', left: '90%', size: '80px', color: 'bg-cyan-400/20', x: -50, y: 50, duration: 5.4 },
  { top: '55%', left: '10%', size: '90px', color: 'bg-purple-400/20', x: 50, y: -50, duration: 5 },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
      {/* Floating Bubbles */}
      {floatingConfigs.map((bubble, index) => (
        <motion.div
          key={index}
          className={`${bubble.color} rounded-full blur-sm absolute`}
          style={{ top: bubble.top, left: bubble.left, width: bubble.size, height: bubble.size }}
          animate={{ x: [0, bubble.x, 0], y: [0, bubble.y, 0] }}
          transition={{ duration: bubble.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center max-w-5xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Joshika Reddy Avuthu
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Computer Science Undergraduate | Full Stack Developer | AI Enthusiast
          </p>

          <div className="flex justify-center gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition">
              View My Projects
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition">
              Get In Touch
            </a>
          </div>

          <div className="mt-16 text-white/60 flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;



// 'use client';
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center px-4 text-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       <motion.div
//         className="max-w-4xl"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//           Joshika Reddy Avuthu
//         </h1>
//         <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-8">
//           Computer Science undergraduate at Georgia State University, passionate about building full-stack solutions, AI-powered platforms, and creative applications that solve real-world problems. Open to internships and learning opportunities.
//         </p>
//         <div className="flex justify-center flex-wrap gap-4">
//           <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition">View Projects</a>
//           <a href="#contact" className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition">Contact</a>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
