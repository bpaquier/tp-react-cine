import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames/bind";

import css from "./styles.module.scss";
import { useRouter } from "next/router";
import getMovieFetch from "../../services/getMovie";
import Layout from "../../components/Layout";
import { getImageFromApi, minuteToHour } from "../../services/utils";
import themeContext from "../../contexts/theme";

const cx = classNames.bind(css);

interface IMovie {
  poster_path?: string;
  original_title: string;
  genres: IGenre[];
  runtime: number;
  release_date: string;
  budget: number;
  vote_average: null;
  tagline: string;
  overview: string;
  homepage: string;
  original_name: string;
}

interface IGenre {
  id: string;
  name: string;
}

const countStars = (rate: number): number[] => {
  const newRate: number = rate / 2;
  const stars: number[] = [];
  for (let i = 0; i < Number(newRate.toString().split(".")[0]); i++)
    stars.push(1);
  rate < Math.round(rate) ? stars.push(1) : stars.push(0);
  return stars;
};

const Movies = () => {
  const router = useRouter();
  const themecontext = useContext(themeContext);
  const [theme] = themecontext;
  const { type, id } = router.query;

  const [movie, setMovie] = useState<IMovie>({
    poster_path: "",
    original_title: "",
    genres: [],
    runtime: null,
    release_date: "",
    budget: null,
    vote_average: null,
    tagline: "",
    overview: "",
    homepage: "",
    original_name: "",
  });

  const newBudget: string =
    new Intl.NumberFormat("us-US").format(movie?.budget) + " $";
  const genresList: string = movie?.genres
    .map((genre) => genre.name)
    .join(" · ");

  useEffect(() => {
    async function declencheFetch(type: string, query: string) {
      let result = await getMovieFetch(type, query);

      setMovie(result);
    }
    declencheFetch(type as string, id as string);

  }, [type, id]);

  const renderStars: JSX.Element[] = countStars(movie?.vote_average).map(
    (star: number) => {
      if (star === 1) {
        return (
          <svg
            className={css.movie__star}
            key={uuidv4()}
            width="72"
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
        );
      } else {
        return (
          <svg
            className={css.movie__star}
            key={uuidv4()}
            width="71"
            height="68"
            viewBox="0 0 71 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M70.1055 27.0366C70.223 26.5618 70.2183 26.0708 70.1055 25.6071V27.0366ZM35.0953 58.2563C34.6559 58.2564 34.2166 58.353 33.8098 58.546L16.5469 66.7382C14.4016 67.7563 11.98 65.9966 12.2857 63.6417L14.7444 44.6994C14.8604 43.8055 14.5683 42.9068 13.949 42.2519L0.823197 28.3726C-0.808669 26.6471 0.116395 23.7995 2.45081 23.3625L21.2317 19.8465C22.1174 19.6807 22.8817 19.1255 23.3132 18.3345L32.4624 1.56329C33.0308 0.521339 34.063 0.000240289 35.0953 0V58.2563Z"
              fill="#EDC700"
            />
          </svg>
        );
      }
    }
  );

  return (
    <Layout
      activePage="movie"
      title={`Barbylone - ${
        movie?.original_title ? movie?.original_title : movie?.original_name
      }`}
    >
      <div className={cx(css.moviePage, theme)}>
        <div className={css.movie__informations}>
          <div className={css.movie__title}> {movie?.original_title} </div>
          <div className={css.movie__tagline}> {movie?.tagline} </div>
          <div className={css.movie__infos}>
            {genresList} · {minuteToHour(movie?.runtime)}
          </div>
          <div className={css.movie__average}>
            {renderStars}
            {movie?.vote_average} %
          </div>
          <div className={css.movie__infosadd}>
            {movie?.budget ? (
              <div className={css.movie__budget}>{newBudget}</div>
            ) : null}
            {type === "movie" ? (
              <div className={css.movie__release}>
                {movie?.release_date.slice(0, 4)}{" "}
              </div>
            ) : null}
          </div>
          <div className={css.movie__overview}>{movie?.overview}</div>
          <div className={css.movie__buttons}>
            <button className={css.movie__button}>
              <a href={movie?.homepage} target="_blank">
                VIEW WEBSITE
              </a>
            </button>
            <button className={css.movie__button}>ADD TO MY LIST</button>
          </div>
        </div>
        <img
          src={
            movie?.poster_path
              ? getImageFromApi(movie?.poster_path)
              : "./../assets/poster-not-found-no-text.jpg"
          }
          className={css.movie__image}
        />
      </div>
    </Layout>
  );
};

export default Movies;
