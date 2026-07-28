"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT CONTENT */}

        <motion.div
          className="hero-content"
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <h1>Serenico Spaces</h1>

          <p>Designing Your Dream Living</p>
        </motion.div>

        {/* RIGHT IMAGE CARD */}

        <motion.div
          className="hero-card"
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <div className="hero-image">
            <img src="/images/bedroom-hero.jpg" alt="Luxury Interior" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
