import createScopedElement from '../../createScopedElement';
import React, { HTMLAttributes, FunctionComponent } from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';
import { HasRootRef } from '../../types';

export interface DivProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {}

export const Div: FunctionComponent<DivProps> = ({ className, children, getRootRef, ...restProps }: DivProps) => {
  const platform = usePlatform();
  return (
    <div {...restProps} ref={getRootRef} css={classNames(getClassName('Div', platform), className)}>
      {children}
    </div>
  );
};

export default Div;
