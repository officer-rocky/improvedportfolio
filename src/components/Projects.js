// src/components/Projects.js
import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

// Import custom images
import blogAppImg from "../assets/projects/blog_app_image.png";
import eventRegImg from "../assets/projects/event_registration_image.png";
import portfolioImg from "../assets/projects/portfolio_image.png";
import autoInvestImg from "../assets/projects/autoinvest_ai_image.png";
import quizAppImg from "../assets/projects/QuizApp_frontend_task.png";

// Animations
const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const flipFade = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: (i = 1) => ({
    opacity: 1,
    rotateY: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Projects() {
  const [repos, setRepos] = useState([]);

  const projectImages = {
    blog_app: blogAppImg,
    event_registration: eventRegImg,
    "portfolio-website": portfolioImg,
    autoinvestai: autoInvestImg,
    "quizapp-frontendtask": quizAppImg,
  };

  const normalizeName = (name) => name.toLowerCase().replace(/\s+/g, "_");

  useEffect(() => {
    fetch(
      "https://api.github.com/users/officer-rocky/repos?sort=updated&per_page=100"
    )
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo) => !repo.fork);
        filtered.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(filtered);
      })
      .catch((err) => console.error("Error fetching repos:", err));
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white px-10 py-20 relative overflow-hidden"
    >
      {/* Particles Background for Glow */}
      <Particles
        id="tsparticles-projects"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: { events: { onHover: { enable: true, mode: "repulse" }, resize: true } },
          particles: {
            color: { value: "#22c55e" },
            links: { enable: true, color: "#22c55e", opacity: 0.2 },
            move: { enable: true, speed: 1, outModes: "bounce" },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Heading with glow */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInLeft}
        className="text-4xl font-bold mb-10 text-green-400 drop-shadow-[0_0_15px_#22c55e]"
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerFast}
        className="grid md:grid-cols-3 gap-8"
      >
        {repos.map((repo, i) => {
          const key = normalizeName(repo.name);
          const projectImg = projectImages[key] || null;

          return (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              variants={flipFade}
              custom={i}
              whileHover={{
                rotateY: 10,
                scale: 1.05,
                boxShadow: "0 0 25px #22c55e",
              }}
              className="bg-black rounded-xl shadow-lg border border-green-400/30 overflow-hidden group"
            >
              {/* Image */}
              <div className="h-40 bg-gray-800 flex items-center justify-center perspective-1000">
                {projectImg ? (
                  <img
                    src={projectImg}
                    alt={repo.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition"
                  />
                ) : (
                  <FaCode size={50} className="text-green-400" />
                )}
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white drop-shadow-[0_0_10px_#22c55e]">
                  {repo.name}
                </h3>
                <p className="text-sm text-gray-400 mt-2">
                  {repo.description || "Click to view details on GitHub 🚀"}
                </p>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
}
