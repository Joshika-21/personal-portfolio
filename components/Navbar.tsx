// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X, Home, User, Briefcase, Mail, Github, Linkedin, FileText } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '#home', icon: Home },
//     { name: 'About', href: '#about', icon: User },
//     { name: 'Projects', href: '#projects', icon: Briefcase },
//     { name: 'Contact', href: '#contact', icon: Mail },
//   ];

//   const socialLinks = [
//     { name: 'GitHub', href: 'https://github.com/Joshika-21', icon: Github },
//     { name: 'LinkedIn', href: 'https://linkedin.com/in/joshikareddyavuthu', icon: Linkedin },
//     { name: 'Resume', href: '/resume.pdf', icon: FileText },
//   ];

//   return (
//     <motion.nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? 'bg-[#120629]/80 backdrop-blur-lg shadow-lg border-b border-purple-700/30'
//           : 'bg-transparent'
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           <div className="flex items-center">
//             <Image
//               src="/logo.png"
//               alt="Logo"
//               width={50}
//               height={50}
//               priority
//               className="rounded-full shadow-lg shadow-pink-500/20"
//             />
//             <span className="ml-3 text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
//               Portfolio
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item, index) => (
//               <motion.a
//                 key={item.name}
//                 href={item.href}
//                 className="relative text-white hover:text-pink-400 transition-colors duration-300 group"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <span className="flex items-center space-x-1">
//                   <item.icon size={18} />
//                   <span>{item.name}</span>
//                 </span>
//                 <motion.div
//                   className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"
//                 />
//               </motion.a>
//             ))}

//             {/* Social Links */}
//             <div className="flex items-center space-x-5 ml-8 pl-8 border-l border-gray-500/40">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-white hover:text-pink-400 transition-transform"
//                   whileHover={{ scale: 1.3 }}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.3 + index * 0.1 }}
//                 >
//                   <social.icon size={22} className="drop-shadow-lg" />
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <motion.button
//             className="md:hidden text-white"
//             onClick={() => setIsOpen(!isOpen)}
//             whileTap={{ scale: 0.95 }}
//           >
//             <AnimatePresence mode="wait">
//               {isOpen ? (
//                 <motion.div
//                   key="close"
//                   initial={{ rotate: -90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: 90, opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <X size={28} />
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="menu"
//                   initial={{ rotate: 90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: -90, opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <Menu size={28} />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="md:hidden bg-[#120629]/95 backdrop-blur-lg border-t border-purple-700/30"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="px-4 py-6 space-y-4">
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={item.name}
//                   href={item.href}
//                   className="flex items-center space-x-3 text-white hover:text-pink-400 transition-colors py-2"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <item.icon size={22} />
//                   <span>{item.name}</span>
//                 </motion.a>
//               ))}

//               <div className="pt-4 border-t border-gray-700/40">
//                 <div className="flex space-x-4 justify-center">
//                   {socialLinks.map((social, index) => (
//                     <motion.a
//                       key={social.name}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-white hover:text-pink-400 transition-transform"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.3 + index * 0.1 }}
//                     >
//                       <social.icon size={26} className="drop-shadow-lg" />
//                     </motion.a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;



'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail, Github, Linkedin, FileText } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Joshika-21', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/joshikareddyavuthu', icon: Linkedin },
    { name: 'Resume', href: '/resume.pdf', icon: FileText },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#120629]/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={50} height={50} priority className="rounded-full shadow-lg" />
          <span className="ml-3 text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-white hover:text-pink-400 transition">
              <span className="flex items-center space-x-1"><item.icon size={18} /> {item.name}</span>
            </a>
          ))}
          <div className="flex items-center space-x-5 ml-8 pl-8 border-l border-gray-500/40">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition">
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="md:hidden bg-[#120629]/95 backdrop-blur-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="flex items-center space-x-3 text-white hover:text-pink-400 transition">
                  <item.icon size={20} /> <span>{item.name}</span>
                </a>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex space-x-4 justify-center">
                  {socialLinks.map((social) => (
                    <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400">
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
