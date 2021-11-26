import React from "react";
import { useSelector } from "react-redux";
import { UsernameScreen } from "../screens/UsernameScreen";
import { GameScreen } from "screens/GameScreen";
import { OverviewScreen } from "screens/OverviewScreen";
import styled from "styled-components/macro";

export const Main = () => {
  // UseSelector that gets information of what the currentScreen is from the redux store.
  const currentScreen = useSelector((store) => store.screen.currentScreen);

  return (
    // condintional rendering depending of what information is picked up from the redux store.
    <MainContainer>
      {currentScreen === "username" && <UsernameScreen />}
      {currentScreen === "game" && <GameScreen />}
      {currentScreen === "overview" && <OverviewScreen />}
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
