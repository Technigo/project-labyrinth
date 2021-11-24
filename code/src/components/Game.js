import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { continueGame } from "../reducers/game";

export const Game = () => {
  const { description, coordinates, actions } = useSelector(
    (store) => store.game.currentPosition
  );

  const dispatch = useDispatch();

  const handleButtonClick = (type, direction) => {
    dispatch(continueGame(type, direction));
  };

  const ActionCard = ({ description, type, direction }) => (
    <div className="action-card">
      <p>{description}</p>
      <button onClick={() => handleButtonClick(type, direction)}>
        {type} {direction.toLowerCase()}
      </button>
    </div>
  );

  return (
    <>
      <div>
        <p>Coordinates: {coordinates}</p>
        <h1>{description}</h1>
        {actions.length === 0 && <h3>Yay, you made it out!</h3>}
        {actions.length > 0 &&
          actions.map((item) => <ActionCard key={item.direction} {...item} />)}
      </div>
    </>
  );
};
