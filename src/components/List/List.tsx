import createScopedElement from '../../createScopedElement';
import React, { FunctionComponent, HTMLAttributes } from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';

const List: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...restProps
}: HTMLAttributes<HTMLDivElement>) => {
  const platform = usePlatform();
  const baseClassName = getClassName('List', platform);

  return (
    <div {...restProps} css={classNames(baseClassName, className)}>{children}</div>
  );
};

export default List;
