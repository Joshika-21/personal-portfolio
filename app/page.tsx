import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import TechStack from '../components/TechStack';

export default function Home() {
  return (
    <main className="bg-dark text-white min-h-screen">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 text-accent">About Me</h2>
        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
          Hi, I’m <span className="font-bold text-white">Joshika Reddy Avuthu</span> — a highly driven Computer Science undergraduate at Georgia State University with a perfect 4.0 GPA. 
        </p>
        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
          My journey has been fueled by curiosity and hands-on learning. I’ve built AI-powered platforms like <span className="font-bold text-purple-400">ResuMatch</span> and <span className="font-bold text-purple-400">Prepper.ai</span>, developed backend systems like my <span className="font-bold text-purple-400">Web Crawler</span>, and created interactive learning platforms like <span className="font-bold text-purple-400">BitQuest</span>. These projects have allowed me to apply what I’m learning in the classroom to real-world problems, constantly expanding my skills in full-stack development, AI, and software engineering.
        </p>
        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
          Beyond projects, I tutor students at GSU’s MAC Lab and Knack, helping others master Computer Science fundamentals while constantly refining my own ability to break down advanced topics into simple, actionable solutions. Whether it’s AI, machine learning, web development, backend architecture, cloud platforms, or data structures — I thrive at the intersection of <span className="font-bold text-white">technical depth and practical execution</span>.
        </p>
        <p className="text-xl text-gray-300 leading-relaxed">
          I’m now actively seeking software engineering internships and full-time opportunities where I can bring my passion, innovation, and relentless problem-solving to a high-impact engineering team. 
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-accent">Experience</h2>

        <div className="space-y-12">

          <div className="bg-secondary rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-2">CS & Math Tutor</h3>
            <p className="text-gray-300 mb-4">Georgia State University — MAC Lab / Knack</p>
            <p className="text-gray-400">
              Tutored students in Computer Science, Math, and Statistics courses, focusing on core programming languages such as Python, Java, and Data Structures. Helped students prepare for assignments, projects, and exams while improving problem-solving skills.
            </p>
          </div>

          <div className="bg-secondary rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-2">Full-Stack Developer (Projects)</h3>
            <p className="text-gray-300 mb-4">Personal AI-Powered Projects</p>
            <p className="text-gray-400">
              Developed AI-driven platforms like ResuMatch, Prepper.ai, and Multi-threaded Web Crawler using modern frameworks (FastAPI, Flutter, Flask, Gemini AI, Firestore, Firebase, Java, and IPFS), blending cutting-edge technology with practical solutions.
            </p>
          </div>

        </div>
      </section>

      <Projects />

      <TechStack />

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-accent">Get In Touch</h2>
        <p className="text-lg text-gray-300 mb-8">
          Interested in collaborating or learning more? I&#39;m always open to opportunities and conversations!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="mailto:joshika.avuthu@gmail.com" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:scale-105 transition">
            Email Me
          </a>
          <a href="https://github.com/Joshika-21" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-secondary text-white font-semibold hover:scale-105 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/joshikareddyavuthu" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-secondary text-white font-semibold hover:scale-105 transition">
            LinkedIn
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
