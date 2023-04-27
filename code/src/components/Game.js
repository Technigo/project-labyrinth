/* disable-eslint */

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTwo, gameFetch } from 'reducers/gameFetch'
import { LevelCard, Description, Background, DescriptionCard, DirectionButton, Arrow, ShowMoreButton, MainDescriptionCard, MainDescription } from 'lib/Level'
import arrow from 'images/purple-arrow.png'
import { StarterPage } from './StarterPage'
import { Animation } from './LoadingAnimation'

export const Game = () => {
  const gameData = useSelector((store) => store.gameFetch)
  const gameActions = useSelector((store) => store.gameFetch.actions)
  const coordinates = useSelector((store) => store.gameFetch.coordinates)
  const [showDirection, setShowDirection] = useState(false);

  console.log(coordinates);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading)

  const onRestartButton = () => {
    dispatch(gameFetch.actions.restartGame());
  };

  const onShowDirectionClick = () => {
    setShowDirection(true)
  };

  const onDirectionClick = (direction) => {
    dispatch(fetchTwo(direction))
    setShowDirection(false)
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
                <MainDescriptionCard style={{ display: showDirection ? 'none' : 'block' }}>
                  <MainDescription>{gameData.description}</MainDescription>
                  {coordinates !== '1,3' && (<ShowMoreButton type="button" onClick={() => onShowDirectionClick()}>Show directions</ShowMoreButton>)}
                </MainDescriptionCard>
                {gameActions && gameActions.map((item) => {
                  return (
                    <DescriptionCard key={item.direction} direction={item.direction} style={{ display: showDirection ? 'flex' : 'none' }}>
                      <DirectionButton
                        direction={item.direction}
                        type="button"
                        onClick={() => onDirectionClick(item.direction)}>
                        <Arrow direction={item.direction} src={arrow} alt="arrow" />
                      </DirectionButton>
                      <Description>{item.description}</Description>
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