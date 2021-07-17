import React from 'react';
import { Row } from 'styled-grid-system-component';
import { StyledLabel, StyledValidation, Container, StyledColumn } from '../../utils';
import { StyledInput } from './Input.style';

interface IInput {
  errorMessage?: string;
  id: string;
  label: string;
  max?: number | string;
  min?: number | string;
  onBlur?: React.EventHandler<any>;
  onClick?: React.EventHandler<any>;
  inputRef?: any;
  type?: any;
}

export function Input(props: IInput) {
  const { errorMessage, id, label, min, max, onBlur, inputRef, type = 'text' } = props;
  return (
    <Container>
      <Row>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
      </Row>
      <Row>
        <StyledColumn lg="6" xl="6">
          <StyledInput id={id} onBlur={onBlur} min={min} max={max} ref={inputRef} type={type}></StyledInput>
        </StyledColumn>
      </Row>
      <Row>{errorMessage && <StyledValidation>{errorMessage}</StyledValidation>}</Row>
    </Container>
  );
}
