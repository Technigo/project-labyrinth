import React from "react";
import { useDispatch } from "react-redux";
import { fetchGame } from "reducers/start";
import styled from "styled-components";
import { useNavigate } from "react-router";
// import music from "../assets/background-music.mp3";

export const StartButton = styled.button`
  font-family: "Press Start 2P";
  font-size: 16px;
  background: #2f4858;
  border-bottom: 4px inset rgba(0, 0, 0, 0.5);
  border-left: 4px inset rgba(0, 0, 0, 0.5);
  border-right: 4px inset rgba(255, 255, 255, 0.5);
  border-top: 4px inset rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-block;
  margin: 1rem;
  min-width: 200px;
  padding: 0.5rem;
  text-transform: uppercase;
  width: auto;
  &:hover {
    background: #bcbcbc;
  }
`;

const StartGameButton = () => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const handleButtonClick = () => {
  //     navigate("game");
  //   };
  //   let audio = new Audio(music);

  //   const startMusic = () => {
  //     audio.play();
  //   };

  return (
    <StartButton
      type="button"
      onClick={() => {
        dispatch(fetchGame());
        // handleButtonClick();
        // startMusic();
      }}
    >
      Start
    </StartButton>
  );
};

export default StartGameButton;
