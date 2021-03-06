import React, { FunctionComponent, HTMLAttributes, useMemo, useState } from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { ListContext } from './ListContext';

const List: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...restProps
}: HTMLAttributes<HTMLDivElement>) => {
  const platform = usePlatform();
  const [isDragging, toggleDrag] = useState(false);
  const baseClassName = getClassName('List', platform);

  return (
    <div {...restProps} className={classNames(baseClassName, className, {
      'List--dragging': isDragging,
    })}>
      <ListContext.Provider value={useMemo(() => ({ toggleDrag }), [])}>
        {children}
      </ListContext.Provider>
    </div>
  );
};

export default List;
