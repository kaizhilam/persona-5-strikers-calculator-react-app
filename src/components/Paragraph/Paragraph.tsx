import React from 'react';
interface IParagraph {
  children: React.ReactNode;
}

export function Paragraph(props: IParagraph) {
  const { children } = props;
  return <p>{children}</p>;
}
