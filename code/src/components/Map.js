import React from "react";
import styled from "styled-components/macro";

import { useSelector } from "react-redux";
import { Square } from "./Square";

export const Map = () => {
  const gamePosition = useSelector(
    store => store.game.currentGameState.gameData.coordinates
  );
  const squares = useSelector(store => store.game.squares);
  console.log(gamePosition);

  return (
    <MapContainer>
      {squares.map((value, index) => (
        <Square key={index} value={value} />
      ))}

      {/* <div className={gamePosition === "0,3" ? "red" : "black"}>0,3</div>
      <div className={gamePosition === "1,3" ? "red" : "black"}>
        1,3 (Finish)
      </div>
      <div className={gamePosition === "0,2" ? "red" : "black"}>0,2</div>
      <div className={gamePosition === "1,2" ? "red" : "black"}>1,2</div>
      <div className={gamePosition === "0,1" ? "red" : "black"}>0,1</div>
      <div className={gamePosition === "1,1" ? "red" : "black"}>1,1</div>
      <div className={gamePosition === "0,0" ? "red" : "black"}>
        0,0 (Start)
      </div>
      <div className={gamePosition === "1,0" ? "red" : "black"}>1,0</div> */}
    </MapContainer>
  );
};

const MapContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 100%;
  border: solid 2px #000000;
  height: 300px;
`;
