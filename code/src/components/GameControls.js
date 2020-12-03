import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { game } from '../reducers/game';
import { startFetch, chooseNextStep } from '../reducers/reusable'
import { Loader } from './Loader';


export const GameControls = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.game.userName);
  const games = useSelector((store) => store.game.gameDetails);
  const gameArray = useSelector((store) => store.game.gameDetails.actions)
  const loader = useSelector(store => store.game.isLoading);
  //const history = useSelector((store) => store.game.history);
  

  
  const nextStep = direction => {
    dispatch(chooseNextStep(userName, direction));
    dispatch(game.actions.setLoader(true));
    //dispatch(game.actions.setHistory(direction));
  }
  const restartGame = () => {
    dispatch(game.actions.restartGame())
  }


  return (

    <div>
      {loader && <Loader />}
      <p>{games.description}</p>
      
      {games.actions.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.description}</h3>
            <button onClick={() => nextStep(item.direction)}>
              go {item.direction}
            </button>
          </div>
        )
      })}
      <button onClick={() => restartGame()}>restart</button>
    </div>
  )
}