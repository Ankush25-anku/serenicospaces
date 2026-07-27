"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="contact-section">
      <motion.h2
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
        Request A Call Back
      </motion.h2>

      <form className="contact-form">
        <div className="form-group">
          <label>Name*</label>

          <input type="text" placeholder="Full Name" />
        </div>

        <div className="form-group">
          <label>Phone No.*</label>

          <input type="text" placeholder="Your Phone Number" />
        </div>

        <div className="form-group">
          <label>Your email*</label>

          <input type="email" placeholder="Your email address" />
        </div>

        <div className="form-group">
          <label>Message*</label>

          <textarea placeholder="Enter your message" />
        </div>

        <button type="submit">Request Call</button>
      </form>
    </section>
  );
}
