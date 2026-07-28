"use client";

import { motion } from "framer-motion";

export default function Legacy() {
  return (
    <section className="legacy">
      <motion.h2
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        A Legacy of Excellence
      </motion.h2>

      <motion.div
        className="legacy-content"
        initial={{
          opacity: 0,
          y: 30,
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
        <p>
          At Serenico Spaces, our interior design projects in Guwahati reflect a
          seamless blend of modern luxury, functionality, and timeless
          aesthetics. Each space is thoughtfully designed to suit the lifestyle
          and vision of our clients, whether it’s a sophisticated residence, a
          functional commercial space, or a bespoke interior solution.
        </p>

        <p>
          Our portfolio showcases a diverse range of interior design styles,
          from minimalist and contemporary to warm, elegant spaces defined by
          clean lines, premium materials, and refined detailing. We focus on
          creating environments that are not only visually striking but also
          highly practical and comfortable.
        </p>

        <p>
          Explore our completed interior design projects to experience the
          Serenico approach—where design meets purpose, and every detail is
          crafted to elevate everyday living.
        </p>
      </motion.div>
    </section>
  );
}
