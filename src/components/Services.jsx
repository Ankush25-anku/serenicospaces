"use client";

import {
  FaCouch,
  FaDoorClosed,
  FaTv,
  FaChair,
  FaLightbulb,
  FaChild,
  FaOm,
  FaBath,
  FaPaintRoller,
  FaScroll,
  FaTools,
  FaHammer,
  FaWrench,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    name: "Space-saver furniture",
    icon: FaCouch,
  },

  {
    name: "Wardrobes",
    icon: FaDoorClosed,
  },

  {
    name: "TV Units",
    icon: FaTv,
  },

  {
    name: "Study Table",
    icon: FaChair,
  },

  {
    name: "False Ceilings",
    icon: FaLightbulb,
  },

  {
    name: "Kids Bedroom",
    icon: FaChild,
  },

  {
    name: "Mandirs",
    icon: FaOm,
  },

  {
    name: "Bathrooms",
    icon: FaBath,
  },

  {
    name: "Paint",
    icon: FaPaintRoller,
  },

  {
    name: "Wallpaper",
    icon: FaScroll,
  },

  {
    name: "Renovation",
    icon: FaHammer,
  },

  {
    name: "Tiles",
    icon: FaTools,
  },

  {
    name: "Plumbing",
    icon: FaWrench,
  },
];

export default function Services() {
  return (
    <section className="services">
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
        Our Services
      </motion.h2>

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              className="service-card"
              key={index}
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
                delay: index * 0.05,
              }}
            >
              <Icon className="service-icon" />

              <p>{service.name}</p>
            </motion.div>
          );
        })}
      </div>

      <button className="service-btn">Call an Expert</button>
    </section>
  );
}
