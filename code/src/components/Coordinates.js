import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CoordinatesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid pink;
`;

const Coordinate = styled.p`
  padding: 10px;
  background: rgba(217, 208, 193, 0.45);
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
`;

export const Coordinates = () => {
  //display the coordinates
  const coordinatesText = useSelector((store) => store.game.play.coordinates);

  return (
    <CoordinatesContainer>
      <Coordinate>coordinates: {coordinatesText}</Coordinate>
    </CoordinatesContainer>
  );
};
