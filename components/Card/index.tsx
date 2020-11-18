import React from "react";
import classNames from "classNames/bind";
import css from "./styles.module.scss";
const cx = classNames.bind(css);
const API_URL = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "a366c741ebcd23ebb98f75ee1b26fece";

interface CardProps {
  className?: string;
  movie: any;
}

const Card = ({ className, movie }: CardProps) => {

  const { poster_path, original_title, genres, runtime, release_date } = movie;
  const genresList: string = genres.map((genre) => genre.name).join(" · ");
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
    <div className={css.card}>
      <img className={css.card__picture} src={getImageFromApi(poster_path)} />
      <div className={css.card__description}>
        <div className={css.text__container}>
          <h3>{original_title}</h3>
          <p>{genresList}</p>
          <div className={css.text__informations}>
            <div className={css.text__information}>{minuteToHour(runtime)}</div>
            <div className={css.text__information}>
              {release_date.slice(0, 4)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
