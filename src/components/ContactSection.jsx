"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="lux-contact-section">
      {/* HEADER */}

      <motion.div
        className="lux-contact-header"
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
        <h2>Get in Touch</h2>

        <p>We’re here to bring your vision to life.</p>
      </motion.div>

      {/* FORM */}

      <motion.form
        className="lux-contact-form"
        style={{
          marginTop: "0px",
        }}
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
        <div className="lux-form-group">
          <label>Your Name</label>

          <input type="text" placeholder="Enter full name" />
        </div>

        <div className="lux-form-group">
          <label>Phone Number*</label>

          <input type="text" placeholder="Phone Number" />
        </div>

        <div className="lux-form-group">
          <label>Email Address*</label>

          <input type="email" placeholder="Enter email" />
        </div>

        <div className="lux-form-group">
          <label>Message*</label>

          <textarea placeholder="Write your message" />
        </div>

        <button type="submit">Send Message</button>
      </motion.form>
    </section>
  );
}
