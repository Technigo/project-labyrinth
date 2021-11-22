import React from "react";
import StartGameButton from "components/StartGameButton";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff56;
  backdrop-filter: blur(5px);
  position: absolute;
  top: 20%;
  left: 10%;
  right: 10%;
  border-radius: 5px;
  padding: 20px;
`;

const WelcomeMessage = styled.h1`
  font-family: "Press Start 2P";
  text-align: center;
  line-height: 30px;
`;

const StartPage = () => {
  return (
    <>
      <PageContainer>
        <WelcomeMessage>
          Welcome to the Labyrinth! Do you dare go on an adventure?
        </WelcomeMessage>
        <StartGameButton />
      </PageContainer>
    </>
  );
};

export default StartPage;
