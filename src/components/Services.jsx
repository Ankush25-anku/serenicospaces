"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    name: "Space-saver furniture",
    image: "/images/services/kids_bedroom.webp",
  },

  {
    name: "Wardrobes",
    image: "/images/services/kids_bedroom.webp",
  },

  {
    name: "TV Units",
    image: "/images/services/kids_bedroom.webp",
  },

  {
    name: "Study Table",
    image: "/images/services/kids_bedroom.webp",
  },

  {
    name: "False Ceilings",
    image: "/images/services/false_ceilings.webp",
  },

  {
    name: "Kids Bedroom",
    image: "/images/services/kids_bedroom.webp",
  },

  {
    name: "Mandirs",
    image: "/images/services/mandirs_serenico.webp",
  },

  {
    name: "Bathrooms",
    image: "/images/services/bathrooms.webp",
  },

  {
    name: "Paint",
    image: "/images/services/paint_serenico.webp",
  },

  {
    name: "Wallpaper",
    image: "/images/services/wallpapers.webp",
  },

  {
    name: "Renovation",
    image: "/images/services/renovation.webp",
  },

  {
    name: "Tiles",
    image: "/images/services/tiles.webp",
  },

  {
    name: "Plumbing",
    image: "/images/services/plumbing.webp",
  },
];

export default function Services() {
  return (
    <section className="services">
      <motion.h2>Our Services</motion.h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
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
              delay: index * 0.05,
            }}
          >
            <div className="service-image">
              <Image
                src={service.image}
                alt={service.name}
                width={70}
                height={70}
              />
            </div>

            <p>{service.name}</p>
          </motion.div>
        ))}
      </div>

      <button className="service-btn">Call an Expert</button>
    </section>
  );
}
