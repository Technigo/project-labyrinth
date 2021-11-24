import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { game } from "reducers/game";

const History = () => {
  const history = useSelector((store) => store.game.history);
  const initialState = useSelector((store) => store.game.initialState);
  const dispatch = useDispatch();

  const onRestart = () => {
    dispatch(
      game.actions.restart({
        initialState,
      })
    );
  };

  return (
    <div>
      <h1>You Made it!!</h1>
      <p>{history.map((item) => item.description)}</p>
      <button onClick={() => onRestart()}>Play again</button>
    </div>
  );
};

export default History;
