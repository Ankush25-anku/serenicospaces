// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="hero">
//       <div className="hero-container">
//         {/* LEFT CONTENT */}

//         <motion.div
//           className="hero-content"
//           initial={{
//             opacity: 0,
//             x: -50,
//           }}
//           animate={{
//             opacity: 1,
//             x: 0,
//           }}
//           transition={{
//             duration: 1,
//           }}
//         >
//           <h1>Serenico Spaces</h1>

//           <p>Designing Your Dream Living</p>
//         </motion.div>

//         {/* RIGHT IMAGE */}

//         <motion.div
//           className="hero-image"
//           initial={{
//             opacity: 0,
//             x: 60,
//           }}
//           animate={{
//             opacity: 1,
//             x: 0,
//           }}
//           transition={{
//             duration: 1,
//           }}
//         >
//           <Image
//             src="/images/bedroom-hero.jpg"
//             alt="Luxury Interior"
//             width={900}
//             height={700}
//             priority
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        {/* LEFT CONTENT */}

        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero__title">Serenico Spaces</h1>

          <p className="hero__tagline">Designing Your Dream Living</p>
        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          className="hero__media"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            className="hero__image"
            src="/images/bedroom-hero.jpg"
            alt="Serenico Spaces luxury bedroom interior"
          />
        </motion.div>
      </div>

      <div className="hero__fade"></div>
    </section>
  );
}
