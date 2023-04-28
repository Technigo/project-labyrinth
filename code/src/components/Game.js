/* disable-eslint */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTwo, gameFetch } from 'reducers/gameFetch';
import { LevelCard, Description, Background, DescriptionCard, DirectionButton, Arrow, ShowMoreButton, MainDescriptionCard, MainDescription, PlayerLevelWrapper, SpaceButton } from 'lib/Level';
import arrow from 'images/purple-arrow.png';
import { Player } from '@lottiefiles/react-lottie-player';
import startgame from 'images/arrow-button.png';
import { StarterPage } from './StarterPage';
import { Animation } from './LoadingAnimation';

export const Game = () => {
  const gameData = useSelector((store) => store.gameFetch);
  /* Is one useSel enough? The one above has all data of the ones below */
  const gameActions = useSelector((store) => store.gameFetch.actions);
  const coordinates = useSelector((store) => store.gameFetch.coordinates);
  /* useStates */
  const [showDirection, setShowDirection] = useState(false);
  const [directionTaken, setDirectionTaken] = useState(false);
  const [banana, setBanana] = useState(null);
  const isLoading = useSelector((state) => state.loading.isLoading);

  console.log(coordinates); // remove
  const dispatch = useDispatch();

  const onRestartButton = () => {
    dispatch(gameFetch.actions.restartGame());
  };

  /* Functions */
  const onShowDirectionClick = () => {
    setShowDirection(true)
  };

  const onDirectionClick = (direction) => {
    setBanana(direction)
    setDirectionTaken(true)
    dispatch(fetchTwo(direction))
    setTimeout(() => {
      setShowDirection(false);
      setDirectionTaken(false);
      setBanana(null)
    }, 4000)
  };

  return (
    <div>
      {isLoading ? ( // Good! All should be like this
        <Animation />
      ) : (
        <div>
          {coordinates === 'starter-page' && (<StarterPage />)}
          {coordinates !== 'starter-page' && (
            <Background coordinates={coordinates}>
              <LevelCard>
                {coordinates === '1,3'
                && (
                  <SpaceButton type="button" onClick={onRestartButton}>
                    <img src={startgame} alt="startbutton" />
                  </SpaceButton>)}
                <MainDescriptionCard style={{ display: showDirection ? 'none' : 'block' }}>
                  <MainDescription>{gameData.description}</MainDescription>
                  {coordinates !== '1,3' && (<ShowMoreButton type="button" onClick={() => onShowDirectionClick()}>Decide where to go</ShowMoreButton>)}
                </MainDescriptionCard>
                {!directionTaken && (<Player
                  src="https://assets2.lottiefiles.com/packages/lf20_cgbjomca.json"
                  className="player"
                  loop
                  autoplay
                  speed={1}
                  style={{ width: '150px', height: '150px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />)}
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
                {directionTaken
                    && (
                      <PlayerLevelWrapper direction={banana}>
                        <Player
                          src="https://assets2.lottiefiles.com/packages/lf20_cgbjomca.json"
                          className="player"
                          loop
                          autoplay
                          speed={1}
                          style={{
                            width: '150px',
                            height: '150px',
                            transform: 'translate(0, -100vh)',
                            opacity: 0
                          }} />
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