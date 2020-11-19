import React, { DOMAttributes, ReactChild } from 'react';
import classNames from 'classnames/bind';
import css from './style.module.scss';
const cx = classNames.bind(css);

export interface RatioProps extends DOMAttributes<any> {
  className?: string;
  ratio?: number;
  children: (className: string) => ReactChild;
}

function Ratio({ ratio, className, children, ...rest }: RatioProps) {
  return (
    <div {...rest} className={cx(css.Ratio, className)}>
      <div
        className={cx(className, css.ratioContainer)}
        style={ratio ? { paddingBottom: `${(1 / ratio) * 100}%` } : {}}
      >
        {children(css.children)}
      </div>
    </div>
  );
}

Ratio.defaultProps = {};

export default Ratio;
