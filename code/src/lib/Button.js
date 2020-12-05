import React from "react";
import { fetchGame } from "../reducers/fetch";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const StartButton = styled.button`
  // display: flex;
  // justify-content: center;
  border-radius: 5px;
  border: none;
  background-color: #d9d0c1;
  width: 100px;
  height: 50px;
  font-family: "Caveat", cursive;
  font-size: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchGame());
  };

  return (
    <ButtonContainer>
      <StartButton type="button" onClick={handleClick}>
        Start Game!
      </StartButton>
    </ButtonContainer>
  );
};
