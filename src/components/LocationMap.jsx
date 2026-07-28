"use client";

import { motion } from "framer-motion";

export default function LocationMap() {
  const mapUrl =
    "https://www.google.com/maps?ll=26.108294,91.751213&z=13&t=m&hl=en-IN&gl=US&mapclient=embed&q=26°06%2729.9%22N+91°45%2704.4%22E+26.108294,+91.751213@26.108294,91.7512125";

  return (
    <section className="lux-map-section">
      <motion.div
        className="lux-map-container"
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
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="lux-map-link"
        >
          <iframe
            src="https://www.google.com/maps?q=26.108294,91.751213&z=13&output=embed"
            width="100%"
            height="380"
            style={{
              border: 0,
            }}
            loading="lazy"
            allowFullScreen
          />
        </a>
      </motion.div>
    </section>
  );
}
