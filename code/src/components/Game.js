import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGameSteps } from 'reducers/game';

const Games = () => {
  const { description, actions } = useSelector((store) => store.game.stage)
  console.log('description', description)
  console.log('actions', actions)
  const dispatch = useDispatch()
  const userName = useSelector((store) => store.game.username);

  const onNextAction = (type, direction) => {
    dispatch(fetchGameSteps(type, direction));
  }

  return (
    <div>
      <div>Player {userName}</div>
      <div>{description}</div>
      {actions && actions.map((action) => {
        return (
          <div key={action.description}>
            <p>{action.description}</p>
            <button type="button" onClick={() => onNextAction(action.type, action.direction)}> Go {action.direction}</button>
          </div>
        )
      })}
    </div>
  )
};

export default Games;