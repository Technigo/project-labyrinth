/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-len */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import labyrinth, { GameNextFetch } from 'reducers/labyrinth';
import styled from 'styled-components/macro'
import { ChildContainer, StyledSubHeading, Button } from '../styles/GlobalStyles'

const MazePage = () => {
  const dispatch = useDispatch();
  const description = useSelector((store) => store.labyrinth.status.description);
  const actions = useSelector((store) => store.labyrinth.status.actions);
  const coordinates = useSelector((store) => store.labyrinth.status.coordinates);
  const onTypeButtonClick = (type, direction) => {
    dispatch(GameNextFetch(type, direction));
  }
  const goToPreviousStatus = () => {
    dispatch(labyrinth.actions.setPreviousStatus())
  }

  return (
    <ChildContainer>
      <StyledTop>
        <Button type="button" onClick={() => goToPreviousStatus()}>Go back</Button>
        <p>Coordinates:{coordinates}</p>
      </StyledTop>
      <div>
        <StyledSubHeading>{description}</StyledSubHeading>
      </div>
      {actions.length === 0 && (
        <Button
          type="button"
          onClick={() => dispatch(labyrinth.actions.resetGame())}>
            RESTART GAME
        </Button>)}
      {actions && actions.map((singleType) => (
        <><div key={singleType.description}>
          {singleType.description}
        </div>

        <Button onClick={() => onTypeButtonClick(singleType.type, singleType.direction)} type="button">{singleType.direction}</Button>

        </>
      ))}
    </ChildContainer>
  )
};

export default MazePage;

const StyledTop = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;

p {
  font-size: 0.6em;
}
`