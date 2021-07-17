import React from 'react';
import { Container } from '../../utils';
import { StyledButton } from './Button.style';
interface IButton {
  id: string;
  label: string;
  onClick?: () => void;
}

export function Button(props: IButton) {
  const { id, label, onClick } = props;
  return (
    <Container>
      <StyledButton id={id} onClick={onClick}>
        {label}
      </StyledButton>
    </Container>
  );
}
