"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Strategic Consultation",

    description:
      "Beyond simple advice, we offer architectural insights and advanced 3D visualizations. We bridge the gap between your aspirations and technical execution, ensuring every inch of your space is optimized for both luxury and utility.",
  },

  {
    title: "Luxury Residential Design",

    description:
      "Bespoke sanctuaries for the modern family. We specialize in high-end modular kitchens, designer wardrobes, and full-scale home transformations. Using premium materials and civil expertise, we create homes that are as durable as they are beautiful.",
  },

  {
    title: "Commercial & Retail Mastery",

    description:
      "Strategic design for businesses that want to stand out. We specialize in high-impact storefronts, retail environments, and professional spaces that create lasting impressions.",
  },
];

export default function Expertise() {
  return (
    <section className="expertise">
      <motion.div
        className="expertise-header"
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
      >
        <h2>Our Expertise</h2>

        <p>
          Delivering national-standard interior solutions tailored for the heart
          of Assam.
        </p>
      </motion.div>

      <div className="expertise-grid">
        <motion.div
          className="expertise-image"
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
        >
          <Image
            src="/images/expertise-interior.webp"
            alt="Luxury Interior"
            fill
          />
        </motion.div>

        <div className="expertise-content">
          {services.map((service, index) => (
            <motion.div
              className="service-item"
              key={index}
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
                delay: index * 0.15,
              }}
            >
              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
