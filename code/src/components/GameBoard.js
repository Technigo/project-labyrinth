import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGameStep } from 'reducers/game'
import { CardContainer, StyledButton, LocationText, SingleChoice } from './GlobalStyles'

const GameBoard = () => {
  const game = useSelector((store) => store.game.gameStep)
  const actions = useSelector((store) => store.game.gameStep.actions);
  const username = useSelector((store) => store.game.username);
  const dispatch = useDispatch()

  return (
    <CardContainer>
      <LocationText>{game.description}</LocationText>
      <p>Your location is currently: {game.coordinates}</p>
      <p>Which way will you travel, {username}?</p>
      {actions && actions.map((action) => (
        <SingleChoice key={actions.direction}>
          <LocationText>{game.type}</LocationText>
          <p>{action.description}</p>
          <StyledButton
            type="submit"
            onClick={() => dispatch(getGameStep(
              action.type,
              action.direction
            ))}>
            Go {action.direction}
          </StyledButton>
        </SingleChoice>
      ))}
    </CardContainer>
  );
}

export default GameBoard

