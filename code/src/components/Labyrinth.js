import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { continueGame } from 'reducers/start';
import { End } from './End';
import { LoadingIndicator } from './LoadingIndicator';

import {
  DescriptionContainer,
  TitleContainer,
  Directions,
  Choices,
  Button,
} from './StyledComponents';

export const Labyrinth = () => {
  const dispatch = useDispatch();

  const coordinates = useSelector(store => store.start.coordinates);
  const gameDescription = useSelector(store => store.start.description);
  const gameActions = useSelector(store => store.start.actions);
  const username = useSelector(store => store.start.username);

  const onMove = direction => {
    dispatch(continueGame(username, direction));
  };

  return (
    <>
      {coordinates === '1,3' && (
        <End
          gameDescription={gameDescription}
          title={`Well done ${username}, you made it to the end!`}
        />
      )}
      {username &&
        coordinates < '1,3' && ( // ändrade så att vi kan styla slutsidan lättare och bara targeta den
          <DescriptionContainer>
            <TitleContainer>
              <h3>{gameDescription}</h3>
            </TitleContainer>
            <div>
              {gameActions.map((choice, index) => (
                <Choices key={index}>
                  <h4>{choice.description}</h4>
                  <Button onClick={() => onMove(choice.direction)}>
                    Go {choice.direction}
                  </Button>
                </Choices>
              ))}
            </div>
          </DescriptionContainer>
        )}
    </>
  );
};
