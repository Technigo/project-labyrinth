import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { executeAction, game } from "../reducers/game";
import { Card } from "lib/Card";

export const Action = ({ description, type, direction }) => {
  const dispatch = useDispatch();

  const username = useSelector((store) => store.game.username);

  const handleOnClick = () => {
    // thunk:
    dispatch(executeAction(username, type, direction));
    // action:
    dispatch(game.actions.setHistory({ type, direction }));
  };

  return (
    <Card
      description={description}
      buttonText={`${type} ${direction}`}
      onClick={handleOnClick}
    />
  );
};
