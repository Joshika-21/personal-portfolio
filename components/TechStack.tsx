// 'use client';

// import { RiReactjsLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
// import { SiMongodb, SiPytorch, SiTypescript, SiMysql, SiDart, SiHtml5, SiCss3, SiTailwindcss } from "react-icons/si";
// import { FaNodeJs, FaPython, FaJava, FaCuttlefish, FaCuttlefish as FaC } from "react-icons/fa";
// import { motion } from "framer-motion";

// const TechStack = () => {
//   return (
//     <section id="technologies" className="py-24 px-6 max-w-7xl mx-auto text-center">
//       <h2 className="text-5xl font-bold mb-16 text-accent">Technologies</h2>

//       {/* Languages */}
//       <div className="mb-16">
//         <h3 className="text-3xl font-semibold text-white mb-8">Languages</h3>
//         <motion.div 
//           whileInView={{ opacity: 1, y: 0 }} 
//           initial={{ opacity: 0, y: 50 }} 
//           transition={{ duration: 1 }} 
//           className="flex flex-wrap justify-center gap-10">
          
//           {[ 
//             { icon: <FaPython className="text-5xl text-yellow-400" /> },
//             { icon: <FaJava className="text-5xl text-red-600" /> },
//             { icon: <SiTypescript className="text-5xl text-blue-400" /> },
//             { icon: <SiDart className="text-5xl text-sky-400" /> },
//             { icon: <SiHtml5 className="text-5xl text-orange-500" /> },
//             { icon: <SiCss3 className="text-5xl text-blue-500" /> }
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ y: -10 }}
//               animate={{ y: [10, -10] }}
//               transition={{ duration: 1.5, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
//               className="p-6 rounded-full shadow-lg bg-gradient-to-br from-purple-700 via-blue-700 to-pink-700 hover:scale-110 transition-transform duration-300"
//             >
//               {item.icon}
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Frontend */}
//       <div className="mb-16">
//         <h3 className="text-3xl font-semibold text-white mb-8">Frontend</h3>
//         <motion.div 
//           whileInView={{ opacity: 1, y: 0 }} 
//           initial={{ opacity: 0, y: 50 }} 
//           transition={{ duration: 1 }} 
//           className="flex flex-wrap justify-center gap-10">

//           {[ 
//             { icon: <RiReactjsLine className="text-5xl text-cyan-400" /> },
//             { icon: <TbBrandNextjs className="text-5xl text-white" /> },
//             { icon: <SiTailwindcss className="text-5xl text-cyan-300" /> }
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ y: -10 }}
//               animate={{ y: [10, -10] }}
//               transition={{ duration: 1.5, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
//               className="p-6 rounded-full shadow-lg bg-gradient-to-br from-purple-700 via-blue-700 to-pink-700 hover:scale-110 transition-transform duration-300"
//             >
//               {item.icon}
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Backend */}
//       <div className="mb-16">
//         <h3 className="text-3xl font-semibold text-white mb-8">Backend</h3>
//         <motion.div 
//           whileInView={{ opacity: 1, y: 0 }} 
//           initial={{ opacity: 0, y: 50 }} 
//           transition={{ duration: 1 }} 
//           className="flex flex-wrap justify-center gap-10">

//           {[ 
//             { icon: <FaNodeJs className="text-5xl text-green-500" /> },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ y: -10 }}
//               animate={{ y: [10, -10] }}
//               transition={{ duration: 1.5, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
//               className="p-6 rounded-full shadow-lg bg-gradient-to-br from-purple-700 via-blue-700 to-pink-700 hover:scale-110 transition-transform duration-300"
//             >
//               {item.icon}
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Databases */}
//       <div className="mb-16">
//         <h3 className="text-3xl font-semibold text-white mb-8">Databases</h3>
//         <motion.div 
//           whileInView={{ opacity: 1, y: 0 }} 
//           initial={{ opacity: 0, y: 50 }} 
//           transition={{ duration: 1 }} 
//           className="flex flex-wrap justify-center gap-10">

//           {[ 
//             { icon: <SiMongodb className="text-5xl text-green-500" /> },
//             { icon: <SiMysql className="text-5xl text-blue-500" /> }
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ y: -10 }}
//               animate={{ y: [10, -10] }}
//               transition={{ duration: 1.5, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
//               className="p-6 rounded-full shadow-lg bg-gradient-to-br from-purple-700 via-blue-700 to-pink-700 hover:scale-110 transition-transform duration-300"
//             >
//               {item.icon}
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Machine Learning / AI */}
//       <div className="mb-16">
//         <h3 className="text-3xl font-semibold text-white mb-8">Machine Learning / AI</h3>
//         <motion.div 
//           whileInView={{ opacity: 1, y: 0 }} 
//           initial={{ opacity: 0, y: 50 }} 
//           transition={{ duration: 1 }} 
//           className="flex flex-wrap justify-center gap-10">

//           {[ 
//             { icon: <SiPytorch className="text-5xl text-orange-400" /> }
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ y: -10 }}
//               animate={{ y: [10, -10] }}
//               transition={{ duration: 1.5, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
//               className="p-6 rounded-full shadow-lg bg-gradient-to-br from-purple-700 via-blue-700 to-pink-700 hover:scale-110 transition-transform duration-300"
//             >
//               {item.icon}
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//     </section>
//   );
// };

// export default TechStack;



'use client';
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiPytorch, SiMysql, SiTypescript, SiDart, SiHtml5, SiCss3, SiTailwindcss } from "react-icons/si";
import { FaNodeJs, FaPython, FaJava, FaCuttlefish } from "react-icons/fa";

const categories = [
  {
    title: "Languages",
    icons: [
      { Icon: FaPython, className: "text-5xl text-yellow-400" },
      { Icon: FaJava, className: "text-5xl text-red-500" },
      { Icon: SiTypescript, className: "text-5xl text-blue-400" },
      { Icon: SiDart, className: "text-5xl text-sky-400" },
      { Icon: SiHtml5, className: "text-5xl text-orange-500" },
      { Icon: SiCss3, className: "text-5xl text-blue-500" }
    ]
  },
  {
    title: "Frontend",
    icons: [
      { Icon: RiReactjsLine, className: "text-5xl text-cyan-400" },
      { Icon: TbBrandNextjs, className: "text-5xl text-white" },
      { Icon: SiTailwindcss, className: "text-5xl text-cyan-300" }
    ]
  },
  {
    title: "Backend",
    icons: [
      { Icon: FaNodeJs, className: "text-5xl text-green-500" },
    ]
  },
  {
    title: "Databases",
    icons: [
      { Icon: SiMongodb, className: "text-5xl text-green-500" },
      { Icon: SiMysql, className: "text-5xl text-blue-400" }
    ]
  },
  {
    title: "AI / ML",
    icons: [
      { Icon: SiPytorch, className: "text-5xl text-orange-400" }
    ]
  }
];

const TechStack = () => {
  return (
    <section id="technologies" className="py-20 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-16 text-accent">Tech Stack</h2>
      {categories.map((cat, idx) => (
        <div key={idx} className="mb-16">
          <h3 className="text-3xl font-semibold text-white mb-10">{cat.title}</h3>
          <motion.div
            className="flex flex-wrap justify-center gap-10"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            {cat.icons.map(({ Icon, className }, i) => (
              <motion.div
                key={i}
                initial={{ y: -10 }}
                animate={{ y: [10, -10] }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                className="p-6 rounded-full shadow-lg bg-gradient-to-br from-purple-700 via-blue-700 to-pink-700 hover:scale-110 transition-transform duration-300"
              >
                <Icon className={className} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default TechStack;
