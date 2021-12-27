import React from 'react';
import styled from 'styled-components';
export const Footer = () => {
  return (
    <StyledFooter>
      <h1>
        © Hedvig Mejstedt | Team Lions <span aria-label="lion">🦁</span> |
        Technigo
      </h1>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  /* border: 5px dotted black; */
  backdrop-filter: blur(4px);
  background-color: #ff895e57;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
`;
