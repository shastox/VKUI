import createScopedElement from '../../createScopedElement';
import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { Icon16Done } from '@vkontakte/icons';
import classNames from '../../lib/classNames';
import { hasReactNode } from '../../lib/utils';
import Text from '../Typography/Text/Text';

export interface CustomSelectOptionProps extends HTMLAttributes<HTMLDivElement> {
  option?: any;
  selected?: boolean;
  focused?: boolean;
  hovered?: boolean;
  before?: ReactNode;
  after?: ReactNode;
}

const CustomSelectOption: FC<CustomSelectOptionProps> = ({
  children,
  hovered,
  selected,
  before,
  after,
  className,
  ...restProps
}: CustomSelectOptionProps) => {
  const title = typeof children === 'string' ? children : null;

  return (
    <Text
      {...restProps}
      weight="regular"
      role="option"
      title={title}
      aria-selected={selected}
      css={classNames('CustomSelectOption', className, {
        ['CustomSelectOption--hover']: hovered,
        ['CustomSelectOption--selected']: !!selected,
      })}
    >
      {hasReactNode(before) && <div css="CustomSelectOption__before">{before}</div>}
      <div css="CustomSelectOption__label">{children}</div>
      {hasReactNode(after) && <div css="CustomSelectOption__after">{after}</div>}
      {selected && (
        <div css="CustomSelectOption__selectedIcon">
          <Icon16Done fill="var(--accent)" />
        </div>
      )}
    </Text>
  );
};

export default CustomSelectOption;
