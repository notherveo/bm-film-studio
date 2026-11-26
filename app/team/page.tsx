import { Reveal, RevealItem } from "@/components/reveal";

export const metadata = { title: "Team" };

export default function Team() {
  const team = [
    {
      name: "Elena Rossi",
      role: "Director",
      copy: "She sees the frame before the camera rolls.",
    },
    {
      name: "Marcus Chen",
      role: "Producer",
      copy: "The person who makes sure the magic happens.",
    },
    {
      name: "Sofia Laurent",
      role: "Editor",
      copy: "She finds the rhythm in the silence.",
    },
  ];

  return (
    <main>
      <section className="section" aria-labelledby="team">
        <div className="section-top">
          <p className="eyebrow">A little history</p>
          <h2 id="team" className="section-title">
            A little history
          </h2>
        </div>
        <div className="team-grid">
          {team.map((t, i) => (
            <RevealItem key={t.name} delay={i * 100}>
              <div className="team-card">
                <div className="team-card-top">
                  <p className="team-card-role">{t.role}</p>
                  <p className="team-card-name">{t.name}</p>
                </div>
                <p>{t.copy}</p>
              </div>
            </RevealItem>
          ))}
        </div>
      </section>
    </main>
  );
}
