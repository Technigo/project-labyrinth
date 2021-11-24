import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNextMove } from "../reducers/game"; //fetching the second thunk(fetch-request)

const Maze = () => {
  const { description, coordinates, actions } = useSelector(
    (state) => state.game.gameStatus
  );
  const dispatch = useDispatch();

  const handleButtonClick = (type, direction) => {
    dispatch(fetchNextMove(type, direction));
  };

  const ActionCard = ({ description, type, direction }) => (
    <div>
      <p>{description}</p>
      <button onClick={() => handleButtonClick(type, direction)}>
        {type} {direction.toLowerCase()}
      </button>
    </div>
  );

  return (
    <section>
      <h1>{description}</h1>
      <p>{coordinates}</p>
      {actions.length === 0 && <h3>Wohooo you are free!</h3>}
      {actions.length > 0 &&
        actions.map((item) => <ActionCard key={item.direction} {...item} />)}
    </section>
  );
};

export default Maze;
