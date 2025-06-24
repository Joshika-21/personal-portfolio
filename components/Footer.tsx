// 'use client';

// import { Github, Linkedin, Mail, Phone } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-6 text-white">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

//         {/* About Section */}
//         <div>
//           <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
//             Joshika Reddy Avuthu
//           </h3>
//           <p className="text-lg text-gray-300 mb-6">
//             Computer Science Undergraduate passionate about building AI-powered full stack applications, combining creativity with technology to solve real-world problems.
//           </p>

//           <div className="flex space-x-4">
//             <a href="https://github.com/Joshika-21" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
//               <Github size={28} />
//             </a>
//             <a href="https://linkedin.com/in/joshikareddyavuthu" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
//               <Linkedin size={28} />
//             </a>
//             <a href="mailto:joshika.avuthu@gmail.com" className="hover:text-accent transition">
//               <Mail size={28} />
//             </a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
//           <ul className="space-y-3 text-lg text-gray-400">
//             <li><a href="#about" className="hover:text-accent">About</a></li>
//             <li><a href="#experience" className="hover:text-accent">Experience</a></li>
//             <li><a href="#projects" className="hover:text-accent">Projects</a></li>
//             <li><a href="#contact" className="hover:text-accent">Contact</a></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="text-2xl font-semibold mb-4">Get In Touch</h4>
//           <p className="mb-2 text-lg text-gray-300"><span className="font-semibold">Email:</span> joshika.avuthu@gmail.com</p>
//           <p className="mb-2 text-lg text-gray-300"><span className="font-semibold">Phone:</span> +1 (678) 429-7632</p>
//           <p className="text-lg text-gray-300"><span className="font-semibold">Location:</span> Atlanta, GA</p>
//         </div>

//       </div>

//       <div className="mt-12 text-center text-gray-400 text-sm">
//         &copy; {new Date().getFullYear()} Joshika Reddy Avuthu. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;




'use client';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-sm text-gray-400 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      &copy; {new Date().getFullYear()} Joshika Reddy Avuthu • All Rights Reserved
    </footer>
  );
};

export default Footer;
