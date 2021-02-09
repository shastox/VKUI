import React from 'react';

const hasTransformable = /\b(?=[A-Z])/g;
const cache: any = {};
function createScopedElement(el: any, props: any) {
  let args = arguments;

  if (!props || !props.css) {
    return React.createElement.apply(undefined, args);
  }

  let argsLength = args.length;
  let createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = args[0];

  cache[props.css] = cache[props.css] || props.css.replace(hasTransformable, 'vkui__vkui__');
  props.className = cache[props.css] + (props.className || '');
  props.css = null;
  createElementArgArray[1] = props;

  for (let i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }

  return React.createElement.apply(null, createElementArgArray);
};
createScopedElement.Fragment = React.Fragment;

export default createScopedElement;
