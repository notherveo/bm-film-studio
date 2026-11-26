"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

import { filmGrid } from "@/lib/films";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const films = filmGrid.slice(0, 4);

  return (
    <header className="site-header">
      <div className="header-top">
        <Link href="/" className="logo">
          <span>CINEMA</span>
          <span>01</span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
        </button>
      </div>
      <nav className="header-nav" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/films">Films</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="header-filmstrip">
        {films.map((film) => (
          <div key={film.slug} className="header-film-frame">
            <Link href={`/films/${film.slug}`} aria-label={film.title}>
              <img
                src={film.poster}
                alt=""
                
                
                className="object-cover"
                loading="lazy"
               />
            </Link>
          </div>
        ))}
      </div>
      <motion.div
        className="header-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setOpen(false)}
      />
      <motion.div
        className="header-menu"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="header-menu-top">
          <Link href="/" className="logo">
            <span>CINEMA</span>
            <span>01</span>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <span />
            <span />
          </button>
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/films">Films</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <Link href="/contact" className="header-cta">
          Let&apos;s talk
        </Link>
      </motion.div>
    </header>
  );
}
