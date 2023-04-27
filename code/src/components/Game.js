import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { playGame, startGame } from 'reducers/game';
import TypeIt from 'typeit-react';
import { Loader } from './Loader';
import EndScreen from './EndScreen';

const GameContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  width: 40vw;
  height: 50vh;
  border-radius: 10%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledTypeIt = styled(TypeIt)`
  font-size: 1.1em;
  font-family: 'Special Elite', cursive;
  font-weight: bold;
`;

const CollapsBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  background: lightblue;
  border: solid 1px black;
  margin-top: 10px;
  width: 110px;
  padding: 3px;
  font-size: 0.8em;
  font-family: 'Nanum Gothic Coding', monospace;
`;

const DirectionsContainer = styled.div`
  font-size: 0.9em;
  margin-top: 10px;
  font-family: 'Nanum Gothic Coding', monospace;
  font-weight: 500;

  button {
    margin: 10px;
    font-size: 1em;
    font-family: 'Nanum Gothic Coding', monospace;
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