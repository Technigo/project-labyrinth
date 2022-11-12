import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { generateNextDescription } from 'reducers/game';
import { NavButton, RestartButton } from './Buttons';

const GameNavigation = ({ actions, coords }) => {
  // Get actions from API
  console.log('actions', actions)
  console.log('coords', coords)

  const dispatch = useDispatch();

  const handleOnClick = (direction) => {
    dispatch(generateNextDescription(direction));
  }

  const availableMoves = {}
  // eslint-disable-next-line array-callback-return
  actions.map((action) => {
    availableMoves[action.direction] = action
  })

  console.log('availableMoves', availableMoves)

  if (coords === '1,3') {
    return (
      <RestartButton
        type="button"
        onClick={() => {

          // set username and description to null?
          // maybe add a new action for this?
        }}>Restart game
      </RestartButton>
    )
  }

  return (
    <ChooseDirectionWrapper>
      <p style={{ fontWeight: 'bold' }}>Choose direction</p>
      <DirectionGrid>
        <div className="north">
          <DirectionButton direction="North" isAvailable={availableMoves.North} handleOnClick={handleOnClick} />
        </div>
        <div className="west">
          <DirectionButton direction="West" isAvailable={availableMoves.West} handleOnClick={handleOnClick} />
        </div>
        <div className="east">
          <DirectionButton direction="East" isAvailable={availableMoves.East} handleOnClick={handleOnClick} />
        </div>
        <div className="south">
          <DirectionButton direction="South" isAvailable={availableMoves.South} handleOnClick={handleOnClick} />
        </div>
      </DirectionGrid>
    </ChooseDirectionWrapper>
  )
}

const ChooseDirectionWrapper = styled.div`
    border: solid 2px red;
    display: grid;
    color: white;
    text-align: center;
  `

const DirectionGrid = styled.div`
    display: grid;
    grid-template-areas: 
      ". north ."
      "west . east"
      ". south .";
    width: 170px;
    height: 170px;
    gap: 5px;
    justify-self: center;

    .north {
      grid-area: north;
    }
    .east {
      grid-area: east;
    }
    .south {
      grid-area: south;
    }
    .west {
      grid-area: west;
    }
  `

const DirectionButton = ({ direction, isAvailable, handleOnClick }) => {
  if (isAvailable) {
    return (
      <NavButton
        type="button"
        title={`Go ${direction}`}
        onClick={() => handleOnClick(direction)}>
        {direction.charAt(0)}
      </NavButton>
    )
  }

  return (
  // Return disabled button if not available
    <NavButton
      disabled
      type="button"
      title="This move is not possible here">
      {direction.charAt(0)}
    </NavButton>
  )
}

export default GameNavigation;