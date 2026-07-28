"use client";

import { motion } from "framer-motion";

export default function LuxuryShowcase() {
  return (
    <section className="luxury-showcase">
      <motion.div
        className="showcase-image"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.9,
        }}
      >
        <img
          src="/images/showcase/bedroom-showcase.jpg"
          alt="Luxury Interior Showcase"
        />
      </motion.div>
    </section>
  );
}
