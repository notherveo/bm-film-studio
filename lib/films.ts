export interface Film {
  slug: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  poster: string;
}

export const filmGrid: Film[] = [
  {
    slug: "echoes",
    title: "Echoes",
    category: "Drama",
    year: "2025",
    tagline: "A voice that refuses to be forgotten.",
    poster: "/films/echoes.jpg",
  },
  {
    slug: "the long way home",
    title: "The Long Way Home",
    category: "Adventure",
    year: "2024",
    tagline: "Every mile tells a story.",
    poster: "/films/long-way-home.jpg",
  },
  {
    slug: "silent city",
    title: "Silent City",
    category: "Thriller",
    year: "2024",
    tagline: "The loudest secrets stay quiet.",
    poster: "/films/silent-city.jpg",
  },
  {
    slug: "golden hour",
    title: "Golden Hour",
    category: "Romance",
    year: "2023",
    tagline: "A moment that changes everything.",
    poster: "/films/golden-hour.jpg",
  },
  {
    slug: "the other side",
    title: "The Other Side",
    category: "Sci-Fi",
    year: "2023",
    tagline: "What lies beyond the horizon.",
    poster: "/films/other-side.jpg",
  },
  {
    slug: "still water",
    title: "Still Water",
    category: "Mystery",
    year: "2022",
    tagline: "Some things never sink.",
    poster: "/films/still-water.jpg",
  },
];
