import React, { useState } from "react";
import styled from "styled-components";
import { fetchGame, game } from "reducers/game";
import { useDispatch } from "react-redux";
import music from "../assets/background-music.mp3";
import sittingKnight from "../assets/sitting-knight.gif";
import { KnightImg } from "./GamePage";

export const PageContainer = styled.section`
  display: grid;
  background-color: #ffffff56;
  backdrop-filter: blur(5px);
  position: absolute;
  box-sizing: border-box;
  overflow: auto;
  height: 73%;
  top: 5%;
  left: 10%;
  right: 10%;
  border-radius: 5px;
  padding: 10px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
  }
`;

const WelcomeMessage = styled.h1`
  font-family: "Press Start 2P";
  text-align: center;
  line-height: 30px;
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 40px;
  }
`;

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
  &:disabled {
    background: #bcbcbc;
  }
`;

const UserNameInput = styled.input`
  font-family: "Chakra Petch", sans-serif;
  font-size: 20px;
  border-radius: 5px;
  height: 40px;
  border: transparent;
  background-color: #ffffff56;
  backdrop-filter: blur(5px);
  ::placeholder {
    font-family: "Chakra Petch", sans-serif;
    font-style: italic;
  }
  @media (min-width: 768px) {
    width: 45vw;
  }
`;

const StartPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const onNameSubmit = (name) => {
    dispatch(game.actions.setUsername(name));
  };
  const onSetName = (event) => {
    setName(event.target.value);
  };

  let audio = new Audio(music);

  const startMusic = () => {
    audio.play();
    audio.volume = 0.1;
  };

  return (
    <>
      <PageContainer>
        <WelcomeMessage>
          Welcome to the Labyrinth! Do you dare go on an adventure?
        </WelcomeMessage>
        <KnightImg src={sittingKnight} alt="Sitting Knight" />
        <UserNameInput
          type="text"
          value={name}
          placeholder="What's your name, hero?"
          onChange={onSetName}
        />
        <StartButton
          type="button"
          disabled={!name}
          onClick={() => {
            onNameSubmit(name);
            dispatch(fetchGame(name));
            startMusic();
          }}
        >
          Start
        </StartButton>
      </PageContainer>
    </>
  );
};

export default StartPage;
