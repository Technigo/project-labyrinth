import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStory } from 'reducers/Game';

export const GameScreen = () => {
  const dispatch = useDispatch();
  const gameStep = useSelector((store) => store.game.response);

  const onClickNextStep = (direction) => {
    dispatch(getStory(direction))
  };
  return (
    <section>
      <p> {gameStep.description} </p>
      <section>
        {gameStep.actions.map((singleStep) => {
          return (
            <section key={singleStep.direction}>
              <h2> {singleStep.description} </h2>
              <button
                type="button"
                onClick={() => onClickNextStep(singleStep.direction)}>
                {singleStep.direction}
              </button>
            </section>
          )
        })}
      </section>
    </section>
  )
}