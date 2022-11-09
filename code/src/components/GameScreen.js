import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame } from 'reducers/game';
import game from 'reducers/game';

const GameScreen = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.game.response);
  console.log('test', response);
  const actions = useSelector((state) => state.game.response.actions);
  console.log('actions', actions);

  const handleDirectionButtonClick = (direction) => {
    dispatch(game.actions.setDirection(direction));
    dispatch(startGame('action'));
  };

  return (
    <>
      <p>Description: {response.description}</p>
      {response.actions?.map((action) => {
        return (
          <>
            <button
              key={action.description}
              type="button"
              onClick={() => handleDirectionButtonClick(action.direction)}
            >
              {action.direction}
            </button>
            <p>Action description: {action.description}</p>
          </>
        );
      })}
      {/* <button type="button"> test 2</button> */}
    </>
  );
};

export default GameScreen;
