import React, { useState, useContext, InputHTMLAttributes } from 'react';
import Link from 'next/link';
import themeContext from '../../contexts/theme';
import setThemeContext from '../../contexts/setTheme';

import classNames from 'classNames/bind';
import css from './styles.module.scss';
const cx = classNames.bind(css);

const Header = () => {
  const theme = useContext(themeContext);
  const setTheme = useContext(setThemeContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setcurrentPage] = useState('home');

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      //@ts-ignore
      setTheme('light');
    } else {
      //@ts-ignore
      setTheme('dark');
    }
  };

  const handleChangePage = (e) => {
    setcurrentPage(e.target.innerText.toLowerCase())
    console.log(currentPage)
  }

  return (
    <header className={cx(css.header, theme)}>
      <div
        className={cx(css.burgerMenu, theme, { menuOpen })}
        onClick={handleClick}
      ></div>
      <img
        className={css.logoAB}
        alt='logo Allo Barbylone'
        src={
          theme === 'dark'
            ? 'assets/icon-ab-dark.png'
            : 'assets/icon-ab-light.png'
        }
      />
      <nav className={cx(css.nav, theme, { menuOpen })}>
        <ul>
          <li>
            <Link href='/'>
              <a onClick={handleChangePage} className={currentPage === "home" ? css.currentPage : null}>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/tvShows'>
              <a onClick={handleChangePage} className={currentPage === "tv shows" ? css.currentPage : null}>Tv Shows</a>
            </Link>
          </li>
          <li>
            <Link href='/movies'>
              <a onClick={handleChangePage} className={currentPage === "movies" ? css.currentPage : null}>Movies</a>
            </Link>
          </li>
          <li>
            <Link href='/myList'>
              <a onClick={handleChangePage} className={currentPage === "my list" ? css.currentPage : null}>My List</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <label className={cx(css.switch, theme)}>
          <input
            onChange={handleChange}
            type='checkbox'
            className={css.input}
            checked={theme === 'light' ? true : false}
          />
          <span className={cx(css.slider, css.round)}></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
