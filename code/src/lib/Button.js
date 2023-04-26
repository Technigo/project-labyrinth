import React from 'react';
import styled from 'styled-components/macro';

const StyledButton = styled.button`
    color: rgb(235, 218, 57);
    background-color: rgb(43, 43, 43); 
    font-size: 17px;
    font-family:  'Source Code Pro', monospace;
    width: fit-content;
    border: 2px dashed white;
    border-radius: 3px;
    margin-right: 10px; 
    &:hover,
    &:focus {
        border-color: rgb(192, 81, 111);
        color: rgb(58, 209, 225);
    }
`

export const Button = ({ type, buttonText, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>{buttonText}</StyledButton>
  )
}