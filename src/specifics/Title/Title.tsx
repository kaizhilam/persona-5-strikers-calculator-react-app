import React from 'react';
import { StyledDiv } from './Title.style';
import { PERSONA_5_STRIKERS_LOGO } from '../../utils';
import { H1 } from '../../components';

export function Title() {
  return (
    <StyledDiv>
      <img src={PERSONA_5_STRIKERS_LOGO} alt="Persona 5 strikers logo" width="55" height="55" />
      <H1>Persona 5 Strikers calculator</H1>
    </StyledDiv>
  );
}
