import React from 'react';
import { Container } from '../../utils';
import { StyledParagraph } from './Paragraph.style';

interface IParagraph {
  children: React.ReactNode;
}

export function Paragraph(props: IParagraph) {
  const { children } = props;
  return (
    <Container>
      <StyledParagraph>{children}</StyledParagraph>
    </Container>
  );
}
