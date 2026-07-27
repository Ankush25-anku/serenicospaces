"use client";

import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* SOCIAL */}

        <div className="footer-column">
          <h3>Social</h3>

          <p>Reach out to discuss your next project.</p>

          <div className="instagram">
            <FaInstagram />
          </div>
        </div>

        {/* CONTACT */}

        <div className="footer-column">
          <h3>Contact Us</h3>

          <a href="#">contact@serenicospaces.com</a>

          <a href="#">Guwahati and Kolkata +918130279245</a>

          <a href="#">Imphal +917629946802</a>
        </div>

        {/* ABOUT */}

        <div className="footer-column">
          <h3>About Us</h3>

          <p>
            End to End Home Interior Consultant ||
            <br />
            Modular Kitchen || Modular Wardrobes ||
            <br />
            Ceilings || Lab Workspace Solutions
          </p>

          <p>📍 Assam &nbsp; 📍 Imphal &nbsp; 📍 Kolkata</p>
        </div>
      </div>

      <div className="copyright">© 2026. All rights reserved.</div>
    </footer>
  );
}
