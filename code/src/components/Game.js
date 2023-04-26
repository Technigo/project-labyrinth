/* disable-eslint */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTwo, gameFetch } from 'reducers/gameFetch'
import { LevelCard, Description, Background, DescriptionCard } from 'lib/Level'
import { StarterPage } from './StarterPage'

export const Game = () => {
  const gameData = useSelector((store) => store.gameFetch)
  const gameActions = useSelector((store) => store.gameFetch.actions)
  const coordinates = useSelector((store) => store.gameFetch.coordinates)
  console.log(coordinates);

  const dispatch = useDispatch();

  const onRestartButton = () => {
    dispatch(gameFetch.actions.restartGame());
  };

  return (
    <>
      {coordinates === 'starter-page' && (<StarterPage />)}
      {coordinates !== 'starter-page' && (
        <Background coordinates={coordinates}>
          <LevelCard>
            {coordinates === '1,3' && (<button type="button" onClick={onRestartButton}>Restart</button>)}
            <Description>{gameData.description}</Description>
            {gameActions && gameActions.map((item) => {
              return (
                <DescriptionCard key={item.direction}>
                  <Description>{item.description}</Description>
                  <button
                    direction={item.direction}
                    type="button"
                    className="left"
                    onClick={() => dispatch(fetchTwo(item.direction))}>
                    {item.direction}
                  </button>
                </DescriptionCard>
              );
            })}
          </LevelCard>
        </Background>)}
    </>
  )
}

