"use client";

import { motion } from "framer-motion";

const posts = [
  {
    type: "image",
    src: "/images/instagram/post1.jpg",
  },

  {
    type: "video",
    src: "/images/instagram/post2.mp4",
  },

  {
    type: "image",
    src: "/images/instagram/post1.jpg",
  },

  {
    type: "image",
    src: "/images/instagram/post1.jpg",
  },

  {
    type: "image",
    src: "/images/instagram/post1.jpg",
  },

  {
    type: "video",
    src: "/images/instagram/post1.mp4",
  },

  {
    type: "image",
    src: "/images/instagram/post1.jpg",
  },

  {
    type: "image",
    src: "/images/instagram/post1.jpg",
  },

  {
    type: "image",
    src: "/images/instagram/post1.jpg",
  },

  {
    type: "image",
    src: "/images/instagram/post1.jpg",
  },

  {
    type: "image",
    src: "/images/instagram/post1.jpg",
  },

  {
    type: "image",
    src: "/images/instagram/post1.jpg",
  },
];

export default function InstagramGallery() {
  return (
    <section className="instagram-section">
      <div className="instagram-grid">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            className="instagram-item"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
          >
            {post.type === "video" ? (
              <video src={post.src} controls />
            ) : (
              <img src={post.src} alt="Serenico Spaces" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
