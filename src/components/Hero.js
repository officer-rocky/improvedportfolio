// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import profilePic from "../assets/projects/profile.png";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-black text-white px-6 relative overflow-hidden"
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles-hero"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: { events: { onHover: { enable: true, mode: "repulse" }, resize: true } },
          particles: {
            color: { value: "#22c55e" },
            links: { enable: true, color: "#22c55e", opacity: 0.2 },
            move: { enable: true, speed: 1, outModes: "bounce" },
            number: { value: 80, density: { enable: true, area: 800 } },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Profile Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mb-10"
      >
        <img
          src={profilePic}
          alt="Profile"
          className="w-52 h-52 rounded-full object-cover object-top border-4 border-green-400 shadow-lg drop-shadow-[0_0_25px_#22c55e]"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={1}
        className="text-5xl md:text-6xl font-extrabold text-center mb-4 text-green-400 drop-shadow-[0_0_20px_#22c55e]"
      >
        Hi, I'm <span className="text-green-400">Amisha</span> 👋
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={2}
        className="mt-4 text-lg md:text-xl max-w-2xl text-center text-gray-300 leading-relaxed"
      >
        I'm a <span className="text-green-400">cybersecurity</span> and{" "}
        <span className="text-green-400">tech enthusiast</span>, curious to
        explore new ideas and always open to learning. Though new to the field,
        I'm a quick learner with a{" "}
        <span className="text-green-400">strong passion</span> for{" "}
        <span className="text-green-400">growing my skills</span> and{" "}
        <span className="text-green-400">securing technology</span>.
      </motion.p>

      {/* Button */}
      <motion.a
        href="#projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={3}
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px #22c55e" }}
        className="mt-10 px-6 py-3 rounded-full bg-green-500 text-black font-bold shadow-lg hover:bg-green-400 transition"
      >
        View My Work →
      </motion.a>
    </section>
  );
}
