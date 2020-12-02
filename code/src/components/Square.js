import React from "react";
import styled from "styled-components/macro";

import { useSelector } from "react-redux";

export const Square = ({ coordinates }) => {
  const gamePosition = useSelector(
    store => store.game.currentGameState.gameData.coordinates
  );
  return (
    <MapSquare coordinates={coordinates} gamePosition={gamePosition}>
      <MapSquareP coordinates={coordinates} gamePosition={gamePosition}>
        {coordinates}{" "}
        {coordinates === gamePosition && gamePosition === "1,3" ? (
          <Span>Finish</Span>
        ) : coordinates === gamePosition && gamePosition === "0,0" ? (
          <Span>Start</Span>
        ) : (
          ""
        )}
      </MapSquareP>
    </MapSquare>
  );
};

const MapSquare = styled.div`
  border: 1px solid black;
  padding: 5px;
  color: ${props =>
    props.coordinates === props.gamePosition //this can be removed
      ? "black"
      : "black"};
  font-weight: 500;
  background: ${props =>
    props.coordinates === props.gamePosition
      ? "rgba(0, 0, 0, 0.0)"
      : "rgba(0, 0, 0, 0.9)"};
`;

const MapSquareP = styled.p`
  padding: 0 3px;
  background-color: ${props =>
    props.coordinates === props.gamePosition ? "#ffffffa3" : ""};
  display: inline;
`;

const Span = styled.span`
  background-color: #ffffffa3;
  font-weight: bold;
`;
