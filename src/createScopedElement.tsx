import React from 'react';

const hasTransformable = /\b[A-Z]/g;
const createScopedElement = (el: any, ...args: any[]) => {
  const props = args[0];
  if (typeof el === 'string' && props && props.className && props.className.match(hasTransformable)) {
    props.className = (props.className as string)
      .split(/\s+/g)
      .map((cn) => cn.match(hasTransformable) ? `vkui__vkui__${cn}` : cn)
      .join(' ');
  }
  return React.createElement(el, ...args);
};
createScopedElement.Fragment = React.Fragment;

export default createScopedElement;
