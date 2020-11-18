import Link from "next/link";
import MoviesList from "../components/MovieList";

import css from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Link href="/movies">
        <a>Go to movies list</a>
      </Link>
      <p>Allo Ciné</p>
      <MoviesList />
    </>
  );
}
