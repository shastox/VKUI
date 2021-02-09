import createScopedElement from '../../createScopedElement';
import React, { FC, HTMLAttributes, ReactNode, useContext, useEffect } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import usePlatform from '../../hooks/usePlatform';
import withAdaptivity, { AdaptivityProps, ViewHeight, ViewWidth } from '../../hoc/withAdaptivity';
import ModalDismissButton from '../ModalDismissButton/ModalDismissButton';

export interface ModalPageProps extends HTMLAttributes<HTMLDivElement>, AdaptivityProps {
  id: string;
  /**
   * Шапка модальной страницы, `<ModalPageHeader />`
   */
  header: ReactNode;
  onClose?: VoidFunction;
  /**
   * Процент, на который изначально будет открыта модальная страница
   */
  settlingHeight?: number;
  /**
   * Если высота контента в модальной странице может поменяться, нужно установить это свойство
   */
  dynamicContentHeight?: boolean;
}

const ModalPage: FC<ModalPageProps> = (props) => {
  const platform = usePlatform();
  const { updateModalHeight } = useContext(ModalRootContext);
  const {
    children,
    className,
    header,
    viewWidth,
    viewHeight,
    sizeX,
    hasMouse,
    onClose,
    id,
    settlingHeight,
    dynamicContentHeight,
    ...restProps
  } = props;

  useEffect(() => {
    updateModalHeight();
  }, [children]);

  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET && (hasMouse || viewHeight >= ViewHeight.MEDIUM);
  const canShowCloseBtn = viewWidth >= ViewWidth.SMALL_TABLET;

  const modalContext = useContext(ModalRootContext);

  return (
    <div
      {...restProps}
      css={classNames(getClassName('ModalPage', platform), className, `ModalPage--sizeX-${sizeX}`, {
        'ModalPage--desktop': isDesktop,
      })}
    >
      <div css="ModalPage__in-wrap">
        <div css="ModalPage__in">
          <div css="ModalPage__header">
            {header}
          </div>

          <div css="ModalPage__content-wrap">
            <div css="ModalPage__content">
              <div css="ModalPage__content-in">
                {children}
              </div>
            </div>
          </div>
          {canShowCloseBtn && <ModalDismissButton onClick={onClose || modalContext.onClose} />}
        </div>
      </div>
    </div>
  );
};

ModalPage.defaultProps = {
  settlingHeight: 75,
};

export default withAdaptivity(ModalPage, {
  viewWidth: true,
  viewHeight: true,
  sizeX: true,
  hasMouse: true,
});
