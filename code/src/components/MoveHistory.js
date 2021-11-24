import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quest } from "reducers/quest";

const Move = ({ move, direction }) => {
  return (
    <div style={{ border: "1px solid #eee" }}>
      <div>coordinates: {move.coordinates}</div>
      <p>{move.description}</p>
      <p>chosen path: {direction}</p>
    </div>
  );
};

export const MoveHistory = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  let moves = useSelector((state) => state.quest.items.slice(0, state.quest.items.length - 1));
  let movementHistory = useSelector((state) => state.quest.moveHistory);
  console.log("moverhistory array", movementHistory);

  // useEffect(() => {

  // }, []);

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
      <div>
        <button onClick={onHistoryButtonClick}>History</button>
      </div>
    );
  } else if (toggle === true) {
    return (
      <>
        <div>
          <button onClick={onHistoryButtonClick}>History</button>
        </div>
        <div>
          {moves.map((move, i) => (
            <Move key={i} move={move} direction={movementHistory[i]} />
          ))}
        </div>
      </>
    );
  }
};
