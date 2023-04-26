import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStory } from 'reducers/Game';
import { Loading } from './Loading';
import { EndGame } from './EndGame';

export const GameScreen = () => {
  const dispatch = useDispatch();
  const gameStep = useSelector((store) => store.game.response);
  const loading = useSelector((store) => store.game.loading);
  const actions = useSelector((store) => store.game.response.actions);

  const onClickNextStep = (direction) => {
    dispatch(getStory(direction))
  };

  if (loading) {
    return <Loading />
  }

  if (actions && actions.length === 0) {
    return <EndGame />
  }

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