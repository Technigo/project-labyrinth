import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  width: 200px;
  background-color: black;
  padding: 15px;
  font-family: 'Press Start 2P', cursive;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border: none;
  border-radius: 20px;
  margin: 15px;
`

export const Button = props => {
    const { text, onButtonClick } = props;
    
    return (
      <StyledButton 
            onClick={onButtonClick}>
            {text}
      </StyledButton>
  ) 
}

export default Button;