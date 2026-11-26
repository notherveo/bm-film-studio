import Image from "next/image";
import { notFound } from "next/navigation";

import { filmGrid } from "@/lib/films";



export function generateStaticParams() {
  return filmGrid.map((film) => ({ slug: film.slug }));
}

export default async function FilmPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const film = filmGrid.find((f) => f.slug === slug);
  if (!film) notFound();

  return (
    <main>
      <section className="section" aria-labelledby="film-title">
        <div className="section-top">
          <p className="eyebrow">A little of everything</p>
          <h2 id="film-title" className="section-title">
            {film.title}
          </h2>
        </div>
        <div className="film-detail">
          <div className="film-detail-still">
            <Image
              src={film.poster}
              alt={film.title}
              fill
              sizes="600px"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="film-detail-info">
            <p className="film-detail-category">{film.category}</p>
            <p className="film-detail-year">{film.year}</p>
            <h3>{film.title}</h3>
            <p>{film.tagline}</p>
            <p>
              A fictional film still, used as a demo. The image is a
              placeholder from picsum.photos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
