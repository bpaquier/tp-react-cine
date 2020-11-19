import { useContext } from 'react';

import Card from '../Card';
import { movies } from './utils';

import themeContext from '../../contexts/theme';

import classNames from 'classnames/bind';
import css from './styles.module.scss';
const cx = classNames.bind(css);

interface MovieListProps {
  queryMovies?: any;
  popularMovies?: any;
  userInput?: string;
}

const MoviesList = ({
  queryMovies,
  popularMovies,
  userInput,
}: MovieListProps) => {
  const theme = useContext(themeContext);
  // const MAPMOVIE = queryMovies != null ? queryMovies : popularMovies;
  // console.log(MAPMOVIE);

  const renderAllCards = (movies: any) => {
    return movies.map((movie: any) => (
      <div className={cx(css.cardContainer, theme)} key={movie.id}>
        <Card className={css.moviesList__card} movie={movie} />
      </div>
    ));
  };

  return (
    <div className={css.moviesList}>
      <h2 className={cx(css.moviesList__title, theme)}>
        {!userInput ? (
          <>
            <em>Most</em> popular
          </>
        ) : (
          <>
            <em>Result for</em> "{userInput}"
          </>
        )}
      </h2>
      <div className={css.moviesList__list}>
        {renderAllCards(queryMovies || popularMovies)}
      </div>
    </div>
  );
};

export default MoviesList;
