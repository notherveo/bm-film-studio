import { FilmGrid } from "@/components/film-grid";

export const metadata = { title: "Films" };

export default function Films() {
  return (
    <main>
      <section className="section" aria-labelledby="films">
        <div className="section-top">
          <p className="eyebrow">A little of everything</p>
          <h2 id="films" className="section-title">
            A little of everything
          </h2>
        </div>
        <FilmGrid />
      </section>
    </main>
  );
}
