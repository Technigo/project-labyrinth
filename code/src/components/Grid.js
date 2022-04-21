import React from "react";
import { StyledGrid, StyledGridItem } from "styles";
import { useSelector } from "react-redux";

const Grid = () => {
  const coordinates = useSelector((state) => state.game.gameObject.coordinates);
  const x = Number(coordinates.split(",")[0]);
  const y = Number(coordinates.split(",")[1]);

  return (
    <StyledGrid>
      <StyledGridItem color={x === 2 && y === 3 ? "#7d553d" : "transparent"} />
      <StyledGridItem color={x === 1 && y === 3 ? "#7d553d" : "transparent"} />
      <StyledGridItem color={x === 0 && y === 3 ? "#7d553d" : "transparent"} />
      <StyledGridItem color={x === -1 && y === 3 ? "#7d553d" : "transparent"} />
      <StyledGridItem color={x === -2 && y === 3 ? "#7d553d" : "transparent"} />

      <StyledGridItem color={x === 2 && y === 2 ? "#7d553d" : "transparent"} />
      <StyledGridItem color={x === 1 && y === 2 ? "#7d553d" : "transparent"} />
      <StyledGridItem color={x === 0 && y === 2 ? "#7d553d" : "transparent"} />
      <StyledGridItem color={x === -1 && y === 2 ? "#7d553d" : "transparent"} />
      <StyledGridItem color={x === -2 && y === 2 ? "#7d553d" : "transparent"} />

      <StyledGridItem color={x === 2 && y === 1 ? "#7d553d" : "transparent"} />
      <StyledGridItem color={x === 1 && y === 1 ? "#7d553d" : "transparent"} />
      <StyledGridItem color={x === 0 && y === 1 ? "#7d553d" : "transparent"} />
      <StyledGridItem color={x === -1 && y === 1 ? "#7d553d" : "transparent"} />
      <StyledGridItem color={x === -2 && y === 1 ? "#7d553d" : "transparent"} />

      <StyledGridItem color={x === 2 && y === 0 ? "#7d553d" : "transparent"} />
      <StyledGridItem color={x === 1 && y === 0 ? "#7d553d" : "transparent"} />
      <StyledGridItem color={x === 0 && y === 0 ? "#7d553d" : "transparent"} />
      <StyledGridItem color={x === -1 && y === 0 ? "#7d553d" : "transparent"} />
      <StyledGridItem color={x === -2 && y === 0 ? "#7d553d" : "transparent"} />
    </StyledGrid>
  );
};

export default Grid;
