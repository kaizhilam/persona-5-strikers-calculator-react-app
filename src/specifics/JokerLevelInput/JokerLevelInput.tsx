import React, { useEffect, useRef, useState } from 'react';
import { Input } from '../../components';

interface IJokerLevelInput {
  setJokerLevel: (value: number) => void;
}

export function JokerLevelInput(props: IJokerLevelInput) {
  const { setJokerLevel } = props;
  const [errorMessage, setErrorMessage] = useState(undefined);
  const onBlur = (e) => {
    const value = parseInt(e.target.value);
    if (value > 99 || value < 1) {
      setErrorMessage('Value must be in between 1 and 99');
    } else {
      setErrorMessage(undefined);
      setJokerLevel(parseInt(e.target.value));
    }
  };
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.value = 99;
  }, []);
  return (
    <Input
      id="jokerLevelInput"
      label="Joker's level"
      max={99}
      min={1}
      type="number"
      errorMessage={errorMessage}
      onBlur={onBlur}
      inputRef={inputRef}
    />
  );
}
