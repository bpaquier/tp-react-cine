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
  category?: string;
  customTitle?: string;
  favoriteList?: boolean;
}

const MoviesList = ({
  queryMovies,
  popularMovies,
  userInput,
  category,
  customTitle,
  favoriteList,
}: MovieListProps) => {
  const themecontext = useContext(themeContext);
  const [theme] = themecontext;

  const renderAllCards = (movies: any) => {
    if (movies.length > 0) {
      return movies.map((movie: any) => (
        <div className={css.cardContainer} key={movie.id}>
          <Card
            className={css.moviesList__card}
            movie={movie}
            category={category}
            canBeLiked={!favoriteList}
          />
        </div>
      ));
    } else {
      return (
        <p className={css.errorMessage}>
          The resource you requested could not be found.
        </p>
      );
    }
  };

  return (
    <div className={css.moviesList}>
      <h2 className={cx(css.moviesList__title, theme)}>
        {!userInput ? (
          <>
            {customTitle ? (
              <>
                <em>{customTitle}</em>
              </>
            ) : (
              <>
                <em>Most</em> popular
              </>
            )}
          </>
        ) : (
          <>
            <em>Result for {category}</em> "{userInput}"
          </>
        )}
      </h2>
      <div className={cx(css.moviesList__list, theme)}>
        {renderAllCards(queryMovies || popularMovies)}
      </div>
    </div>
  );
};

MoviesList.defaultProps = {
  favoriteList: false,
};

export default MoviesList;
