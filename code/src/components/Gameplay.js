/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import { Loading } from './Loading';

export const Gameplay = () => {
  const progress = useSelector((state) => state.game.progress);
  const isLoading = useSelector((state) => state.game.isLoading)

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
                <button>{item.direction}</button>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  )
};