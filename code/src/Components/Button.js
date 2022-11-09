import styled from 'styled-components/macro';
import React from 'react';

const Button = () => {
  return (
    <NavButton />
  );
}
export default Button;

const NavButton = styled.button`
  
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;