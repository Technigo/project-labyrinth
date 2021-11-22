import React from "react";
import { StartGameButton } from "components/StartGameButton";
import styled from "styled-components";

const StartPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  position: absolute;
  top: 25%;
  left: 10%;
  right: 10%;
  border-radius: 5px;
  padding: 20px;
`;

const WelcomeMessage = styled.h1`
  font-family: "Press Start 2P";
  text-align: center;
`;

const StartPage = () => {
  return (
    <>
      <StartPageContainer>
        <WelcomeMessage>
          Welcome to the Labyrinth! Do you dare go on an adventure?
        </WelcomeMessage>
        <StartGameButton />
      </StartPageContainer>
    </>
  );
};

export default StartPage;
