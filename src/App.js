import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const particlesRef = useRef([]);

  // Track mouse movement and spawn particles directly
  useEffect(() => {
    const move = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });

      const greenColor = "#00ff88";
      let newParticles = [];

      // emit ~6 particles per mouse move
      for (let i = 0; i < 6; i++) {
        const angle = Math.random() * 2 * Math.PI; // random direction
        const speed = 1 + Math.random() * 2; // random speed
        newParticles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 50 + Math.random() * 30,
          size: 3 + Math.random() * 4,
          color: greenColor,
        });
      }

      particlesRef.current = [...particlesRef.current, ...newParticles];
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Animate particles with drift
  useEffect(() => {
    const animate = () => {
      particlesRef.current = particlesRef.current
        .map((p) => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          life: p.life - 1,
        }))
        .filter((p) => p.life > 0);

      setParticles([...particlesRef.current]);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="relative bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />

      {/* Bigger glowing cursor */}
      <div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50"
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: "translate(-50%, -50%)",
          backgroundColor: "#00ff88",
          boxShadow:
            "0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 70px #00ff88",
        }}
      ></div>

      {/* Glowing outward particles */}
      {particles.map((p, index) => (
        <div
          key={index}
          className="fixed rounded-full pointer-events-none z-40"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.life / 80,
            transform: "translate(-50%, -50%)",
            mixBlendMode: "screen",
            boxShadow: `0 0 10px ${p.color}, 0 0 20px ${p.color}`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default App;
