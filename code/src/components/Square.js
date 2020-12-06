import React from "react";
import styled from "styled-components/macro";

import { useSelector } from "react-redux";

export const Square = ({ coordinates }) => {
  const gamePosition = useSelector(
    store => store.game.currentGameState.gameData.coordinates
  );
  const coordinatesArray = useSelector(store => store.game.coordinatesArray);
<<<<<<< HEAD
  // const previousCoordinates = useSelector(
  //   store =>
  //     store.game.positionHistory[positionHistory.length - 1].gamedata
  //       .coordinates
  // );
=======
  const visitedSteps = coordinatesArray.find(item => item === coordinates);
>>>>>>> afda01ef108afe4130fc8e88dae870367d03dff6

  return (
    <MapSquare
      coordinates={coordinates}
      gamePosition={gamePosition}
      coordinatesArray={coordinatesArray}
<<<<<<< HEAD
=======
      visitedSteps={visitedSteps}
>>>>>>> afda01ef108afe4130fc8e88dae870367d03dff6
    >
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
  color: "black";
  font-weight: 500;
  background: ${props =>
<<<<<<< HEAD
    props.coordinates === props.gamePosition || props.gamePosition === "1,3" //props.gamePosition === props.coordinatesArray.includes(props.gamePosition)
=======
    props.coordinates === props.gamePosition ||
    props.coordinates === props.visitedSteps
>>>>>>> afda01ef108afe4130fc8e88dae870367d03dff6
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
