import React from 'react';
import { Row } from 'styled-grid-system-component';
import { StyledColumn } from './Page.style';

interface IContainer {
  children: React.ReactNode;
}

export function Page(props: IContainer) {
  const { children } = props;

  return (
    <Row>
      <StyledColumn xs={12} sm={12} md={12} lg={8} xl={8} lgOffset={2} xlOffset={2}>
        {children}
      </StyledColumn>
    </Row>
  );
}
