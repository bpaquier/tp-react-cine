import Link from "next/link";
import Card from "../components/Card";
import Hero from "../components/Hero";

import css from "../styles/Home.module.css";

const movie = {
  adult: false,
  backdrop_path: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
  belongs_to_collection: null,
  budget: 63000000,
  genres: [
    {
      id: 18,
      name: "Drama",
    },
  ],
  homepage: "http://www.foxmovies.com/movies/fight-club",
  id: 550,
  imdb_id: "tt0137523",
  original_language: "en",
  original_title: "Fight Club",
  overview:
    'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
  popularity: 57.986,
  poster_path: "/9dlcOgehxDK4QaC2QDfqwQFbk5C.jpg",
  production_companies: [
    {
      id: 508,
      logo_path: "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
      name: "Regency Enterprises",
      origin_country: "US",
    },
    {
      id: 711,
      logo_path: "/tEiIH5QesdheJmDAqQwvtN60727.png",
      name: "Fox 2000 Pictures",
      origin_country: "US",
    },
    {
      id: 20555,
      logo_path: "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
      name: "Taurus Film",
      origin_country: "DE",
    },
    {
      id: 54051,
      logo_path: null,
      name: "Atman Entertainment",
      origin_country: "",
    },
    {
      id: 54052,
      logo_path: null,
      name: "Knickerbocker Films",
      origin_country: "US",
    },
    {
      id: 25,
      logo_path: "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
      name: "20th Century Fox",
      origin_country: "US",
    },
    {
      id: 4700,
      logo_path: "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
      name: "The Linson Company",
      origin_country: "",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "DE",
      name: "Germany",
    },
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "1999-10-15",
  revenue: 100853753,
  runtime: 139,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "Mischief. Mayhem. Soap.",
  title: "Fight Club",
  video: false,
  vote_average: 8.4,
  vote_count: 20429,
};

export default function Home() {
  return (
    <>
      <Link href="/movies">
        <a>Go to movies list</a>
      </Link>
      <p>Allo Ciné</p>
      <Hero title="Welcome to Allo Barbylone" subtitle="What do we watch tonight ?" />
      <Card movie={movie} />
    </>
  );
}
