import Link from "next/link";

import { useState } from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

import MoviesList from "../components/MovieList";

import searchBarFetch from "../services/searchBarFetch.js";

import css from "../styles/Home.module.css";

export default function Home({ data }) {
  const [movies, setMovies] = useState(null);
  const [userInput, setUserInput] = useState("");

  async function declencheFetch(query: string) {
    let result = await searchBarFetch(query, "movie");
    setMovies(result);
  }

  return (
    <Layout>
      <Hero
        title="Welcome to Allo Barbylone"
        subtitle="What are we watching tonight ?"
        declencheFetch={declencheFetch}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <MoviesList category={'movie'} userInput={userInput} queryMovies={movies} popularMovies={data} />
    </Layout>
  );
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a366c741ebcd23ebb98f75ee1b26fece")
  const res = await data.json()

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { data: res.results }
  }
}

