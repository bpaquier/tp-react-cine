import React from 'react';

import css from './styles.module.scss';

export interface BaseComponentProps {
  className?: string;
}

const BaseComponent = ({ className }: BaseComponentProps) => {
  return (
    <div className={className}>
      <h1 className={css.title}>Base Component</h1>
    </div>
  );
};

export default BaseComponent;
