import createScopedElement from '../../createScopedElement';
import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasRef, HasRootRef } from '../../types';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';

export interface SwitchProps extends
  InputHTMLAttributes<HTMLInputElement>,
  HasRootRef<HTMLLabelElement>,
  HasRef<HTMLInputElement>,
  AdaptivityProps { }

const Switch: FunctionComponent<SwitchProps> = ({
  style,
  className,
  getRef,
  getRootRef,
  sizeY,
  ...restProps
}: SwitchProps) => {
  const platform = usePlatform();

  return (
    <label css={classNames(
      getClassName('Switch', platform),
      className,
      `Switch--sizeY-${sizeY}`)} style={style} ref={getRootRef}>
      <input {...restProps} type="checkbox" css="Switch__self" ref={getRef} />
      <span css="Switch__pseudo" />
    </label>
  );
};

export default withAdaptivity(Switch, { sizeY: true });
