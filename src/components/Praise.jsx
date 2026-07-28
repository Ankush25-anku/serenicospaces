"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Their minimalist approach brought a fresh, calming vibe to our office space. The process was smooth and collaborative.",

    name: "Ravi Das",

    location: "Guwahati",

    image: "/images/testimonials/image2.avif",
  },

  {
    quote:
      "Serenico Spaces transformed our home with such elegance and attention to detail. Every corner feels thoughtfully designed.",

    name: "Amulya Roy",

    location: "Guwahati",

    image: "/images/testimonials/image1.avif",
  },
];

export default function Praise() {
  return (
    <section className="praise">
      <motion.div
        className="praise-header"
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
        <h2>Praise</h2>

        <p>What our clients say about Serenico Spaces</p>
      </motion.div>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <motion.div
            className="testimonial-card"
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
              duration: 0.8,
              delay: index * 0.2,
            }}
          >
            <div className="stars">★★★★★</div>

            <p className="testimonial-text">{item.quote}</p>

            <div className="client">
              <Image src={item.image} alt={item.name} width={60} height={60} />

              <div>
                <h3>{item.name}</h3>

                <span>{item.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
