import React from "react";
import classNames from "classNames/bind";
import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface CardProps {
  className?: string;
  movie: any;
}

const Card = ({ className, movie }: CardProps) => {
  return (
    <div className={css.card}>
      <div className={css.card__picture}></div>
      <div className={css.card__description}></div>
    </div>
  );
};

export default Card;
