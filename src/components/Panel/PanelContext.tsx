import createScopedElement from '../../createScopedElement';
import React from 'react';

export interface PanelContextProps {
  panel?: string;
}

export const PanelContext = React.createContext<PanelContextProps>({});
