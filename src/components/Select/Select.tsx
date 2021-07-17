import React from 'react';
import { Container, StyledLabel, StyledValidation, StyledColumn } from '../../utils';
import { StyledSelect } from './Select.style';
import { Row } from 'styled-grid-system-component';

interface ISelect {
  errorMessage?: string;
  id: string;
  label: string;
  onBlur?: (e) => void;
  options: any[];
  selectRef?: any;
}
export function Select(props: ISelect) {
  const { errorMessage, id, label, onBlur, options, selectRef } = props;

  const displayOptions = options.map((option, index) => {
    const { value, label: optionLabel } = option;
    return (
      <option value={value} key={`id-${index}`}>
        {optionLabel}
      </option>
    );
  });

  return (
    <Container>
      <Row>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
      </Row>
      <Row>
        <StyledColumn lg="6" xl="6">
          <StyledSelect name={id} id={id} onBlur={onBlur} ref={selectRef}>
            {displayOptions}
          </StyledSelect>
        </StyledColumn>
      </Row>
      <Row>{errorMessage && <StyledValidation>{errorMessage}</StyledValidation>}</Row>
    </Container>
  );
}
