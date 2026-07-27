"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        Serenico<span>Spaces</span>
        <p>DESIGNING YOUR DREAM LIVING</p>
      </div>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Services</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </nav>

      <button className="expert">Call an Expert</button>
    </header>
  );
}
