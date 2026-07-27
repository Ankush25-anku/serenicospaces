"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        Serenico<span>Spaces</span>
        <p>DESIGNING YOUR DREAM LIVING</p>
      </div>

      {/* Desktop Menu */}

      <nav className="desktop-nav">
        <Link href="/">Home</Link>

        <Link href="/">Projects</Link>

        <Link href="/">Services</Link>

        <Link href="/">About</Link>

        <Link href="/">Contact</Link>
      </nav>

      <button className="expert desktop-btn">Call an Expert</button>

      {/* Mobile Menu Button */}

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Dropdown */}

      {open && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/" onClick={() => setOpen(false)}>
            Projects
          </Link>

          <Link href="/" onClick={() => setOpen(false)}>
            Services
          </Link>

          <Link href="/" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link href="/" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <button className="expert">Call an Expert</button>
        </div>
      )}
    </header>
  );
}
