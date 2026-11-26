import { Reveal, RevealItem } from "@/components/reveal";

export const metadata = { title: "Services" };

export default function Services() {
  const services = [
    {
      title: "Production",
      copy: "From the first frame to the final cut, we bring your vision to life with precision and care.",
    },
    {
      title: "Post-production",
      copy: "Editing, colour grading and sound design that give your footage the finishing touch.",
    },
    {
      title: "Development",
      copy: "A little research goes a long way. We explore the possibilities before we start shooting.",
    },
  ];

  return (
    <main>
      <section className="section" aria-labelledby="services">
        <div className="section-top">
          <p className="eyebrow">What we do</p>
          <h2 id="services" className="section-title">
            What we do
          </h2>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <RevealItem key={s.title} delay={i * 100}>
              <div className="service-card">
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
              </div>
            </RevealItem>
          ))}
        </div>
      </section>
    </main>
  );
}
