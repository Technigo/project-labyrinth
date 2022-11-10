/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { game, fetchGameSteps } from 'reducers/game';
import { OuterWrapper, InnerWrapper, TheEndWrapper } from './styled-components/StyledWrappers'

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
              <button type="button" onClick={() => onNextAction(action.type, action.direction)}>
                <span>
                    Go {''}
                  {action.direction
                    + (action.direction === 'North'
                      ? ' ↑'
                      : action.direction === 'South'
                        ? ' ↓'
                        : action.direction === 'West'
                          ? ' ←'
                          : action.direction === 'East'
                            ? '→'
                            : '')}
                </span>
              </button>
            </div>
          )
        })}
        {actions?.length === 0 && (
          <TheEndWrapper>
            <h2>THE END</h2>
            <button type="button" onClick={onGameRestart}>Restart</button>
          </TheEndWrapper>
        )}
      </InnerWrapper>
    </OuterWrapper>
  )
};

export default Games;