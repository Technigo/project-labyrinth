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
background: green; 
padding: 20px; 
color: white;
`

// We dispatch our thunk in this component
// The startGame needs to be invoked because it returns the inner part of the function
// which then redux will go and fire more dispatches and dispatch all of those actions
// that we just wrote.