import React from 'react'
import styled from 'styled-components/macro'

const Btn = styled.button.attrs((props) => ({}))`
  padding: 5px 20px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.variantBtn === "red" ? "red" : props.variantBtn === "blue" ? "blue" : "white"};
  color: whitesmoke;
  font-weight: 750;
`;

export const SelectionButton = ({type, children}) => {

  return (
  <Btn variantBtn={type}>{children}</Btn>

  )
}