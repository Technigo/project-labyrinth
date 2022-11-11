/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGameSteps } from 'reducers/gamestate';

const Game = () => {
  const { description, actions } = useSelector((store) => store.gameState.stage)
  console.log('description', description)
  console.log('actions', actions)
  const dispatch = useDispatch()
  const userName = useSelector((store) => store.gameState.username);

  const onNextAction = (type, direction) => {
    dispatch(fetchGameSteps(type, direction));
  }

  return (
    <>
      <h3>Here we go {userName}</h3>
      <h3>{description}</h3>
      {actions && actions.map((action) => {
        return (
          <div key={action.description}>
            <h3>{action.description}</h3>
            {action.direction === 'North' && <button type="button" className="north" onClick={() => onNextAction(action.type, action.direction)}>north</button>}
            {action.direction === 'West' && <button type="button" className="west" onClick={() => onNextAction(action.type, action.direction)}>west</button>}
            {action.direction === 'South' && <button type="button" className="south" onClick={() => onNextAction(action.type, action.direction)}>south</button>}
            {action.direction === 'East' && <button type="button" className="east" onClick={() => onNextAction(action.type, action.direction)}>east</button>}
          </div>
        )
      })}
    </>
  )
};

export default Game;