import React, { useState, useContext, InputHTMLAttributes } from 'react';
import Link from 'next/link';
import themeContext from '../../contexts/theme';

import classNames from 'classnames/bind';
import css from './styles.module.scss';
const cx = classNames.bind(css);

const Footer = () => {
  const themecontext = useContext(themeContext);
  const [theme] = themecontext;

  return (
    <footer className={cx(css.footer, theme)}>
      <img
        className={css.logoAB}
        alt='logo Allo Barbylone'
        src={
          theme === 'dark'
            ? 'assets/icon-ab-dark.png'
            : 'assets/icon-ab-light.png'
        }
      />
      <div className={css.textesMid}>
        <p className={cx(css.textes, css.mentionsLegales)}>Mentions légales</p>
        <p className={cx(css.textes, css.cgu)}>CGU</p>
        <p className={cx(css.textes, css.contact)}>Contact</p>
      </div>
      <p className={cx(css.textes, css.project)}>
        Projet étudiant Novembre 2020
      </p>
    </footer>
  );
};

export default Footer;
