import React from "react";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaGamepad,
  FaLeaf,
  FaHardHat,
  FaCommentDots,
  FaGithub,
} from "react-icons/fa";

const projectData = [
  {
    title: "Energy on Your Feet [2025]",
    image: "Foot-Step-Power-Generation-with-Steps-_counting-using-Arduino.jpg",
    description: (
      <>
        A footstep power system converting kinetic energy into usable electricity, featuring{" "}
        <span className="text-blue-300">RFID-based authentication</span> for user access and energy tracking.
        <br />
        <a
          href="https://github.com/Aathi17/Energy_At_Your_Feet"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-yellow-400 hover:text-yellow-300 text-2xl"
          title="View on GitHub"
        >
          <FaGithub />
        </a>
      </>
    ),
    icon: <FaBolt className="text-yellow-400 text-3xl mb-2" />,
  },
  {
    title: "Snake Byte – Python Edition [2024]",
    image: "91wmSX7KqFL.jpg",
    description: (
      <>
        A retro-style Snake game built with <span className="text-blue-300">Python</span> and <span className="text-blue-300">Pygame</span>, featuring real-time movement and score tracking.
        <br />
        <a
          href="https://github.com/Aathi17/Snake-Game"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-red-400 hover:text-red-300 text-2xl"
          title="View on GitHub"
        >
          <FaGithub />
        </a>
      </>
    ),
    icon: <FaGamepad className="text-red-400 text-3xl mb-2" />,
  },
  {
    title: "Smart Agro Tech [2023]",
    image: "d-8_project-_bss.jpg",
    description: (
      <>
        Sensor-based crop recommendation system with eco-friendly pest deterrence using Azadirachtin.
        Built for precision agriculture to improve yield and sustainability.
        <br />
        <a
          href="https://github.com/Aathi17/Smart-AgroTech"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-green-400 hover:text-green-300 text-2xl"
          title="View on GitHub"
        >
          <FaGithub />
        </a>
      </>
    ),
    icon: <FaLeaf className="text-green-400 text-3xl mb-2" />,
  },
  {
    title: "Smart Mining Helmet [2023]",
    image: "maxresdefault.jpg",
    description: (
      <>
        Designed a smart helmet to monitor miners’ health and detect hazardous conditions in mining environments.
        Integrated sensors and MERN-based data visualization for real-time safety monitoring.
        <br />
        <a
          href="https://github.com/Aathi17/Smart-Mining-Helmet"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-orange-400 hover:text-orange-300 text-2xl"
          title="View on GitHub"
        >
          <FaGithub />
        </a>
      </>
    ),
    icon: <FaHardHat className="text-orange-400 text-3xl mb-2" />,
  },
  {
    title: "PingPong – RealTime Chat App [2024]",
    image: "build-a-realtime-chat-app-from-scratch--1-.png",
    description: (
      <>
        Developed a full-stack chat application enabling real-time, room-based messaging with secure user authentication.
        Built using the <span className="text-blue-400">MERN stack</span> with MongoDB persistence and responsive design.
        <br />
        <a
          href="https://github.com/Aathi17/ChatApplication"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 textWhite-400 hover:text-pink-300 text-2xl"
          title="View on GitHub"
        >
          <FaGithub />
        </a>
      </>
    ),
    icon: <FaCommentDots className="text-White-400 text-3xl mb-2" />,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-4 font-space">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      <div className="w-24 h-1 mx-auto bg-pink-400 dark:bg-pink-500 rounded-full mb-10 animate-pulse" />

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-purple-100 dark:bg-gray-800 border border-transparent hover:border-pink-500 rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300 overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-5 flex-grow flex flex-col justify-between">
              <div className="flex flex-col items-center mb-2">
                {project.icon}
                <h2 className="text-lg font-bold text-pink-500 dark:text-pink-400 mt-2 text-center">
                  {project.title}
                </h2>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
