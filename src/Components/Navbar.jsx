import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar({ toggleTheme, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Skills", path: "/skills", icon: <FaCode /> },
    { name: "Projects", path: "/projects", icon: <FaFolderOpen /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="font-space fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 dark:bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-400">MyInfo</h1>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg items-center">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-2 px-3 py-1 rounded-md transition-all duration-300 hover:text-purple-400 ${
                  location.pathname === item.path
                    ? "text-purple-300 font-semibold"
                    : ""
                }`}
              >
                {item.icon} {item.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="text-blue-300 hover:text-blue-400 underline"
            >
             
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 bg-purple-600 rounded-full hover:bg-purple-800 transition text-white"
              title="Toggle Theme"
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-4 text-lg">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 px-2 py-1 rounded-md transition-all duration-300 hover:text-purple-400 ${
                  location.pathname === item.path
                    ? "text-purple-300 font-semibold"
                    : ""
                }`}
              >
                {item.icon} {item.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="text-blue-300 hover:text-blue-400 underline"
            >
           
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className="p-2 bg-purple-600 rounded-full hover:bg-purple-800 transition text-white"
              title="Toggle Theme"
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
