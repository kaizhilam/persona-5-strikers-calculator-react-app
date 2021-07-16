import React from 'react';

interface IInput {
  defaultValue?: string;
  id: string;
  max?: number | string;
  min?: number | string;
  onBlur?: React.EventHandler<any>;
  onClick?: React.EventHandler<any>;
  ref?: any;
  type: any;
  value?: string;
}

export function Input(props: IInput) {
  const { defaultValue, id, max, min, onBlur, onClick, ref, type, value } = props;
  return (
    <input
      defaultValue={defaultValue}
      id={id}
      max={max}
      min={min}
      onBlur={onBlur}
      onClick={onClick}
      name={id}
      ref={ref}
      type={type}
      value={value}
    />
  );
}
