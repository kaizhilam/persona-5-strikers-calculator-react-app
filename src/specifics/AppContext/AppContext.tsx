import React from 'react';

interface IAppContext {
  persona?: any;
  setTargetPersona?: any;
  setJokerLevel?: any;
  setCurrentPersona?: any;
  calculate?: any;
  data?: any;
}

export const AppContext = React.createContext<IAppContext>({});

export const AppContextProvider = AppContext.Provider;
