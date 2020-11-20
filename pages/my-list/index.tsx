import { useState, useEffect } from 'react';
import { getMoviesCookies, getTvShowsCookies } from '../../services/cookies';
import Layout from '../../components/Layout';
import MovieList from '../../components/MovieList';
import { movies } from '../../components/MovieList/utils';

const MyList = () => {
  const [moviesString, setMoviesString] = useState('');
  useEffect(() => {
    const cookies = getMoviesCookies();
    setMoviesString(() => (!cookies ? '' : cookies));
  }, [moviesString]);

  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    if (moviesString.length > 0) {
      setMoviesList(JSON.parse(moviesString));
    }
  }, [moviesString]);

  const [TvString, setTvString] = useState('');
  useEffect(() => {
    const cookies = getTvShowsCookies();
    setTvString(() => (!cookies ? '' : cookies));
  }, [TvString]);

  const [tvList, setTvList] = useState([]);
  useEffect(() => {
    if (TvString.length > 0) {
      setTvList(JSON.parse(TvString));
    }
  }, [TvString]);

  return (
    <Layout activePage='my list'>
      {moviesList.length > 0 && (
        <MovieList
          popularMovies={moviesList}
          customTitle='Your favorites movies'
        ></MovieList>
      )}
      {tvList.length > 0 && (
        <MovieList
          popularMovies={tvList}
          customTitle='Your favorites Tv shows'
        ></MovieList>
      )}
    </Layout>
  );
};

export default MyList;
