/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gameProgress } from 'reducers/game'
import { Loading } from './Loading';

export const Gameplay = () => {
  const dispatch = useDispatch();
  const progress = useSelector((store) => store.game.progress);
  const isLoading = useSelector((store) => store.game.isLoading)

  const onClickAction = (type, direction) => {
    dispatch(gameProgress(type, direction));
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <p>Description: {progress.description}</p>
          <div>
            {progress.actions.map((item) => (
              <>
                <p>{item.description}</p>
                <button
                  type="button"
                  onClick={
                    () => onClickAction(item.type, item.direction)
                  }> Go {item.direction}
                </button>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  )
};