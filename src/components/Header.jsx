"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projects",
    },

    {
      name: "Services",
      path: "/services",
    },
    {
      name: "About",
      path: "/about",
    },

    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="header">
      <div className="logo">
        <Image
          src="/images/logo.png"
          alt="Serenico Spaces"
          width={260}
          height={65}
          priority
        />
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

      {/* <Link href="/contact" className="expert desktop-btn">
        Call an Expert
      </Link> */}

      <button
        className="menu-btn"
        onClick={() => {
          console.log("clicked");
          setOpen(!open);
        }}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {open && (
        <div className="mobile-menu">
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path} onClick={closeMenu}>
              {item.name}
            </Link>
          ))}

          {/* <Link href="/contact" className="expert" onClick={closeMenu}>
            Call an Expert
          </Link> */}
        </div>
      )}
    </header>
  );
}
