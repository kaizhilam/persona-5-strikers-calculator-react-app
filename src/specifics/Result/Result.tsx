import React from 'react';
import { Paragraph } from '../../components';

interface IResult {
  result: string[];
}

export function Result(props: IResult) {
  const { result } = props;
  let toReturn = 'Result';
  if (result.length === 1) {
    toReturn = `Result: ${result}`;
  } else if (result.length > 1) {
    const resultToDisplay = result.join('→');
    toReturn = `Result: ${resultToDisplay}`;
  }
  return <Paragraph>{toReturn}</Paragraph>;
}
