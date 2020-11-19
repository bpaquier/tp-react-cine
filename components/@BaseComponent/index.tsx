import React from 'react';
import classNames from 'classnames/bind';
import css from './styles.module.scss';
const cx = classNames.bind(css);

export interface BaseComponentProps {
  className?: string;
}

const BaseComponent = ({ className }: BaseComponentProps) => {
  return (
    <div className={className}>
      <h1 className={cx(css.title, css.test)}>Base Component</h1>
    </div>
  );
};

export default BaseComponent;
