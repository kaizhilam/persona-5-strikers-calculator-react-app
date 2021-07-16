import React from 'react';
import { Spacer } from './components';
import { CalculateButton, CurrentPersonaInput, JokerLevelInput, Result, TargetPersonaInput, Title } from './specifics';
import { useData } from './hooks/useData';
import { AppContextProvider } from './specifics/AppContext';

function App() {
  const data = useData();
  return (
    <AppContextProvider value={data}>
      <Title />
      <JokerLevelInput />
      <Spacer />
      <CurrentPersonaInput />
      <Spacer />
      <TargetPersonaInput />
      <Spacer />
      <CalculateButton />
      <Spacer />
      <Result />
    </AppContextProvider>
  );
}

export default App;
