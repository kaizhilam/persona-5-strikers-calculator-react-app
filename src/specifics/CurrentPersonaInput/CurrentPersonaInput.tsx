import React from 'react';
import { useContext } from 'react';
import { Select } from '../../components';
import { compare } from '../../utils';
import { AppContext } from '../AppContext';

export function CurrentPersonaInput() {
  const { setCurrentPersona, persona } = useContext(AppContext);
  const handleBlur = (e) => {
    setCurrentPersona(e.target.value);
  };
  const options = persona
    .filter((p) => p.arcana !== 'Treasure')
    .map((p) => {
      return {
        label: p.name,
        value: p.name,
      };
    })
    .sort((a, b) => compare(a, b, 'value'));
  options.unshift({
    label: '---',
    value: '---',
  });
  return <Select label="Current persona" id="currentPersona" options={options} onBlur={handleBlur} />;
}
