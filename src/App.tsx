import React, { useState } from 'react';
import { Page } from './components';
import { CalculateButton, CurrentPersonaInput, JokerLevelInput, Result, TargetPersonaInput, Title } from './specifics';
import { AppContextProvider } from './specifics/AppContext';
import PERSONA_DATA from './data/personaData';

function App() {
  const [result, setResult] = useState([]);

  const [data, setData] = useState({
    persona: PERSONA_DATA.persona,
    skills: PERSONA_DATA.skills,
    jokerLevel: 99,
    currentPersona: undefined,
    targetPersona: undefined,
  });

  const setJokerLevel = (value) => {
    setData({
      ...data,
      jokerLevel: value,
    });
  };

  const setCurrentPersona = (value) => {
    setData({
      ...data,
      currentPersona: value,
    });
  };

  const setTargetPersona = (value) => {
    setData({
      ...data,
      targetPersona: value,
    });
  };

  return (
    <AppContextProvider value={data}>
      <Page>
        <Title />
        <JokerLevelInput setJokerLevel={setJokerLevel} />
        <CurrentPersonaInput setCurrentPersona={setCurrentPersona} />
        <TargetPersonaInput setTargetPersona={setTargetPersona} />
        <CalculateButton setResult={setResult} />
        <Result result={result} />
      </Page>
    </AppContextProvider>
  );
}

export default App;
