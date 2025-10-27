// src/components/Footer.js
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/officer-rocky" target="_blank" rel="noreferrer">
          <FaGithub size={24} className="hover:text-green-400 transition" />
        </a>
        <a href="https://linkedin.com/in/amisha-thakur-01285a324" target="_blank" rel="noreferrer">
          <FaLinkedin size={24} className="hover:text-green-400 transition" />
        </a>
        
      </div>
      <p>© {new Date().getFullYear()} Amisha Thakur. All rights reserved.</p>
    </footer>
  );
}
