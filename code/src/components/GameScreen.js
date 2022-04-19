import React from 'react';
import { useSelector } from 'react-redux';
import { labyrinth } from '../reducers/labyrinth';

const GameScreen = ({ username }) => {
  const currentStep = useSelector((store) => store.labyrinth.currentStep);
  const currentStepActions = useSelector(
    (store) => store.labyrinth.currentStep.actions
  );

  return (
    <div>
      <p>Hello {username}</p>
      <div>{currentStep.description}</div>
    </div>
  );
};

export default GameScreen;
