import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

// -- reducers
import { fetchGame } from "../reducers/fetch";

// --- STYLED COMPONENTS ---

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StartButton = styled.button`
  border-radius: 5px;
  border: none;
  background-color: #d9d0c1;
  width: 100px;
  height: 50px;
  font-family: "Caveat", cursive;
  font-size: 20px;
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
