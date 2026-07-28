"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Luxury Private Sanctuaries",
    description:
      "Bespoke bedroom designs that merge intimate comfort with modern architectural elegance.",
    image: "/images/projects/bedroom.avif",
    reverse: false,
    scroll: false,
  },

  {
    title: "Luxury Modular Kitchens",
    description:
      "Where ergonomic engineering meets premium finishes for a world-class culinary experience.",
    image: "/images/projects/kitchen.avif",
    reverse: true,
    scroll: true,
  },

  {
    title: "Strategic Business & Retail Spaces",
    description:
      "High-impact retail storefronts and sophisticated corporate hubs designed to maximize brand prestige, customer engagement, and organizational productivity.",
    image: "/images/projects/kitchen.avif",
    reverse: false,
    scroll: false,
  },

  {
    title: "Sacred Spaces",
    description:
      "Designed with attention to alignment, light, and flow, our sacred spaces create an atmosphere of calm, clarity, and quiet devotion.",
    image: "/images/projects/sacred.avif",
    reverse: true,
    scroll: true,
  },
];
export default function SignatureSpaces() {
  return (
    <section className="signature-spaces">
      {projects.map((project, index) => (
        <div
          className={`signature-row ${project.reverse ? "reverse" : ""}`}
          key={index}
        >
          {/* CONTENT */}

          <motion.div
            className="signature-content"
            initial={{
              opacity: 0,
              x: project.reverse ? 80 : -80,
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
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <a>VIEW</a>
          </motion.div>

          {/* IMAGE */}

          <motion.div
            className="signature-image"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
          >
            <motion.div
              animate={
                project.scroll
                  ? {
                      y: [0, -25, 0],
                    }
                  : {}
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={650}
                height={450}
              />
            </motion.div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
