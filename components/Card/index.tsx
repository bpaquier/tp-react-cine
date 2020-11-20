import Link from 'next/link';

import GENRES from '../../services/genres';
import React, { useContext } from 'react';
import themeContext from '../../contexts/theme';
import classNames from 'classnames/bind';
import css from './styles.module.scss';
import Ratio from '../Ratio';
import { getImageFromApi } from '../../services/utils';

import { addCookie } from '../../services/cookies';

const cx = classNames.bind(css);
const API_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'a366c741ebcd23ebb98f75ee1b26fece';

export interface CardProps {
  className?: string;
  movie: any;
  ratio: number;
  category?: string;
}

const Card = ({ className, movie, ratio, category }: CardProps) => {
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
    .map((genre_id: number) => GENRES[genre_id])
    .join(' · ');

  const addToFavorite = () => {
    addCookie(movie, category);
  };

  return (
    <Ratio ratio={ratio}>
      {(className) => (
        <div className={css.card}>
          <div className={css.cardFavorite} onClick={addToFavorite}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='448pt'
              viewBox='0 -21 448 448'
              width='448pt'
              fill='white'
            >
              <path d='m224 406.902344c29.382812-16.214844 224-129.496094 224-282.902344 0-66.054688-54.199219-124-116-124-41.867188.0742188-80.460938 22.660156-101.03125 59.128906-1.539062 2.351563-4.160156 3.765625-6.96875 3.765625s-5.429688-1.414062-6.96875-3.765625c-20.570312-36.46875-59.164062-59.0546872-101.03125-59.128906-61.800781 0-116 57.945312-116 124 0 153.40625 194.617188 266.6875 224 282.902344zm0 0' />
            </svg>
          </div>

          <Link href={`movie/${id}`}>
            <a>
              <img
                className={cx(css.card__picture, theme)}
                src={
                  poster_path
                    ? getImageFromApi(poster_path)
                    : './assets/poster-not-found-no-text.jpg'
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
                    </div>
                    {release_date && (
                      <div className={css.text__information}>
                        {release_date.slice(0, 4)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      )}
    </Ratio>
  );
};

Card.defaultProps = {
  ratio: 274 / 468,
};

export default Card;
