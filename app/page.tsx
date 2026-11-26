import { FilmStrip } from "@/components/film-strip";
import { Showreel } from "@/components/showreel";
import { FilmGrid } from "@/components/film-grid";
import { Timeline } from "@/components/timeline";
import { Reveal, RevealItem } from "@/components/reveal";

export default function Home() {
  return (
    <main>
      <Showreel />
      <section className="section" aria-labelledby="films">
        <div className="section-top">
          <p className="eyebrow">A little of everything</p>
          <h2 id="films" className="section-title">
            A little of everything
          </h2>
        </div>
        <FilmGrid />
      </section>
      <section className="section" aria-labelledby="services">
        <div className="section-top">
          <p className="eyebrow">What we do</p>
          <h2 id="services" className="section-title">
            What we do
          </h2>
        </div>
        <FilmStrip />
      </section>
      <section className="section" aria-labelledby="studio">
        <div className="section-top">
          <p className="eyebrow">A little history</p>
          <h2 id="studio" className="section-title">
            A little history
          </h2>
        </div>
        <Timeline />
      </section>
    </main>
  );
}
