import React from "react";
import styled from "styled-components/macro";

export const Button = ({ text, onButtonClick, buttonDisabled, buttonType }) => {
  return (
    <ActionButton
      onClick={onButtonClick}
      disabled={buttonDisabled}
      type={buttonType}
    >
      {text}
    </ActionButton>
  );
};

const ActionButton = styled.button`
  padding: 8px;
  margin: 6px 0px;
  width: 120px;
  background: ${props => props.background || "#b97597"};
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    background: #5865ac;
    color: #e3e5f1;
    cursor: pointer;
  }
  &:disabled {
    background: #cfd0d0;
    color: #aaaaaa;
    cursor: not-allowed;
  }
  &:active {
    background-color: #b97597;
    box-shadow: 0 10px #666;
    transform: translateY(5px);
  }
`;
