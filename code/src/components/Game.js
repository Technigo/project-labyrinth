/* disable-eslint */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTwo } from 'reducers/gameFetch';
import { LevelCard, Background, DescriptionCard, Arrow, MainDescriptionCard, PlayerLevelWrapper } from 'lib/General';
import { MainDescription, Description } from 'lib/Text';
import arrow from 'images/purple-arrow.png';
import { DirectionButton, ShowMoreButton } from 'lib/Buttons';
import { StarterPage } from './StarterPage';
import { LoadingAnimation } from './LoadingAnimation';
import { RestartButton } from './RestartButton';
import { UfoWaiting } from './UfoWaiting';
import { UfoMoving } from './UfoMoving';

export const Game = () => {
  const gameData = useSelector((store) => store.gameFetch);
  /* Is one useSel enough? The one above has all data of the ones below */
  const gameActions = useSelector((store) => store.gameFetch.actions);
  const coordinates = useSelector((store) => store.gameFetch.coordinates);
  const isLoading = useSelector((state) => state.loading.isLoading);
  /* useStates dir= direction */
  const [showMore, setShowMore] = useState(false);
  const [directionTaken, setDirectionTaken] = useState(false);
  const [goDirection, setGoDirection] = useState(null);
  const dispatch = useDispatch();

  /* Functions */
  const onShowDirectionClick = () => {
    setShowMore(true)
  };

  const onDirectionClick = (direction) => {
    setGoDirection(direction)
    setDirectionTaken(true)
    dispatch(fetchTwo(direction))
    setTimeout(() => {
      setShowMore(false);
      setDirectionTaken(false);
      setGoDirection(null)
    }, 2000)
  };

  return (
    <div>
      {isLoading ? ( // Good! All should be like this
        <LoadingAnimation />
      ) : (
        <div>
          {coordinates === 'x,x' && (
            <StarterPage />
          )}
          {coordinates !== 'x,x' && (
            <Background coordinates={coordinates}>
              <LevelCard>
                <MainDescriptionCard style={{ display: showMore ? 'none' : 'block' }}>
                  <MainDescription>{gameData.description}</MainDescription>
                  {coordinates !== '1,3' && (
                    <ShowMoreButton type="button" onClick={() => onShowDirectionClick()}>Decide where to go</ShowMoreButton>
                  )}
                </MainDescriptionCard>
                {!directionTaken && (
                  <UfoWaiting />
                )}
                {coordinates === '1,3' && (
                  <RestartButton />
                )}
                {gameActions && gameActions.map((item) => {
                  return (
                    <DescriptionCard
                      key={item.direction}
                      direction={item.direction}
                      style={{ display: showMore
                        ? 'flex' : 'none' }}>
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
                {directionTaken && (
                  <PlayerLevelWrapper direction={goDirection}>
                    <UfoMoving />
                  </PlayerLevelWrapper>
                )}
              </LevelCard>
            </Background>
          )}
        </div>
      )}
    </div>
  )
}