/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep } from '../reducers/game';

import { EndScreen } from './EndScreen';

import './gameboard.css';

export const GameBoard = () => {
  const { description, actions } = useSelector(
    (store) => store.game.currentPosition
  )

  const dispatch = useDispatch()

  const onButtonClick = (type, direction) => {
    dispatch(nextStep(type, direction))
  }

  // eslint-disable-next-line no-shadow
  const ActionContainer = ({ description, type, direction }) => (
    <div className="action-container">
      <p>{description}</p>
      <button type="button" onClick={() => onButtonClick(type, direction)}>
        {type} {direction}
      </button>
    </div>
  )

  if (actions.length === 0) {
    return <EndScreen />
  } else {
    return (
      <section className="gameboard">
        <div className="top-description">
          <h1>{description}</h1>
          {actions.length > 0 && <p>- Where to go next?</p>}
        </div>
        {actions.length > 0
          && actions.map((item) => (
            <ActionContainer key={item.direction} {...item} />
          ))}
      </section>
    )
  }
}