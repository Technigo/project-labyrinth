/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { useSelector } from 'react-redux';

// import { nextMove } from './reducers/game'

export const Gameplay = () => {
  const progress = useSelector((store) => store.game.progress);
  const isLoading = useSelector((store) => store.game.isLoading)

  // const username = useSelector((state) => state.game.username);

  // onButtonClick = () => {
  //   console.log('onButtonClick invoked')
  //   dispatch(nextMove())
  // }
  //   return (
  //     <>
  //       {!isLoading && (
  //         <div>
  //           <p>Placeholder</p>
  //           <p>{progress.description}</p>
  //         </div>
  //         <div><p>Another placeholder div</p></div>
  //       )}

  //     </>
  //   )
  // }

  return (
    <div>
      {!isLoading && (
        <div>
          <h1>{progress.description}</h1>
        </div>
      )}
    </div>
  )
};