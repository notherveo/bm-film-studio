import { Reveal, RevealItem } from "@/components/reveal";

export const metadata = { title: "About" };

export default function About() {
  const facts = [
    { label: "Founded", value: "2018" },
    { label: "Films made", value: "12" },
    { label: "Countries", value: "12" },
    { label: "Team", value: "18" },
  ];

  return (
    <main>
      <section className="section" aria-labelledby="about">
        <div className="section-top">
          <p className="eyebrow">A little history</p>
          <h2 id="about" className="section-title">
            A little history
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <Reveal>
              <p>
                A small crew, a lot of film. We started with a simple idea:
                every story deserves a moment to be seen.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Today we make films that linger. We work with filmmakers,
                brands and creators who care about the craft.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <p>
                We believe in the power of a good frame, a well-timed cut and
                a little bit of magic.
              </p>
            </Reveal>
          </div>
          <div className="about-stats">
            {facts.map((f, i) => (
              <RevealItem key={f.label} delay={i * 100}>
                <div className="about-stat">
                  <p className="about-stat-number">{f.value}</p>
                  <p className="about-stat-label">{f.label}</p>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
