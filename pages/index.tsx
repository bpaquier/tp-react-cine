import Link from "next/link";

import { useState } from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import MoviesList from "../components/MovieList";

import searchBarFetch from "../services/searchBarFetch.js";

import css from "../styles/Home.module.css";


export default function Home() {
  const [movies, setMovies] = useState({});

 async function declencheFetch(query: string){
   let result = await searchBarFetch(query)
    setMovies(result);
 }

  return (
    <>
      <Link href="/movies">
        <a>Go to movies list</a>
      </Link>
      <p>Allo Ciné</p>
      <Hero title="Welcome to Allo Barbylone" subtitle="What do we watch tonight ?" declencheFetch={declencheFetch} />
      <MoviesList />
    </>
  );
}
