"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        Serenico<span>Spaces</span>
        <p>DESIGNING YOUR DREAM LIVING</p>
      </div>

      {/* Desktop Menu */}

      <nav className="desktop-nav">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>

        <Link href="#services">Services</Link>

        <Link href="#projects">Projects</Link>

        <Link href="#contact">Contact</Link>
      </nav>

      <Link href="#contact" className="expert desktop-btn">
        Call an Expert
      </Link>

      {/* Mobile Menu Button */}

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Dropdown */}

      {open && (
        <div className="mobile-menu">
          <Link href="#home" onClick={closeMenu}>
            Home
          </Link>

          <Link href="#about" onClick={closeMenu}>
            About
          </Link>

          <Link href="#services" onClick={closeMenu}>
            Services
          </Link>
          <Link href="#projects" onClick={closeMenu}>
            Projects
          </Link>

          <Link href="#contact" onClick={closeMenu}>
            Contact
          </Link>

          <Link
            href="#contact"
            className="expert"
            onClick={() => setOpen(false)}
          >
            Call an Expert
          </Link>
        </div>
      )}
    </header>
  );
}
