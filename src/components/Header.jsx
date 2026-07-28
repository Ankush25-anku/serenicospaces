"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const closeMenu = () => {
    setOpen(false);
  };

  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="header">
      <div className="logo">
        Serenico<span>Spaces</span>
        <p>DESIGNING YOUR DREAM LIVING</p>
      </div>

      {/* Desktop Menu */}

      <nav className="desktop-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={pathname === item.path ? "active" : ""}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <Link href="/contact" className="expert desktop-btn">
        Call an Expert
      </Link>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </button>

      {open && (
        <div className="mobile-menu">
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path} onClick={closeMenu}>
              {item.name}
            </Link>
          ))}

          <Link href="/contact" className="expert" onClick={closeMenu}>
            Call an Expert
          </Link>
        </div>
      )}
    </header>
  );
}
