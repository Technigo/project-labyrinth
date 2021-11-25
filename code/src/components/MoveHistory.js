import React, { useState } from "react";
import { useSelector } from "react-redux";
import { HistoryBtnWrapper, HistoryBtn, HistoryItemsContainer } from "./MainRenderStyling";
import { MiniMap } from "./MiniMap";

const Move = ({ move, direction }) => {
  return (
    <div style={{ borderBottom: "1px solid #3f3e3e", padding: "10px", marginTop: "10px" }}>
      <div>coordinates: {move.coordinates}</div>
      <p>{move.description}</p>
      <p>chosen path: {direction}</p>
    </div>
  );
};

export const MoveHistory = () => {
  const [toggle, setToggle] = useState(false);
  const moves = useSelector((state) => state.quest.items.slice(0, state.quest.items.length - 1));
  const movementHistory = useSelector((state) => state.quest.moveHistory);
  console.log("moverhistory array", movementHistory);

  const onHistoryButtonClick = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  if (moves.length === 0) {
    return null;
  }

  if (toggle === false) {
    return (
      <HistoryBtnWrapper>
        <HistoryBtn onClick={onHistoryButtonClick}>Info</HistoryBtn>
      </HistoryBtnWrapper>
    );
  } else if (toggle === true) {
    return (
      <>
        <HistoryBtnWrapper>
          <HistoryBtn onClick={onHistoryButtonClick}>Info</HistoryBtn>
        </HistoryBtnWrapper>
        <HistoryItemsContainer>
          <MiniMap />
          {moves.map((move, i) => (
            <Move key={i} move={move} direction={movementHistory[i]} />
          ))}
        </HistoryItemsContainer>
      </>
    );
  }
};
