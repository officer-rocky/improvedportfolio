import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-10 py-5 bg-gradient-to-r from-black to-green-900 text-white shadow-md z-50">
      <h1 className="text-2xl font-bold">MyPortfolio</h1>
      <ul className="flex space-x-8">
        <li><a href="#home" className="hover:text-green-400">Home</a></li>
        <li><a href="#about" className="hover:text-green-400">About</a></li>
        <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
      </ul>
    </nav>
  );
}
