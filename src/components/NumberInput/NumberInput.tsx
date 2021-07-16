import { INPUT_TYPE } from '../../utils';
import { Input } from '../Input';
import React from 'react';

interface INumberInput {
  defaultValue: number | string;
  id: string;
  label: string;
  max: number | string;
  min: number | string;
  onBlur: (e) => void;
  ref?: any;
  value?: number | string;
}

export function NumberInput(props: INumberInput) {
  const { defaultValue, id, label, max, min, onBlur, ref } = props;
  return (
    <>
      <label htmlFor={id}>{`${label}: `}</label>
      <br />
      <Input
        type={INPUT_TYPE.NUMBER}
        id={id}
        onBlur={onBlur}
        max={max}
        min={min}
        ref={ref}
        defaultValue={defaultValue.toString()}
      />
    </>
  );
}
