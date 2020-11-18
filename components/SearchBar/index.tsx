import React from 'react';
import classNames from 'classNames/bind';
import css from './styles.module.scss';
const cx = classNames.bind(css);

export interface SearchBar {
}

const SearchBar = ( props: SearchBar) => {
   
  return (
    <div>
    <input type="text"/>
    </div>
  );
};

export default SearchBar;
