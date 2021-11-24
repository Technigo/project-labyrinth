import React from "react";
import { useSelector } from "react-redux";
import { UsernameScreen } from "../screens/UsernameScreen";
import { GameScreen } from "screens/GameScreen";
import styled from "styled-components/macro";

export const Main = () => {
  const currentScreen = useSelector((store) => store.screen.currentScreen);

  return (
    <MainContainer>
      {currentScreen === "username" && <UsernameScreen />}
      {currentScreen === "game" && <GameScreen />}
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  @media (min-width: 1025px) {
    justify-content: center;
    align-items: center;
  }
`;
