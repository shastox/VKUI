import React, { createContext, forwardRef, HtmlHTMLAttributes, useContext, useMemo, useState } from 'react';
import { multiRef } from '../../lib/utils';

export const TooltipContainerContext = createContext({
  container: null as (HTMLElement | null),
  fixed: false,
});

export const TooltipContainer = forwardRef<
HTMLDivElement,
HtmlHTMLAttributes<HTMLDivElement> & { fixed?: boolean }
>((props, ref) => {
  const parentFixed = useContext(TooltipContainerContext).fixed;
  const { fixed = parentFixed, ...restProps } = props;
  const [container, setContainer] = useState<HTMLDivElement>(null);
  const containerRef = useMemo(() => multiRef(ref, setContainer as any), [ref]);

  return (
    <div {...restProps} ref={containerRef}>
      <TooltipContainerContext.Provider value={useMemo(() => ({ container, fixed }), [container, fixed])}>
        {props.children}
      </TooltipContainerContext.Provider>
    </div>
  );
});

TooltipContainer.displayName = 'TooltipContainer';
