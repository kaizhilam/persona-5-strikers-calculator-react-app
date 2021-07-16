import React from 'react';

interface ISelect {
  id: string;
  label: string;
  onBlur?: (e) => void;
  options: any[];
  ref?: any;
}
export function Select(props: ISelect) {
  const { id, label, onBlur, options, ref } = props;

  const displayOptions = options.map((option, index) => {
    const { value, label: optionLabel } = option;
    return (
      <option value={value} key={`id-${index}`}>
        {optionLabel}
      </option>
    );
  });

  return (
    <>
      <label htmlFor={id}>{`${label}: `}</label>
      <select name={id} id={id} onBlur={onBlur} ref={ref}>
        {displayOptions}
      </select>
    </>
  );
}
