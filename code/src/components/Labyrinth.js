import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextStep } from "../reducers/game";
import { LoadingIndicator } from "./LoadingIndicator";

export const Labyrinth = () => {
  const { description, coordinates, actions } = useSelector(
    (store) => store.game.currentPosition
  );
  const dispatch = useDispatch();

  const handleButtonClick = (type, direction) => {
    dispatch(nextStep(type, direction));
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
      <LoadingIndicator />
      <section className="labyrinth">
        <h1>{description}</h1>
        <p>{coordinates}</p>
        {actions.length === 0 && <h3>Yay you made it out!</h3>}
        {actions.length > 0 &&
          actions.map((item) => <ActionCard key={item.direction} {...item} />)}
      </section>
    </>
  );
};
