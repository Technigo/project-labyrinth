import React from 'react';
import styled from "styled-components";

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

const StyledButton = styled.button`
font-family: 'Press Start 2P', cursive;
font-size: 13px;
color: #fff;
font-weight: 700;
text-transform: uppercase;
background-color: #000;
width: 160px;
margin: 10px;
padding: 8px;
border: none;
border-radius: 20px;
`