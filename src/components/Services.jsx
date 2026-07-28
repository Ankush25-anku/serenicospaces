"use client";

import { motion } from "framer-motion";

import {
  Sofa,
  DoorClosed,
  Tv,
  Armchair,
  Lightbulb,
  Baby,
  Landmark,
  Bath,
  PaintRoller,
  ScrollText,
  Hammer,
  Layers,
  Wrench,
} from "lucide-react";

const services = [
  {
    name: "Space-saver furniture",
    icon: Sofa,
  },

  {
    name: "Wardrobes",
    icon: DoorClosed,
  },

  {
    name: "TV Units",
    icon: Tv,
  },

  {
    name: "Study Table",
    icon: Armchair,
  },

  {
    name: "False Ceilings",
    icon: Lightbulb,
  },

  {
    name: "Kids Bedroom",
    icon: Baby,
  },

  {
    name: "Mandirs",
    icon: Landmark,
  },

  {
    name: "Bathrooms",
    icon: Bath,
  },

  {
    name: "Paint",
    icon: PaintRoller,
  },

  {
    name: "Wallpaper",
    icon: ScrollText,
  },

  {
    name: "Renovation",
    icon: Hammer,
  },

  {
    name: "Tiles",
    icon: Layers,
  },

  {
    name: "Plumbing",
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section className="services">
      <motion.h2>Our Services</motion.h2>

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <Icon />
              </div>

              <p>{service.name}</p>
            </div>
          );
        })}
      </div>

      <button className="service-btn">Call an Expert</button>
    </section>
  );
}
