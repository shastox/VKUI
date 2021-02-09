import createScopedElement from '../../createScopedElement';
import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import usePlatform from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';
import Caption from '../Typography/Caption/Caption';
import Headline from '../Typography/Headline/Headline';

interface PanelHeaderContentProps extends HTMLAttributes<HTMLDivElement> {
  aside?: ReactNode;
  before?: ReactNode;
  status?: ReactNode;
}

const PanelHeaderContent: FunctionComponent<PanelHeaderContentProps> = ({
  className,
  style,
  aside,
  status,
  before,
  children,
  onClick,
  ...restProps
}: PanelHeaderContentProps) => {
  const InComponent = onClick ? Tappable : 'div';
  const rootProps = onClick ? {} : restProps;
  const inProps = onClick ? { ...restProps, activeEffectDelay: 200 } : {};
  const platform = usePlatform();
  const baseClassNames = getClassName('PanelHeaderContent', platform);

  return (
    <div {...rootProps} css={classNames(baseClassNames, className)} style={style}>
      {hasReactNode(before) && <div css="PanelHeaderContent__before">{before}</div>}
      <InComponent {...inProps} css="PanelHeaderContent__in" onClick={onClick}>
        {hasReactNode(status) &&
          <Caption level="1" weight="regular" css="PanelHeaderContent__status">
            {status}
          </Caption>
        }
        <div css="PanelHeaderContent__children">
          {hasReactNode(status) ?
            <Headline Component="span" weight="medium">
              {children}
            </Headline>
            : <span css="PanelHeaderContent__children-in">{children}</span>
          }
          {hasReactNode(aside) && <div css="PanelHeaderContent__aside">{aside}</div>}
        </div>
        {hasReactNode(before) && <div css="PanelHeaderContent__width" />}
      </InComponent>
    </div>
  );
};

export default PanelHeaderContent;
