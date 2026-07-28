"use client";

import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <section className="lux-location-section">
      <motion.div
        className="lux-location-container"
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
        <h2>Our Location</h2>

        <p className="lux-location-description">
          Serenico Spaces is nestled in the heart of Guwahati, blending
          <br />
          elegance with the city’s vibrant charm.
        </p>

        <div className="lux-location-details">
          <div className="lux-location-item">
            <h3>Head Office</h3>

            <p>
              Lokhra Gorbhanga Road, Opposite Adarsh Jatiya Vidyalaya,
              <br />
              Guwahati, Assam, Pincode - 781040
            </p>
          </div>

          <div className="lux-location-item">
            <h3>Phone</h3>

            <a href="tel:+918130279245">+918130279245</a>
          </div>

          <div className="lux-location-item">
            <h3>Mail</h3>

            <a href="mailto:contact@serenicospaces.com">
              contact@serenicospaces.com
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
