import Card from "../Card";
import { movies } from "./utils";
import classNames from "classNames/bind";
import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface MovieListProps {
  queryMovies?: any;
  popularMovies?: any;
  userInput?: string;
}


const MoviesList = ({ queryMovies, popularMovies, userInput }: MovieListProps) => {
  // const MAPMOVIE = queryMovies != null ? queryMovies : popularMovies;
  // console.log(MAPMOVIE);

  const renderAllCards = (movies : any) =>{
    return movies.map((movie : any) => (
      <Card key={movie.id} className={css.moviesList__card} movie={movie} />
    ));
  } 

  return (
    <div className={css.moviesList}>
      <h2 className={css.moviesList__title}>
        {!userInput ? (<><em>Most</em> popular</>) : (<><em>Result for</em> "{userInput}"</>)}
      </h2>
      <div className={css.moviesList__list}>{renderAllCards(queryMovies || popularMovies)}</div>
    </div>
  );
};

export default MoviesList;
