import React from 'react';
import classNames from 'classNames/bind';
import css from './styles.module.scss';
import SearchBar from "../SearchBar/";

const cx = classNames.bind(css);


export interface Hero {
  title?: string;
  subtitle?: string;
  declencheFetch?: (s: string) => void;
}

const Hero = ( props: Hero) => {
    const { title, subtitle, declencheFetch } = props;
  return (
    <div className={css.hero}>
      <h1 className={cx(css.title, css.test)}>{title}</h1>
      <h3> {subtitle} </h3>
      <SearchBar placeholder="Title" declencheFetch={declencheFetch} />
    </div> 
  );
};

export default Hero;
