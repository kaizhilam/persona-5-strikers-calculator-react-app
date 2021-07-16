import React from 'react';
import { useContext } from 'react';
import { Button } from '../../components';
import { AppContext } from '../AppContext';

export function CalculateButton() {
  const { calculate } = useContext(AppContext);
  const handleClick = () => {
    calculate();
  };
  return <Button label="Calculate" id="calculateButton" onClick={handleClick} />;
}
