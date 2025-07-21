import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaDatabase,
  FaPython,
  FaCloud,
  FaCode,
  FaServer,
  FaJs,
} from "react-icons/fa";

const groupedSkills = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava />, level: "Advanced", percentage: 90, highlight: true },
      { name: "C/C++", icon: <FaCode />, level: "Intermediate", percentage: 75 },
      { name: "Python", icon: <FaPython />, level: "Intermediate", percentage: 70 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML/CSS", icon: <FaCode />, level: "Advanced", percentage: 85 },
      { name: "React", icon: <FaReact />, level: "Advanced", percentage: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaServer />, level: "Proficient", percentage: 80 },
      { name: "JavaScript", icon: <FaJs />, level: "Advanced", percentage: 85 },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "SQL", icon: <FaDatabase />, level: "Advanced", percentage: 85, highlight: true },
      { name: "Cloud", icon: <FaCloud />, level: "Intermediate", percentage: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-center pt-16 pb-10 font-space">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h1>

      <div className="w-24 h-1 mx-auto bg-pink-400 dark:bg-pink-500 rounded-full mb-6 animate-pulse" />

      <motion.p
        className="text-gray-600 dark:text-gray-300 text-lg mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        What I bring to the table
      </motion.p>

      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {groupedSkills.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-purple-500 mb-6 text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {group.category}
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`group p-6 rounded-xl shadow-md relative transform transition-all duration-300
                    ${
                      skill.highlight
                        ? "border-2 border-yellow-400 bg-yellow-100 dark:bg-yellow-900 shadow-yellow-300 dark:shadow-yellow-900"
                        : "bg-gradient-to-br from-purple-100 to-purple-200 dark:from-gray-800 dark:to-gray-900"
                    } hover:shadow-2xl`}
                >
                  <div className="flex items-center justify-center gap-2 text-purple-700 dark:text-purple-300 mb-3 text-2xl">
                    {skill.icon} <span>{skill.name}</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    {skill.level}
                  </p>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                    <motion.div
                      className={`h-3 rounded-full transition-all duration-700 ease-in-out ${
                        skill.highlight ? "bg-yellow-500" : "bg-purple-600"
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                  <p className="text-xs text-right mt-1 text-gray-600 dark:text-gray-400">
                    {skill.percentage}%
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
