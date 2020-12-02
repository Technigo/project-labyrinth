import React from "react";
import styled from "styled-components/macro";

import { useSelector } from "react-redux";
import { Square } from "./Square";

export const Map = () => {
  const squares = useSelector(store => store.game.squares);

  return (
    <MapContainer>
      {squares.map((coordinates, index) => (
        <Square key={index} coordinates={coordinates} />
      ))}
    </MapContainer>
  );
};

const MapContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 100%;
  width: 350px;
  border: 2px solid #000;
  height: 350px;
  background-image: url("./assets/game-map.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (min-width: 768px) {
    width: 500px;
    height: 500px;
  }

  @media (min-width: 1024px) {
    width: 600px;
    height: 600px;
  }
`;
