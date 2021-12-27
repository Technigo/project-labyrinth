import React from 'react';
import styled from 'styled-components';
export const Footer = () => {
  return (
    <StyledFooter>
      <h1>
        © Hedvig Mejstedt | Team Lions{' '}
        <span aria-label="lion" role="img">
          🦁
        </span>{' '}
        | Technigo
      </h1>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  font-family: var(--font);
  background-color: #ff885e;
  border-top: 3px solid black;
  text-align: center;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;

  h1 {
    font-size: 1.2em;
  }
`;
