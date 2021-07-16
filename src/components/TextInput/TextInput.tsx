import React from 'react';
import { Input } from '..';
import { INPUT_TYPE } from '../../utils';

interface ITextInput {
  id: string;
  label: string;
  onBlur: () => void;
}

export function TextInput(props: ITextInput) {
  const { id, label, onBlur } = props;
  return (
    <>
      <label htmlFor={id}>{`${label}: `}</label>
      <br />
      <Input type={INPUT_TYPE.TEXT} id={id} onBlur={onBlur} />
    </>
  );
}
