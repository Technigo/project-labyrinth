import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { game } from '../reducers/game';
import { startFetch, chooseNextStep } from '../reducers/reusable'

export const GameControls = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.game.name);
  const game = useSelector((store) => store.game.gameDetails);
 // const gameArray = useSelector((store) => console.log(store.game.gameDetails.actions))
//  console.log(gameArray);
  const nextStep = direction => {
    dispatch(chooseNextStep(userName, direction));
  }

  const restartGame = () => {
    dispatch(game.actions.restartGame())
  }

  return (
    <>
      <div>
        <p>{game.description}</p>
        
        {game.actions.map((item, index) => {
          return (
            <div key={index}>
              <h3>{item.description}</h3>
              <button onClick={() => nextStep(item.direction)}>
                go {item.direction}
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}