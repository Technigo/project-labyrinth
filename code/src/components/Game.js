import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { playGame, startGame } from 'reducers/game';
import TypeIt from 'typeit-react';
import { Loader } from './Loader';
import EndScreen from './EndScreen';

const fadeIn = keyframes`
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
`;

const GameContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70vw;
  height: 70vh;
  background: rgba(255, 255, 255, 0.21);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.9px);
  -webkit-backdrop-filter: blur(4.9px);

  @media (max-width: 340px) {
    height: 80vh;
    width: 80vw;
  }

  @media (min-width: 667px) {
    height: 60vh;
  }

  @media (min-width: 1024px) {
    width: 60vw;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: 15px;

  @media (min-width: 667px) {
    margin: 30px;
  }

  @media (min-width: 1024px) {
    margin: 50px;

  }
`;

const StyledTypeIt = styled(TypeIt)`
  font-size: 1.1em;
  font-family: var(--secondary-font-family-1);
  font-weight: bold;
  margin-top: 10px;

  @media (min-width: 667px) {
    font-size: 1.6em;
  }

  @media (min-width: 1024px) {
    font-size: 1.7em;
  }
`;

const CollapsBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: lightblue;
  border: solid 1px var(--neutral-dark);
  border-radius: 5px;
  margin-top: 10px;
  width: 110px;
  padding: 3px;
  font-size: 0.8em;
  font-family: var( --secondary-font-family-2);
  box-shadow: 1px 3px 2px 1px rgba(0,0,0,0.09);
    -webkit-box-shadow: 1px 3px 2px 1px rgba(0,0,0,0.09);
    -moz-box-shadow: 1px 3px 2px 1px rgba(0,0,0,0.09);
  cursor: pointer;

  @media (min-width: 667px) {
    font-size: 1.1em;
    width: 150px;
    padding: 5px;
  }

  @media (min-width: 1024px) {
    font-size: 1.2em;
    width: 160px;
    margin-top: 30px;
  }
`;

const DirectionsContainer = styled.div`
  font-size: 0.9em;
  margin-top: 10px;
  font-family: var( --secondary-font-family-2);
  font-weight: 500;
  animation: ${fadeIn} 2s ease-in;

  @media (min-width: 667px) {
    font-size: 1.3em;
  }

  @media (min-width: 1024px) {
    font-size: 1.4em;
  }

  button {
    margin: 10px;
    padding: 3px 5px;
    font-size: 1em;
    font-family: var(--secondary-font-family-2);
    border-radius: 5px;
    border: solid 1px var(--neutral-dark);
    box-shadow: 1px 3px 2px 1px rgba(0,0,0,0.09);
    -webkit-box-shadow: 1px 3px 2px 1px rgba(0,0,0,0.09);
    -moz-box-shadow: 1px 3px 2px 1px rgba(0,0,0,0.09);
    cursor: pointer;

    @media (min-width: 1024px) {
      margin-bottom: 30px;
    }
  }
`;

const Game = () => {
  const currentLocation = useSelector((store) => store.game.currentLocation);
  const gameStarted = useSelector((store) => store.game.isGameStarted);
  const dispatch = useDispatch();
  const loadingState = useSelector((store) => store.game.isLoading);
  const isGameOver = currentLocation.actions && currentLocation.actions.length === 0;
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(false); // Collapse the choices when the currentLocation changes
  }, [currentLocation]);

  if (loadingState) {
    return <Loader />;
  }

  if (isGameOver) {
    return <EndScreen />;
  }

  const onFormSubmit = (event, type, direction) => {
    event.preventDefault();
    if (!gameStarted) {
      dispatch(startGame());
    }
    dispatch(playGame(type, direction));
  };

  const handleToggleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <GameContainer>
      <ContentContainer key={currentLocation.coordinates}>
        <StyledTypeIt
          options={{
            strings: currentLocation.description,
            speed: 60
          }} />
        {gameStarted && (
          <>
            <CollapsBtn
              type="button"
              onClick={handleToggleClick}
              onKeyDown={handleToggleClick}>
              {isExpanded ? 'Close directions' : 'See directions'}
            </CollapsBtn>
            {isExpanded && (
              <DirectionsContainer>
                {currentLocation.actions
                  && currentLocation.actions.map((action) => (
                    <div key={action.direction}>
                      <p>{action.description}</p>
                      <form
                        onSubmit={(event) => onFormSubmit(event, action.type, action.direction)}>
                        <button
                          type="button"
                          onClick={(event) => onFormSubmit(event, action.type, action.direction)}>
                          Go {action.direction}
                        </button>
                      </form>
                    </div>
                  ))}
              </DirectionsContainer>
            )}
          </>
        )}
      </ContentContainer>
    </GameContainer>
  );
};

export default Game;