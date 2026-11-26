import Link from "next/link";
import { filmGrid } from "@/lib/films";

export function FilmGrid() {
  return (
    <section className="film-grid" aria-label="Our films">
      {filmGrid.map((film) => (
        <Link
          key={film.slug}
          href={`/films/${film.slug}`}
          className="film-card"
        >
          <div className="film-card-image">
            <img
              src={film.poster}
              alt={film.title}
              
              
              className="object-cover"
              loading="lazy"
             />
            <span className="film-card-year">{film.year}</span>
          </div>
          <div className="film-card-info">
            <p className="film-card-category">{film.category}</p>
            <h3>{film.title}</h3>
            <p>{film.tagline}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
