"use client";

import { motion } from "framer-motion";

export default function AboutLuxury() {
  return (
    <section className="about-luxury">
      <div className="about-container">
        {/* LEFT TITLE */}

        <motion.div
          className="about-title"
          initial={{
            opacity: 0,
            x: -50,
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
          <h2>
            Crafting Timeless
            <br />
            Interiors
          </h2>
        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          className="about-content"
          initial={{
            opacity: 0,
            x: 50,
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
          <p>
            <strong>Serenico Spaces</strong> was founded on a singular premise:
            that interior design should be an seamless blend of high-concept
            aesthetics and precision engineering. We do not merely "decorate"
            spaces; we curate environments that serve as a testament to the
            lifestyle and ambitions of our clientele.
          </p>

          <p>
            Our approach is rooted in <strong>Functional Luxury</strong>. We
            believe that true sophistication lies in the details that often go
            unseen—the structural integrity of civil works, the precision of
            modular systems, and the flawless execution of architectural
            transitions. By merging global design trends with meticulous
            craftsmanship, we provide a turnkey experience that transforms a
            vision into a legacy.
          </p>

          <p>
            At Serenico, we don't just build interiors. We build the backdrop
            for your life's most significant moments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
