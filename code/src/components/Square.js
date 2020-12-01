import React from "react";
import styled from "styled-components/macro";

import { useSelector } from "react-redux";

export const Square = ({ value }) => {
  const gamePosition = useSelector(
    store => store.game.currentGameState.gameData.coordinates
  );
  return (
    <MapSquare value={value} gamePosition={gamePosition}>
      {value}
    </MapSquare>
  );
};

const MapSquare = styled.div`
  border: 1px solid black;
  color: ${props => (props.value === props.gamePosition ? "red" : "black")};
`;
