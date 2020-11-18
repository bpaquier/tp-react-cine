import React, { useState } from 'react';
import Link from 'next/link';
import classNames from 'classNames/bind';
import css from './styles.module.scss';
const cx = classNames.bind(css);

//export interface HeaderProps {
//  className?: string;
//}

const Header = () => {
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleChange = (e) => {
    if (e.target.checked) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div className={cx(css.header, theme)}>
      <div
        className={cx(css.burgerMenu, theme, { menuOpen })}
        onClick={handleClick}
      ></div>
      <img
        className={css.logoAB}
        alt='logo Allo Barbylone'
        src={theme === 'dark' ? 'icon-ab-dark.png' : 'icon-ab-light.png'}
      />
      <nav className={cx(css.nav, theme, { menuOpen })}>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Tv Shows</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Movies</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>My List</a>
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
    </div>
  );
};

export default Header;
