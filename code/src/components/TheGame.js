import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "reducers/game";

const TheGame = () => {
  const { description, coordinates, actions } = useSelector(
    (store) => store.game.currentPosition
  );
  //   const game = useSelector((store) => store.game.gameList);
  const dispatch = useDispatch();

  //   const handleButtonClick = (type, direction) => {
  //     dispatch(nextStep(type, direction));
  //   };

  const handleButtonClick = (type, direction) => {
    // call the api, pass along type and direction to use as part of the body
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
    // Two ways of implementing the color change
    // <section className='labyrinth' style={{ background: setBgColor() }}>
    <section>
      <h1>{description}</h1>
      <p>{coordinates}</p>
      {actions.length === 0 && <h3>Yay you made it out!</h3>}
      {actions.length > 0 &&
        actions.map((item) => <ActionCard key={item.direction} {...item} />)}
    </section>
  );
};

export default TheGame;
