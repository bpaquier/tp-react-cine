import { useContext } from 'react';

import Card from '../Card';
import { movies } from './utils';

import themeContext from '../../contexts/theme';

import classNames from 'classNames/bind';
import css from './styles.module.scss';
const cx = classNames.bind(css);

interface MovieListProps {
  className?: string;
}

const MoviesList = ({ className }: MovieListProps) => {
  const theme = useContext(themeContext);

  const renderAllCards = movies.map((movie) => (
    <div className={css.cardContainer}>
      <Card className={css.moviesList__card} movie={movie} />
    </div>
  ));
  return (
    <div className={css.moviesList}>
      <h2 className={cx(css.moviesList__title, theme)}>
        <em>Most</em> popular
      </h2>
      <div className={css.moviesList__list}>{renderAllCards}</div>
    </div>
  );
};

export default MoviesList;
