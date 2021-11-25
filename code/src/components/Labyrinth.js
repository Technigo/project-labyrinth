import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep } from '../reducers/game';

import './labyrinth.css';

export const Labyrinth = () => {
  const { description, coordinates, actions } = useSelector(
    (store) => store.game.currentPosition
  );
  const dispatch = useDispatch();

  const handleButtonClick = (type, direction) => {
    //call the API, pass along type and dir as part of the body
    dispatch(nextStep(type, direction));
  };

  // This is the alternatives the player can choose from
  const ActionCard = ({ description, type, direction }) => (
    <div className="action-card">
      <p>{description}</p>
      <button onClick={() => handleButtonClick(type, direction)}>
        {type} {direction.toLowerCase()}
      </button>
    </div>
  );

  return (
    <section>
      <div className="description">
        <p>{description}</p>
        {/* <p>{coordinates}</p> */}
      </div>
      {actions.length === 0 && <h3>Yay, you made it out!</h3>}
      {actions.length > 0 &&
        actions.map((item) => <ActionCard key={item.direction} {...item} />)}
    </section>
  );
};
