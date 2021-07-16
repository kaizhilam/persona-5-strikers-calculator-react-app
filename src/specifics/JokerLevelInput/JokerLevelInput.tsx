import React from 'react';
import { useContext, useEffect } from 'react';
import { NumberInput } from '../../components';
import { AppContext } from '../AppContext';

export function JokerLevelInput() {
  const max = 99;
  const min = 1;
  const { setJokerLevel } = useContext(AppContext);

  const handleBlur = (e) => {
    if (e.target.value < min) {
      e.target.value = min;
    }
    if (e.target.value > max) {
      e.target.value = max;
    }
    setJokerLevel(parseInt(e.target.value));
  };

  useEffect(() => {
    setJokerLevel(max);
  }, []);

  return (
    <NumberInput
      label={"Joker's level"}
      id="jokerLevel"
      onBlur={handleBlur}
      max={max}
      min={min}
      value={min}
      defaultValue={max}
    />
  );
}
