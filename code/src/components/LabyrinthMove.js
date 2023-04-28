/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import labyrinth, { labyrinthProgress } from 'reducers/labyrinth';
import { useDispatch } from 'react-redux';
import { DirectionsContainer, P, ParentDirectionsContainer } from './styles/Container';

export const LabyrinthMove = ({ response }) => {
  const dispatch = useDispatch();

  const onDirectionClick = (direction) => {
    dispatch(labyrinth.actions.setDirection(direction));
    dispatch(labyrinthProgress('action'));
  };
  // the map below was originally written like this:
  // {response.actions?.map((action) => {
  // the questionmark was complained about from ESlint so I removed it but unsure if it will work
  // the game works thanks to the solution below - sorted out by chatGPT
  return (
    <>
      {response.actions && response.actions.map((action) => {
        return (
          <ParentDirectionsContainer>
            <DirectionsContainer>
              <P>{action.description}</P>
              <label>
                <button
                  type="button"
                  className="nes-btn is-primary"
                  name="answer"
                  onClick={() => onDirectionClick(action.direction)}>
                          Go {action.direction}
                </button>
              </label>
            </DirectionsContainer>
          </ParentDirectionsContainer>

        );
      })}
    </>
  );
};