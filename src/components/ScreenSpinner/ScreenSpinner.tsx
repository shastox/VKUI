import createScopedElement from '../../createScopedElement';
import React, { FunctionComponent, HTMLAttributes } from 'react';
import Spinner, { SpinnerProps } from '../Spinner/Spinner';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

interface ScreenSpinnerProps extends HTMLAttributes<HTMLDivElement>, SpinnerProps {}

const ScreenSpinner: FunctionComponent<ScreenSpinnerProps> = (props: ScreenSpinnerProps) => {
  const { style, className, ...restProps } = props;
  const platform = usePlatform();

  return (
    <PopoutWrapper
      css={classNames(getClassName('ScreenSpinner', platform), className)}
      style={style}
    >
      <div css="ScreenSpinner__container">
        <Spinner {...restProps} />
      </div>
    </PopoutWrapper>
  );
};

ScreenSpinner.defaultProps = {
  size: 'large',
};

export default ScreenSpinner;
