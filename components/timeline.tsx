import * as React from "react";
import Image from "next/image";

const MILESTONES = [
  { year: "2018", title: "Founded in London", copy: "A small crew, a lot of film." },
  { year: "2021", title: "First feature", copy: "A debut that found its audience." },
  { year: "2023", title: "Global reach", copy: "Films in 12 countries and counting." },
  { year: "2026", title: "A new chapter", copy: "More stories, more voices, more cinema." },
];

export function Timeline() {
  return (
    <section className="timeline" aria-label="Our journey">
      <div className="timeline-track">
        {MILESTONES.map((m, i) => (
          <div key={m.year} className="timeline-node" style={{ "--i": i } as React.CSSProperties}>
            <div className="timeline-year">{m.year}</div>
            <div className="timeline-content">
              <h3>{m.title}</h3>
              <p>{m.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
