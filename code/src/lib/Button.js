import React from 'react'
import styled from 'styled-components'

export const StyledButton = styled.button`
  background: black;
  color: white;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  font-weight: bold;
  font-size: 18px;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
  outline: none;
  transition: 0.5s;
  :hover {
    box-shadow: 0px 0px 5px 5px lime; 
  }
`

export const Button = ({ text, onButtonClick}) => {
  return (
    <StyledButton onClick={onButtonClick}>
      {text}
    </StyledButton>
  )
}