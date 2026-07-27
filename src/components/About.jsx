"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about">
      <motion.h2
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        Crafting Timeless Interiors
      </motion.h2>

      <div className="about-grid">
        <motion.div
          className="about-column"
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <h3>Our Philosophy : Uncompromising Quality</h3>

          <p>
            At Serenico Spaces, we don’t just design rooms; we create
            environments that feel right. From bespoke civil work to luxury
            homescapes, every project reflects our commitment to high-grade
            materials and precise execution. We thoughtfully integrate
            principles of spatial balance, natural light flow, and directional
            alignment—ensuring your space is not only beautiful but also
            intuitively comfortable. By bridging global trends with local
            craftsmanship, we deliver spaces that work in harmony with your
            lifestyle.
          </p>
        </motion.div>

        <motion.div
          className="about-column"
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <h3>Client Focus : Regional Mastery, National Vision</h3>

          <p>
            We understand the soul of Assam’s homes and businesses. Our approach
            combines functional luxury with mindful planning—considering layout,
            movement, and energy flow to create spaces that feel naturally
            aligned. Whether it’s a high-impact storefront in Guwahati or a
            private sanctuary, we offer turnkey solutions that elevate both
            aesthetics and everyday well-being.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
