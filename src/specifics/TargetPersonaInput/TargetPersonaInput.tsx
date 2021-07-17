import React, { useContext, useEffect, useRef, useState } from 'react';
import { Select } from '../../components';
import { compare, SELECT_EMPTY } from '../../utils';
import { AppContext } from '../AppContext';

interface ITargetPersona {
  setTargetPersona: (value: string) => void;
}

export function TargetPersonaInput(props: ITargetPersona) {
  const { setTargetPersona } = props;

  const { persona, jokerLevel } = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const options = persona
    .filter((p) => p.arcana !== 'Treasure')
    .filter((p) => p.level <= jokerLevel)
    .map((p) => {
      return {
        label: p.name,
        value: p.name,
      };
    })
    .sort((a, b) => compare(a, b, 'value'));
  options.unshift({
    label: SELECT_EMPTY,
    value: SELECT_EMPTY,
  });

  const selectRef = useRef(null);

  const onBlur = () => {
    if (selectRef.current.value === SELECT_EMPTY) {
      setErrorMessage('Cannot be empty');
      setTargetPersona(undefined);
    } else {
      setErrorMessage('');
      setTargetPersona(selectRef.current.value);
    }
  };

  useEffect(() => {
    selectRef.current.value = SELECT_EMPTY;
    setErrorMessage(undefined);
    setTargetPersona(undefined);
  }, [jokerLevel]);

  return (
    <Select
      label="Target persona"
      id="targetPersona"
      onBlur={onBlur}
      options={options}
      errorMessage={errorMessage}
      selectRef={selectRef}
    />
  );
}
