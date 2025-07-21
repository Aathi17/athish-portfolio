import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactTyped } from "react-typed";
import ParticlesBackground from "../Components/ParticlesBackground";


export default function Home() {
  const [phrases, setPhrases] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const hour = new Date().getHours();
    const isMobile = window.innerWidth < 768;

    let timePhrases = [];

    if (hour < 12) {
      timePhrases = ["Good Morning!", "Rise, Code, Conquer", "Let’s build something amazing today!"];
    } else if (hour < 18) {
      timePhrases = ["Good Afternoon!", "Code. Create. Inspire.", "Building real-world solutions"];
    } else {
      timePhrases = ["Good Evening!", "Night Owl Coding", "Still dreaming in code..."];
    }

    const basePhrases = [
      "Full Stack Developer",
      "AI Enthusiast",
      "IoT Innovator",
      "Tech Explorer",
      "Problem Solver",
      "Creative Coder"
    ];

    const mobilePhrases = ["Hey Mobile User!", "Responsive. Reliable. Remarkable.", "Touch. Swipe. Build."];

    const finalPhrases = [...timePhrases, ...(isMobile ? mobilePhrases : []), ...basePhrases];
    setPhrases(finalPhrases);
  }, []);

  const emojis = [
    "🌞", "☕", "💡",
    "💻", "🤖", "📡",
    "🚀", "🧠", "🎨",
    "📱", "🛠️", "👨‍💻"
  ];

  // Keep track of typed phrase index to sync emoji
  const handleStringTyped = (index) => {
    setCurrentIndex(index % emojis.length);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white bg-[#0f2027] pt-20 overflow-hidden">
      <ParticlesBackground />

      <div className="z-10 text-center px-4">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold text-purple-200 font-space"
          initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1 }}
        >
          Blending Code, Creativity, and Curiosity
        </motion.h1>

        <motion.h2
  className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-space mb-2"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 1 }}
>
  I Speak Fluent Java — I'm Athish M
</motion.h2>



        <motion.div
          className="text-lg sm:text-xl mt-4 text-purple-300 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {phrases.length > 0 && (
            <>
              <ReactTyped
                strings={phrases}
                typeSpeed={60}
                backSpeed={40}
                loop
                onStringTyped={handleStringTyped}
              />
              <AnimatePresence mode="wait">
                <motion.span
                  key={emojis[currentIndex]}
                  initial={{ opacity: 0, scale: 0.5, y: -10 }}
                  animate={{ opacity: 1, scale: 1.2, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl sm:text-3xl"
                >
                  {emojis[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </>
          )}
        </motion.div>

        <motion.img
          src="undraw_in-the-zone_07y7 copy.svg"
          alt="developer"
          className="w-[300px] sm:w-[400px] mt-10 mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        />

        <a
  href="ATHISH_SDE.pdf"
  download
  className="relative mt-8 inline-flex items-center gap-3 px-6 py-3 text-white font-semibold rounded-lg border border-purple-500 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 overflow-hidden group"
>
  <span className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-10 rounded-lg transition duration-300 animate-pulse" />
  <span className="z-10 flex items-center gap-2">
    <svg
      className="w-5 h-5 fill-current text-purple-400 group-hover:text-white transition duration-300"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M13 10V3H7v7H4l6 6 6-6h-3zM4 18h12v-2H4v2z" />
    </svg>
    <span className="group-hover:text-purple-300 transition duration-300">Resume</span>
  </span>
</a>
      </div>
    </div>
  );
}
