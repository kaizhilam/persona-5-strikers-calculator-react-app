import React from 'react';

interface IAppContext {
  persona?: any[];
  jokerLevel?: number;
  skills?: any[];
  currentPersona?: string;
  targetPersona?: string;
}

export const AppContext = React.createContext<IAppContext>({});

export const AppContextProvider = AppContext.Provider;
