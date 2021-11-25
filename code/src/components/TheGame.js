import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "reducers/game";

const TheGame = () => {
  const { description, coordinates, actions } = useSelector(
    (store) => store.game.currentPosition
  );

  const game = useSelector((store) => store.game.currentPosition);
  const dispatch = useDispatch();

  const handleButtonClick = (type, direction) => {
    dispatch(nextStep(type, direction));
  };

  const AlternativesCard = ({ description, type, direction }) => (
    <div>
      <p>{description}</p>
      <button onClick={() => handleButtonClick(type, direction)}>
        {type} {direction}
      </button>
    </div>
  );

  const handleRestart = () => {
    dispatch(game.actions.restart());
  };

  return (
    <section>
      <h1>{description}</h1>
      <p>{coordinates}</p>
      {game?.actions?.length === 0 && <h3>Yay you made it out!</h3> && (
        <button onClick={handleRestart}>Lets go again!</button>
      )}
      {game?.actions?.length > 0 &&
        actions.map((item) => (
          <AlternativesCard key={item.direction} {...item} />
        ))}
    </section>
  );
};

export default TheGame;
