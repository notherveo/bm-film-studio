import { filmGrid } from "@/lib/films";

export function FilmStrip() {
  const films = filmGrid.slice(0, 4);
  return (
    <div className="film-strip" aria-label="A glimpse of our work">
      {films.map((film) => (
        <div key={film.slug} className="film-strip-frame">
          <img
            src={film.poster}
            alt={film.title}
            
            
            className="object-cover"
            loading="lazy"
           />
          <div className="film-strip-caption">
            <p>{film.title}</p>
            <p>{film.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
