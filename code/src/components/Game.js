/* disable-eslint */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTwo, gameFetch } from 'reducers/gameFetch'
import { LevelCard, Description, Background, DescriptionCard, DirectionButton } from 'lib/Level'
import arrow from 'images/purple-arrow.png'
import { StarterPage } from './StarterPage'
import { Animation } from './LoadingAnimation'

export const Game = () => {
  const gameData = useSelector((store) => store.gameFetch)
  const gameActions = useSelector((store) => store.gameFetch.actions)
  const coordinates = useSelector((store) => store.gameFetch.coordinates)
  console.log(coordinates);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading)

  const onRestartButton = () => {
    dispatch(gameFetch.actions.restartGame());
  };

  return (
    <div>
      {isLoading ? (
        <Animation />
      ) : (
        <div>
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
                      <DirectionButton
                        direction={item.direction}
                        type="button"
                        onClick={() => dispatch(fetchTwo(item.direction))}>
                        {item.direction === 'East' && (<img style={{ width: '60px', left: '-30px' }} src={arrow} alt="arrow" />)}
                        {item.direction === 'West' && (<img style={{ transform: 'rotate(180deg)', width: '60px', left: '-30px' }} src={arrow} alt="arrow" />)}
                        {item.direction === 'North' && (<img style={{ transform: 'rotate(-90deg)', width: '60px', left: '-30px', top: '-20px' }} src={arrow} alt="arrow" />)}
                        {item.direction === 'South' && (<img style={{ transform: 'rotate(90deg)', width: '60px', left: '-30px', top: '-20px' }} src={arrow} alt="arrow" />)}
                        {/*  {item.direction} */}
                      </DirectionButton>
                    </DescriptionCard>
                  );
                })}
              </LevelCard>
            </Background>
          )}
        </div>
      )}
    </div>
  )
}