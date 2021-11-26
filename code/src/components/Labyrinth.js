import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { continueGame } from 'reducers/start';
import { End } from './End';

import {
  DescriptionContainer,
  TitleContainer,
  Choices,
  Button,
  ChoicesText,
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
      {username && coordinates < '1,3' && (
        <DescriptionContainer>
          <TitleContainer>
            <h3>{gameDescription}</h3>
          </TitleContainer>
          <div>
            {gameActions.map((choice, index) => (
              <Choices key={index}>
                <ChoicesText>{choice.description}</ChoicesText>
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
