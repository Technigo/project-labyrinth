import React from "react";

import styled from "styled-components/macro";

export const Textfield = ({title, type, onChange, placeholder, required}) => {

  return (
    <Text 
      type={type} 
      onChange={onChange} 
      placeholder={placeholder} 
      required={required}
    >
      {title}
    </Text>
  )
}

const Text = styled.input`
  color: #00ff7f;
  background-color: transparent;
  font-family: 'Inconsolata', monospace;
  font-size: 26px;
  padding: 10px 20px;
  text-decoration: none;
  border: 1px solid #00ff7f;
  margin-right: 10px;
  transition: 0.3s ease;

  &:focus {
    outline: 2px solid red;
    border: none;
  }

  &:hover {
    background-color: rgb(0, 255, 127, 0.2); 
  }
  `;