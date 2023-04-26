import React from 'react';
import styled from 'styled-components/macro';

const StyledButton = styled.button`
    color: black;
    font-size: 14px;
    width: fit-content;
    border: 2px solid black;
    border-radius: 3px;
    margin-right: 10px; 
    &:hover,
    &:focus {
        background-color: violet;
    }
`

export const Button = ({ type, buttonText, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>{buttonText}</StyledButton>
  )
}