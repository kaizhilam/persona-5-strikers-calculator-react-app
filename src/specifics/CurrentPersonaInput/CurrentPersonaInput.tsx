import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { Select } from '../../components';
import { compare, SELECT_EMPTY } from '../../utils';
import { AppContext } from '../AppContext';

interface ICurrentPersonaInput {
  setCurrentPersona: (value: string) => void;
}

export function CurrentPersonaInput(props: ICurrentPersonaInput) {
  const { setCurrentPersona } = props;
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
      setCurrentPersona(undefined);
    } else {
      setErrorMessage('');
      setCurrentPersona(selectRef.current.value);
    }
  };

  useEffect(() => {
    selectRef.current.value = SELECT_EMPTY;
    setCurrentPersona(undefined);
    setErrorMessage(undefined);
  }, [jokerLevel]);

  return (
    <Select
      label="Current persona"
      id="currentPersona"
      options={options}
      onBlur={onBlur}
      errorMessage={errorMessage}
      selectRef={selectRef}
    />
  );
}
