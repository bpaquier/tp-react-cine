import React, { useContext } from "react";
import themeContext from "../../contexts/theme";
import classNames from "classnames/bind";
import css from "./styles.module.scss";
import SearchBar from "../SearchBar/";

const cx = classNames.bind(css);

export interface Hero {
  title?: string;
  subtitle?: string;
  declencheFetch?: (s: string) => void;
  userInput?: string;
  setUserInput?: any;
}

const Hero = (props: Hero) => {
  const { title, subtitle, declencheFetch, userInput, setUserInput } = props;
  const themecontext = useContext(themeContext);
  const [theme] = themecontext;

  return (
    <div className={cx(css.hero, theme)}>
      <h1 className={cx(css.title, css.test)}>{title}</h1>
      <h3> {subtitle} </h3>
      <SearchBar
        userInput={userInput}
        setUserInput={setUserInput}
        placeholder="Title"
        declencheFetch={declencheFetch}
      />
    </div>
  );
};

export default Hero;
