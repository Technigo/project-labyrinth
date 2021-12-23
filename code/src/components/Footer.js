import React from 'react';
import styled from 'styled-components';
export const Footer = () => {
  return (
    <StyledFooter>
      <h1>
        © by Hedvig Mejstedt | Team Lions <span aria-label="lion">🦁</span> |
        Technigo
      </h1>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  border: 5px dotted black;
  background-color: var(--main-color);
  text-align: center;
`;
