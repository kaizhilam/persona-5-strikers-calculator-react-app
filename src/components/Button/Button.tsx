import React from 'react';
import { Input } from '..';
import { INPUT_TYPE } from '../../utils';

interface IButton {
  id: string;
  label: string;
  onClick?: () => void;
}

export function Button(props: IButton) {
  const { id, label, onClick } = props;
  return <Input type={INPUT_TYPE.BUTTON} value={label} id={id} onClick={onClick} />;
}
