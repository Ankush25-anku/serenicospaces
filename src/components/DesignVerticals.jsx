"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const verticals = [
  {
    title: "Private Sanctuaries",
    category: "Luxury Residential Interiors",
    description:
      "We craft emotional, comfort-driven environments that serve as a reflection of your unique identity. From opulent master suites and designer Mandirs to bespoke living areas featuring high-end wall paneling, our residential works are curated for aesthetic timelessness.",
    image: "/images/verticals/resident.avif",
  },

  {
    title: "Strategic Business Environments",
    category: "Commercial & Retail Mastery",
    description:
      "We deliver ROI-driven design solutions focused on business success. Our expertise in high-impact retail storefronts, luxury showrooms, and ergonomic corporate hubs ensures your physical space becomes a powerful extension of your brand identity.",
    image: "/images/verticals/reception.avif",
  },

  {
    title: "Technical Engineering",
    category: "Precision Modular Solutions",
    description:
      'Where the "Science of Space" meets modern elegance. We provide engineering-grade modular kitchens with seamless chimney integration, alongside modular wardrobes and walk-in closets designed for maximum functional efficiency and durability.',
    image: "/images/verticals/kitchen.avif",
  },

  {
    title: "Architectural Execution",
    category: "Turnkey Civil & Finishing",
    description:
      "Our strength lies in end-to-end execution. We manage the complexity of structural civil works, designer false ceilings, and modern bathroom renovations. Our expert finishing and professional paint work ensure a flawless transition from blueprint to reality.",
    image: "/images/verticals/false-ceiling.avif",
  },


  // 5th CENTERED SECTION

  {
    title: "Architectural Insight & Strategy",
    category: "Expert Consultation & Visualization",
    description:
      "Every masterpiece begins with a strategy. We provide expert space planning, material mapping, and high-definition 3D visualizations to bridge the gap between your aspirations and technical reality. Our consultative approach ensures that your project is optimized for ergonomics, flow, and budget efficiency before execution begins.",
    image: "/images/verticals/image02.avif",
    featured: true,
  },
];
export default function DesignVerticals() {
  return (
    <section className="design-verticals">
      <motion.div
        className="vertical-header"
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
        <h2>Specialized Design Verticals</h2>

        <p>
          Comprehensive expertise tailored for those who demand uncompromising
          quality.
        </p>
      </motion.div>

<div className="vertical-grid">

{verticals.map((item,index)=>(

<motion.div
key={index}
className={`vertical-card ${
item.featured ? "featured-card" : ""
}`}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:0.8,
delay:index*0.15
}}

>


<div className="vertical-image">

<Image
src={item.image}
alt={item.title}
width={700}
height={450}
/>

</div>


<h3>{item.title}</h3>

<h4>{item.category}</h4>

<p className="vertical-description">
{item.description}
</p>


</motion.div>

))}

      </div>


      {/* CALL EXPERT BUTTON */}

      <motion.button
        className="vertical-expert-btn"

        initial={{
          opacity:0,
          y:30
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:0.8
        }}

      >
        Call an Expert
      </motion.button>


    </section>
  );
}
