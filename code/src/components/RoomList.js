import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import { StartRoom } from "./StartRoom";
import { GameRoom } from "./GameRoom";
import { LoadingIndicator } from "./LoadingIndicator";

export const RoomList = () => {
  const startGame = useSelector((store) => store.game.isGameStarted);

  return (
    <Section>
      {!startGame ? <StartRoom /> : <GameRoom />}
      <LoadingIndicator />
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  

  @media (min-width: 768px) {
    min-height: initial;
  }
`;
