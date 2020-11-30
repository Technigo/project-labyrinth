import { current } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { onStartGame } from '../reducers/reusable';
import { game } from '../reducers/game';

export const Board = () => {
  const dispatch = useDispatch();
  const stateUsername = useSelector((state) => state.game.username);
  const currentStep = useSelector((state) => state.game.currentStep)

  return (
    <div>
      {currentStep.coordinates && (
        <>
          <p>Coordinates: {currentStep.coordinates}</p>
          <p>Description: {currentStep.description}</p>
          {currentStep.actions.map((action) => {
            return (
              <button>{action.direction}</button>
            )
          })}
        </>
      )}
    </div>
  )
}