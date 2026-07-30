"use client";

import { motion } from "framer-motion";

export default function LuxuryGallery({ images = [], title }) {
  return (
    <section className="lux-gallery-section">
      <motion.h2
        className="lux-gallery-title"
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
        {title}
      </motion.h2>

      <div className="lux-gallery-grid">
        {images.slice(0, 12).map((image, index) => (
          <motion.div
            key={index}
            className="lux-gallery-item"
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
              duration: 0.5,
              delay: index * 0.05,
            }}
          >
            <img src={image} alt={title} />
          </motion.div>
        ))}
      </div>

      {images.length > 12 && (
        <div className="lux-gallery-last">
          <img src={images[12]} alt={title} />
        </div>
      )}
    </section>
  );
}
