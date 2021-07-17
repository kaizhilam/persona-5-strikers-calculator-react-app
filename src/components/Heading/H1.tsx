import React from 'react';
import { StyledH1 } from './H1.style';

interface IH1 {
  children: React.ReactNode;
}

export function H1(props: IH1) {
  const { children } = props;
  return <StyledH1>{children}</StyledH1>;
}
