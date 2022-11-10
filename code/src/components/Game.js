import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { game, fetchGameSteps } from 'reducers/game';
import { OuterWrapper, InnerWrapper } from './styled-components/StyledWrappers'

const Games = () => {
  const { description, actions } = useSelector((store) => store.game.stage)
  console.log('description', description)
  console.log('actions', actions)
  const dispatch = useDispatch()
  const userName = useSelector((store) => store.game.username);

  const onNextAction = (type, direction) => {
    dispatch(fetchGameSteps(type, direction));
  }

  const onGameRestart = () => {
    dispatch(game.actions.setRestartGame())
  };

  return (
    <OuterWrapper>
      <InnerWrapper>
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
      </InnerWrapper>
      <button type="button" onClick={onGameRestart}>Restart</button>
    </OuterWrapper>
  )
};

export default Games;