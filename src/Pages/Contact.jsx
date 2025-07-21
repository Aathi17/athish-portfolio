import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt, FaUser, FaCommentDots } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const form = useRef();

  useEffect(() => setVisible(true), []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o2da9zh",       // Your Service ID
        "template_j4nks5r",      // Your Template ID
        form.current,
        "WjVxYz-Z4C70YTI-T"      // Your Public Key
      )
      .then(
        (result) => {
          setSuccessMsg("Message sent successfully!");
          setErrorMsg("");
          form.current.reset();
        },
        (error) => {
          setErrorMsg("Failed to send message. Please try again.");
          setSuccessMsg("");
        }
      );
  };

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col justify-between px-4 pt-24 pb-8 transition-opacity duration-1000 font-space ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 dark:text-pink-400 mb-4">
          Contact Me
        </h1>

        <div className="w-24 h-1 mx-auto bg-pink-400 dark:bg-pink-500 rounded-full mb-6 animate-pulse" />

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
          I'm open to collaborations, freelance work, or just a friendly chat!
        </p>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg mb-12">
          <a
            href="mailto:aathimuthukumar6513@gmail.com"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
          >
            <FaEnvelope className="text-pink-400" />
            E-Mail
          </a>

          <a
            href="https://github.com/Aathi17"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
          >
            <FaGithub className="text-pink-400" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/athish-muthukumar-1b2a20259/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
          >
            <FaLinkedin className="text-pink-400" />
            LinkedIn
          </a>

          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <FaPhoneAlt className="text-pink-400" />
            +91 6382406887
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg max-w-xl mx-auto text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-pink-500 flex items-center gap-2">
            <FaCommentDots /> Send a Message
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block mb-1">Your Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1">Your Email</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1">Your Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300"
            >
              Send
            </button>
          </form>

          {successMsg && (
            <p className="mt-4 text-green-500 font-medium">{successMsg}</p>
          )}
          {errorMsg && (
            <p className="mt-4 text-red-500 font-medium">{errorMsg}</p>
          )}
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Athish Muthukumar. All rights reserved.
      </footer>
    </div>
  );
}
