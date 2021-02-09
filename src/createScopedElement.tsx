import React from 'react';

(window as any).createScopedElement = ((...args: any[]) => {
  const props = args[1];
  if (props && props.className) {
    props.className = (props.className as string)
      .split(/\s+/g)
      .map((cn) => cn.match(/^[A-Z]/) ? `vkui__vkui__${cn}` : cn)
      .join(' ');
  }
  return (React.createElement as any)(...args);
}) as typeof React.createElement;
