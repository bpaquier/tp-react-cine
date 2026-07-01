import { useState, useCallback } from "react";

import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import MoviesList from "../../components/MovieList"; // (tjek: du importer "MovieList", men kalder MoviesList)

import searchBarFetch from "../../services/searchBarFetch.js";

import css from "../styles/Home.module.css";

export default function Home({ data }) {
  const [movies, setMovies] = useState(null);
  const [userInput, setUserInput] = useState("");

  const declencheFetch = useCallback(async (query) => {
    try {
      const result = await searchBarFetch(query, "tv");
      setMovies(result);
    } catch (e) {
      console.error("searchBarFetch failed:", e);
      setMovies([]);
    }
  }, []);

  return (
    <Layout activePage="tv shows">
      <Hero
        title="Search your tv show"
        subtitle="What are we watching tonight ?"
        declencheFetch={declencheFetch}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <MoviesList
        category="tv shows"
        userInput={userInput}
        queryMovies={movies}
        popularMovies={data}
        type="tv"
      />
    </Layout>
  );
}


export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = await fetch(
    "https://api.themoviedb.org/3/tv/popular?api_key=a366c741ebcd23ebb98f75ee1b26fece"
  );
  const res = await data.json();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { data: res.results },
  };
}
