import React from 'react';

interface IH1 {
  children: React.ReactNode;
}

export function H1(props: IH1) {
  const { children } = props;
  return <h1>{children}</h1>;
}
