import React, { useState, useContext, InputHTMLAttributes } from "react";
import Link from "next/link";
import themeContext from "../../contexts/theme";

import classNames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classNames.bind(css);

const Header = ({ activePage }) => {
  const themecontext = useContext(themeContext);
  const [theme, setTheme] = themecontext;

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      //@ts-ignore
      setTheme("light");
    } else {
      //@ts-ignore
      setTheme("dark");
    }
  };

  return (
    <header className={cx(css.header, theme)}>
      <div onClick={handleClick} className={css.burgerMenuContainer} >
      <div className={cx(css.burgerMenu, theme, { menuOpen })}>
      </div>
      </div>
      <Link href="/">
        <a>
      <img
        className={css.logoAB}
        alt="logo Allo Barbylone"
        src={
          theme === "dark"
            ? "/assets/icon-ab-dark.png"
            : "/assets/icon-ab-light.png"
        }
      /> 
      </a>
      </Link>
      <nav className={cx(css.nav, theme, { menuOpen })}>
        <ul>
          <li>
            <Link href="/">
              <a className={activePage === "home" ? css.currentPage : null}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/tvShows">
              <a className={activePage === "tv shows" ? css.currentPage : null}>
                Tv Shows
              </a>
            </Link>
          </li>
          <li>
            <Link href="/myList">
              <a className={activePage === "my list" ? css.currentPage : null}>
                My List
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <label className={cx(css.switch, theme)}>
          <input
            onChange={handleChange}
            type="checkbox"
            className={css.input}
            checked={theme === "light" ? true : false}
          />
          <span className={cx(css.slider, css.round)}></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
