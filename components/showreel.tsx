"use client";
import * as React from "react";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

import { filmGrid } from "@/lib/films";

const SHOWREEL = [
  filmGrid[0],
  filmGrid[1],
  filmGrid[2],
  filmGrid[3],
  filmGrid[4],
  filmGrid[5],
];

export function Showreel() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const index = useTransform(scrollYProgress, [0, 1], [0, SHOWREEL.length - 1]);
  const current = Math.round(index.get());

  return (
    <section className="showreel" aria-label="Our films">
      <div className="showreel-track" ref={ref}>
        {SHOWREEL.map((film, i) => (
          <div
            key={film.slug}
            className="showreel-slide"
            style={{ "--i": i } as React.CSSProperties}
          >
            <div className="showreel-overlay" />
            <div className="showreel-caption">
              <p className="showreel-label">0{current + 1} / {SHOWREEL.length}</p>
              <h2>{film.title}</h2>
              <p>{film.category}</p>
              <p>{film.year}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="showreel-dots">
        {SHOWREEL.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to film ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            onClick={() => setActive(i)}
          >
            <span />
          </button>
        ))}
      </div>
    </section>
  );
}
