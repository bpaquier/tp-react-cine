import Card from "../Card";
import { movies } from "./utils";
import classNames from "classNames/bind";
import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface MovieListProps {
  className?: string;
}

const MoviesList = ({ className }: MovieListProps) => {
  const renderAllCards = movies.map((movie) => (
    <Card className={css.moviesList__card} movie={movie} />
  ));
  return (
    <div className={css.moviesList}>
      <h2 className={css.moviesList__title}>
        <em>Most</em> popular
      </h2>
      <div className={css.moviesList__list}>{renderAllCards}</div>
    </div>
  );
};

export default MoviesList;
