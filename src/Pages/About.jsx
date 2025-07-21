import React, { useEffect, useState } from "react";
import ParticlesBackground from "../Components/ParticlesBackground";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(true), []);

  return (
    <div
      className={`font-space min-h-screen flex items-center justify-center transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      } bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden`}
    >

      <div className="max-w-4xl w-full px-6 py-10 text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 dark:text-pink-400 mb-6">
          About Me
        </h1>

        <div className="w-24 h-1 mx-auto bg-pink-400 dark:bg-pink-500 rounded-full mb-6 animate-pulse" />

        {/* About Me Summary */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          I'm <span className="text-pink-500 font-semibold">Athish M</span>, a software developer passionate about crafting efficient, scalable, and user-focused web applications. Skilled in <span className="text-purple-400">JavaScript, React, Node.js</span>, and <span className="text-blue-400">Java</span>, I enjoy solving real-world problems through clean, maintainable code. I’m always eager to learn, collaborate, and grow in dynamic tech teams. My goal is to build impactful software that blends performance with great user experience.
        </p>

        {/* Professional Summary */}
        <div className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-6 text-left">
          <h2 className="text-2xl font-bold text-purple-500 mb-2">Professional Summary</h2>
          <p>
            A proactive and detail-driven software developer with strong technical foundations and practical expertise in full-stack development. Adept at delivering real-world web solutions with clean code, modern frameworks, and a focus on performance and user experience.
          </p>
        </div>

        {/* Career Aspirations */}
        <div className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-10 text-left">
          <h2 className="text-2xl font-bold text-purple-500 mb-2">Career Aspirations</h2>
          <p>
            I aim to contribute to impactful software projects in collaborative environments, sharpen my backend and system design skills, and grow into a product-focused engineer who drives innovation and team success.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Frontend", content: "React, Tailwind, Vite" },
            { title: "Backend", content: "Node.js, Express, Java" },
            { title: "Database", content: "MongoDB, MySQL, APIs" },
          ].map((card, index) => (
            <div
              key={index}
              className="p-6 border border-pink-500 rounded-lg hover:shadow-lg transition hover:scale-105 bg-white/10 backdrop-blur-md dark:border-pink-400"
            >
              <h3 className="text-xl font-bold text-pink-500 dark:text-pink-300 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-800 dark:text-gray-200">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
