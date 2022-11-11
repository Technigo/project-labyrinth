/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-shadow */
import React from 'react';
import { InnerWrapper } from 'Styling/GlobalStyles';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep } from '../reducers/labyrinth';
import { Btnstyling } from './Buttons';

// import { labyrinth } from '../reducers/labyrinth';

const Labyrinth = () => {
  const { description, actions } = useSelector((store) => store.labyrinth.currentPosition)
  const dispatch = useDispatch()
  const handleButtonClick = (type, direction) => {
    dispatch(nextStep(type, direction));
  };

  const PlayGame = ({ description, type, direction }) => (
    <div>
      <p>{description}</p>
      <Btnstyling
        type="button"
        onClick={() => handleButtonClick(type, direction)}>
        {type} {direction}
      </Btnstyling>
    </div>
  );

  return (
    <div>
      <InnerWrapper>
        <h2>{description}</h2>
        {actions.length === 0 && <h3>Great job, you survived!</h3>}
        {actions.length > 0
          && actions.map((game) => (
            <PlayGame key={game.direction} {...game} />
          ))}
      </InnerWrapper>
    </div>
  );
};

export default Labyrinth;

