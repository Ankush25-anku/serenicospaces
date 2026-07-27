"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturedInterior() {
  return (
    <section className="featured-interior">
      <motion.div
        className="featured-image"
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
      >
        <Image
          src="/images/featured-living-room.webp"
          alt="Luxury Interior Living Room"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>
    </section>
  );
}
