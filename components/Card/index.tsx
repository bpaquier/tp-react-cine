import Link from "next/link";

import GENRES from "../../services/genres";
import React, { useContext } from "react";
import themeContext from "../../contexts/theme";
import classNames from "classnames/bind";
import css from "./styles.module.scss";
import Ratio from "../Ratio";
import { getImageFromApi } from "../../services/utils";

const cx = classNames.bind(css);
const API_URL = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "a366c741ebcd23ebb98f75ee1b26fece";

export interface CardProps {
  className?: string;
  movie: any;
  ratio: number;
}

const Card = ({ className, movie, ratio }: CardProps) => {
  const themecontext = useContext(themeContext);
  const [theme] = themecontext;
  const {
    poster_path,
    original_title,
    original_name,
    genre_ids,
    vote_average,
    release_date,
    id,
  } = movie;

  const title = (title: string) => {
    return title.length > 30 ? `${title.substr(0, 28)}...` : title;
  };

  const genresList: string = genre_ids
    .slice(0, 2)
    .map((genre_id) => GENRES[genre_id])
    .join(" · ");

  return (
    <Link href={`movie/${id}`}>
      <a>
        <Ratio ratio={ratio}>
          {(className) => (
            <div className={css.card}>
              <img
                className={cx(css.card__picture, theme)}
                src={
                  poster_path
                    ? getImageFromApi(poster_path)
                    : "./assets/poster-not-found-no-text.jpg"
                }
                alt={`${movie.title} poster`}
              />
              <div className={cx(css.card__description, theme)}>
                <div className={css.text__container}>
                  <div className={css.titleContainer}>
                    <h3>
                      {original_title
                        ? title(original_title)
                        : title(original_name)}
                    </h3>
                  </div>
                  <p>{genresList}</p>
                  <div className={css.text__informations}>
                    <div className={css.text__information}>
                      {vote_average / 2}
                      <svg
                        className={css.movie__star}
                        width="30"
                        height="68"
                        viewBox="0 0 72 68"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.3662 1.82936C34.5032 -0.255463 37.4968 -0.255465 38.6338 1.82936L47.7792 18.5986C48.2107 19.3898 48.975 19.9451 49.8608 20.111L68.6354 23.6268C70.9695 24.0639 71.8946 26.911 70.2632 28.6365L57.1407 42.5163C56.5216 43.1712 56.2297 44.0697 56.3456 44.9634L58.8036 63.9055C59.1091 66.2605 56.6873 68.0201 54.542 67.0017L37.2865 58.8107C36.4724 58.4242 35.5276 58.4242 34.7135 58.8107L17.458 67.0017C15.3127 68.0201 12.8909 66.2605 13.1964 63.9055L15.6544 44.9634C15.7703 44.0697 15.4784 43.1712 14.8593 42.5163L1.73685 28.6366C0.105418 26.911 1.03048 24.0639 3.36462 23.6268L22.1392 20.111C23.025 19.9451 23.7893 19.3898 24.2208 18.5986L33.3662 1.82936Z"
                          fill="#EDC700"
                        />
                      </svg>
                    </div>
                    {release_date && (
                      <div className={css.text__information}>
                        {release_date.slice(0, 4)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Ratio>
      </a>
    </Link>
  );
};

Card.defaultProps = {
  ratio: 274 / 468,
};

export default Card;
