// src/components/About.js
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLock, FaMicrophone } from "react-icons/fa";
import Particles from "react-tsparticles";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6 py-20 overflow-hidden"
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
          },
          particles: {
            color: { value: "#22c55e" },
            links: { enable: true, color: "#22c55e", opacity: 0.3 },
            move: { enable: true, speed: 1, outModes: "bounce" },
            number: { value: 90, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Heading with glow effect */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="text-5xl font-extrabold mb-12 text-green-400 drop-shadow-[0_0_15px_#22c55e]"
      >
        About Me
      </motion.h2>

      {/* Animated Text */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed"
      >
        <motion.p variants={fadeInUp}>
          Hey 👋 I’m{" "}
          <span className="text-green-400 font-semibold">Amisha Thakur</span>, 
          a <span className="text-green-400">cybersecurity</span> & 
          <span className="text-green-400"> tech enthusiast</span> who loves 
          exploring how technology works ⚡ and how to secure it 🔒.
        </motion.p>

        <motion.p variants={fadeInUp}>
          I started my journey with <span className="text-green-400">HTML</span>,{" "}
          <span className="text-green-400">CSS</span>, and{" "}
          <span className="text-green-400">JavaScript</span>, then moved into{" "}
          <span className="text-green-400">Python</span>,{" "}
          <span className="text-green-400">C</span>, and{" "}
          <span className="text-green-400">SQL</span>. 
          Currently, I’m diving deeper into cybersecurity fundamentals and 
          experimenting with AI tools 🤖 to expand my perspective in tech.
        </motion.p>

        {/* Skills - Animated Cards */}
<motion.div
  variants={staggerContainer}
  className="grid sm:grid-cols-3 gap-8 mt-10"
>
  {[ 
    { icon: <FaMicrophone />, title: "Public Speaking", desc: "Clear & confident in debates and discussions 🎤" },
    { icon: <FaCode />, title: "Web Dev", desc: "Building interactive websites with HTML, CSS, JS 💻" },
    { icon: <FaLock />, title: "Cybersecurity", desc: "Exploring ethical hacking & system protection 🔐" }
  ].map((skill, i) => (
    <motion.div
      key={i}
      variants={fadeInUp}
      custom={i}
      whileHover={{ scale: 1.08, boxShadow: "0 0 25px #22c55e" }}
      className="bg-gray-900/50 p-6 rounded-2xl border border-green-400 shadow-lg text-center"
    >
      {/* ✅ Centered Icon */}
      <div className="flex justify-center mb-3">
        <div className="text-green-400 text-4xl">{skill.icon}</div>
      </div>

      <h4 className="text-green-400 font-semibold">{skill.title}</h4>
      <p className="text-sm text-gray-400 mt-2">{skill.desc}</p>
    </motion.div>
  ))}
</motion.div>

      </motion.div>
    </section>
  );
}
