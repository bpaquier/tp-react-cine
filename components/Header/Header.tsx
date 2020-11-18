import React from 'react';
import classNames from 'classNames/bind';
import css from './styles.module.scss';
const cx = classNames.bind(css);

export interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <div className={className}>
      <h1 className={cx(css.title, css.test)}>Base Component</h1>
    </div>
  );
};

export default Header;
