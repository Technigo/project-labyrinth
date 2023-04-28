import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import labyrinth from 'reducers/labyrinth';
import { Loading } from './Loading';
import { LabyrinthMove } from './LabyrinthMove';
// add this - import { Player } from './styled/Player';
import { InnerWrapper, BoxContainer, P, TextBox, ButtonRestart } from './styles/Container';

export const LabyrinthScreen = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.labyrinth.response);

  const onRestartClick = () => {
    dispatch(labyrinth.actions.restart());
  };

  return (
    <>
      <InnerWrapper>
        <BoxContainer>
          {response.description && (
            <TextBox>
              <P>{response.description}</P>
            </TextBox>
          )}
          <Loading />
          <LabyrinthMove response={response} />
        </BoxContainer>
      </InnerWrapper>

      {response.coordinates === '1,3' && (
        <ButtonRestart
          type="button"
          onClick={() => onRestartClick()}>
          Restart Game
        </ButtonRestart>
      )}
    </>
  );
};