import createScopedElement from '../../createScopedElement';
import React, { FunctionComponent, HTMLAttributes } from 'react';
import classNames from '../../lib/classNames';

export interface GradientProps extends HTMLAttributes<HTMLDivElement> {
  mode?: 'tint' | 'white' | 'black';
  to?: 'top' | 'bottom';
}

const Gradient: FunctionComponent<GradientProps> = ({ mode, children, className, to, ...restProps }) => {
  return (
    <div
      {...restProps}
      css={classNames('Gradient', `Gradient--md-${mode}`, `Gradient--to-${to}`, className)}
    >
      {children}
    </div>
  );
};

Gradient.defaultProps = {
  mode: 'tint',
  to: 'top',
};

export default Gradient;
