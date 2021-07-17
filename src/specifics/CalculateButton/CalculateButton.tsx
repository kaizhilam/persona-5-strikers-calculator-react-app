import React from 'react';
import { useContext } from 'react';
import { Button } from '../../components';
import { AppContext } from '../AppContext';

interface ICalculateButton {
  setResult: React.Dispatch<React.SetStateAction<any[]>>;
}

export function CalculateButton(props: ICalculateButton) {
  const { setResult } = props;

  const { persona, jokerLevel, currentPersona: contextCurrentPersona, targetPersona } = useContext(AppContext);

  const buildPersona = (currentPersona, targetPersona, stack, index = 0) => {
    if (index === 0) stack.push(targetPersona);
    let result;
    const targetPersonaProfile = persona.find((p) => p.name === targetPersona);
    if (!targetPersonaProfile || !currentPersona || !targetPersona) return undefined;
    const targetPersonaFusion = targetPersonaProfile.fusions;
    targetPersonaFusion.forEach((fusion) => {
      fusion.forEach((fusionPersona) => {
        if (!stack.includes(fusionPersona.name) && jokerLevel >= fusionPersona.level) {
          stack.push(fusionPersona.name);
        }
      });
      result = result ? result : fusion.find((persona) => persona.name === currentPersona);
    });
    if (result) {
      return targetPersona;
    } else {
      const newIndex = index + 1;
      return buildPersona(currentPersona, stack[newIndex], stack, newIndex);
    }
  };

  const calculate = () => {
    const res = [];
    let currentPersona = contextCurrentPersona;
    while (currentPersona !== targetPersona) {
      currentPersona = buildPersona(currentPersona, targetPersona, []);
      if (!currentPersona) {
        break;
      }
      res.push(currentPersona);
    }
    res.unshift(contextCurrentPersona);
    setResult(res);
  };

  return <Button label="Calculate" id="calculateButton" onClick={calculate} />;
}
