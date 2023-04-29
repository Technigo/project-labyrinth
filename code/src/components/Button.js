/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components/macro';

export const Button = ({ children, onClick }) => {
  // children prop will be the text displayed on the button
  // The onClick prop takes a function that will be called when
  // the button is clicked
  return (
    <StyledBtn
      type="button"
      onClick={onClick}>
      {children}
    </StyledBtn>
  )
}

const StyledBtn = styled.button`
background: #9E4437; 
padding: 20px; 
color: white;
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

&:hover {
  cursor: pointer;
  background-color: salmon
}
`

// We dispatch our thunk in this component
// The startGame needs to be invoked because it returns the inner part of the function
// which then redux will go and fire more dispatches and dispatch all of those actions
// that we just wrote.