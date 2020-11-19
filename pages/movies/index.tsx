import React from 'react';
import classNames from "classNames/bind";
import css from "./styles.module.scss";
import {movies} from '../../components/MovieList/utils';

const movie = movies[0];

const Movies = () => {
  const { poster_path, original_title, genres, runtime, release_date, budget, vote_average, tagline, overview } = movie;
  const genresList: string = genres.map((genre) => genre.name).join(" · ");
  const newBudget = budget.toString().split('').reverse().join('').match(/.{1,3}/g).reverse().map((b) => b.split('').reverse().join('')).join(" ") + " $";

  function getImageFromApi(name: string): string {
    return `https://image.tmdb.org/t/p/w300${name}`;
  }


  function minuteToHour(minutes: number): string {
    const hour: number = Math.floor(minutes / 60);
    const minute: number = minutes % 60;

    return (
      (hour ? hour + "h" : "") + ("0" + minute).slice(-2) + (hour ? "" : "m")
    );
  }


  return (
      <div className={css.moviePage}>
        <div className={css.movie__informations}>
          <button className={css.movie__backbutton}>BACK</button>
          <div className={css.movie__title}> {original_title} </div>
          <div className={css.movie__tagline}> {tagline} </div>
          <div className={css.movie__infos}> {genresList} · {minuteToHour(runtime)}min  </div>
          <div className={css.movie__infosadd}>
            <div className={css.movie__average}> {vote_average} </div>
            <div className={css.movie__budget}> {newBudget} </div>
            <div className={css.movie__release}> {release_date.slice(0,4)} </div>
          </div>
          <div className={css.movie__overview}>
            {overview}
          </div>
          <div className={css.movie__buttons}>
            <button className={css.movie__button}>WATCH</button>
            <button className={css.movie__button}>ADD TO MY LIST</button>
          </div>
        </div>
        <img 
        src={getImageFromApi(poster_path)} 
        className={css.movie__image} />
      </div>
  );
};

export default Movies;
