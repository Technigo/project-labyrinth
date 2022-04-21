import React from "react";
import { StyledGrid, StyledGridItem } from "styles";
import { useSelector } from "react-redux";

const Grid = () => {
  const coordinates = useSelector((state) => state.game.gameObject.coordinates);
  const history = useSelector((state) => state.game.history);
  const coordHist = history.map((item) => item.coordinates);
  console.log("coordHist.includes", coordHist.includes("0,0"));
  const x = Number(coordinates.split(",")[0]);
  const y = Number(coordinates.split(",")[1]);

  return (
    <StyledGrid>
      <StyledGridItem
        color={
          x === -2 && y === 3
            ? "#7d553d"
            : coordHist.includes("-2,3")
            ? "#977764"
            : "transparent"
        }
      />
      <StyledGridItem
        color={
          x === -1 && y === 3
            ? "#7d553d"
            : coordHist.includes("-1,3")
            ? "#977764"
            : "transparent"
        }
      />
      <StyledGridItem
        color={
          x === 0 && y === 3
            ? "#7d553d"
            : coordHist.includes("0,3")
            ? "#977764"
            : "transparent"
        }
      />
      <StyledGridItem
        color={
          x === 1 && y === 3
            ? "#7d553d"
            : coordHist.includes("1,3")
            ? "#977764"
            : "transparent"
        }
      />
      <StyledGridItem
        color={
          x === 2 && y === 3
            ? "#7d553d"
            : coordHist.includes("2,3")
            ? "#977764"
            : "transparent"
        }
      />

      <StyledGridItem
        color={
          x === -2 && y === 2
            ? "#7d553d"
            : coordHist.includes("-2,2")
            ? "#977764"
            : "transparent"
        }
      />
      <StyledGridItem
        color={
          x === -1 && y === 2
            ? "#7d553d"
            : coordHist.includes("-1,2")
            ? "#977764"
            : "transparent"
        }
      />
      <StyledGridItem
        color={
          x === 0 && y === 2
            ? "#7d553d"
            : coordHist.includes("0,2")
            ? "#977764"
            : "transparent"
        }
      />
      <StyledGridItem
        color={
          x === 1 && y === 2
            ? "#7d553d"
            : coordHist.includes("1,2")
            ? "#977764"
            : "transparent"
        }
      />
      <StyledGridItem
        color={
          x === 2 && y === 2
            ? "#7d553d"
            : coordHist.includes("2,2")
            ? "#977764"
            : "transparent"
        }
      />

      <StyledGridItem
        color={
          x === -2 && y === 1
            ? "#7d553d"
            : coordHist.includes("-2,1")
            ? "#977764"
            : "transparent"
        }
      />
      <StyledGridItem
        color={
          x === -1 && y === 1
            ? "#7d553d"
            : coordHist.includes("-1,1")
            ? "#977764"
            : "transparent"
        }
      />
      <StyledGridItem
        color={
          x === 0 && y === 1
            ? "#7d553d"
            : coordHist.includes("0,1")
            ? "#977764"
            : "transparent"
        }
      />
      <StyledGridItem
        color={
          x === 1 && y === 1
            ? "#7d553d"
            : coordHist.includes("1,1")
            ? "#977764"
            : "transparent"
        }
      />
      <StyledGridItem
        color={
          x === 2 && y === 1
            ? "#7d553d"
            : coordHist.includes("2,1")
            ? "#977764"
            : "transparent"
        }
      />

      <StyledGridItem
        color={
          x === -2 && y === 0
            ? "#7d553d"
            : coordHist.includes("-2,0")
            ? "#977764"
            : "transparent"
        }
      />
      <StyledGridItem
        color={
          x === -1 && y === 0
            ? "#7d553d"
            : coordHist.includes("-1,0")
            ? "#977764"
            : "transparent"
        }
      />
      <StyledGridItem
        color={
          x === 0 && y === 0
            ? "#7d553d"
            : coordHist.includes("0,0")
            ? "#977764"
            : "transparent"
        }
      />
      <StyledGridItem
        color={
          x === 1 && y === 0
            ? "#7d553d"
            : coordHist.includes("1,0")
            ? "#977764"
            : "transparent"
        }
      />
      <StyledGridItem
        color={
          x === 2 && y === 0
            ? "#7d553d"
            : coordHist.includes("2,0")
            ? "#977764"
            : "transparent"
        }
      />
    </StyledGrid>
  );
};

export default Grid;
