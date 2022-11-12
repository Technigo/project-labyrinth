import React from 'react';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { generateNextDescription } from 'reducers/game';
// import Wrapper from './Wrapper';
import { NavButton } from './Buttons';

function coordsToBackgroundImageWeb(coords) {
  // @TODO change to switch
  if (coords === '0,0') {
    return './assets/images/img_1.jpg'
  } else if (coords === '1,0') {
    return './assets/images/img_2.jpg'
  } else if (coords === '1,1') {
    return './assets/images/img_3.jpg'
  } else if (coords === '0,1') {
    return './assets/images/img_4.jpg'
  } else if (coords === '0,2') {
    return './assets/images/img_5.jpg'
  } else if (coords === '0,3') {
    return './assets/images/img_6.jpg'
  } else if (coords === '1,3') {
    return './assets/images/img_7.jpg'
  }
  return './assets/images/fallback.jpg'
}

function coordsToBackgroundImageMob(coords) {
  // @TODO change to switch
  if (coords === '0,0') {
    return './assets/images/mob_img_1.png'
  } else if (coords === '1,0') {
    return './assets/images/mob_img_2.jpg'
  } else if (coords === '1,1') {
    return './assets/images/mob_img_3.jpg'
  } else if (coords === '0,1') {
    return './assets/images/mob_img_4.jpg'
  } else if (coords === '0,2') {
    return './assets/images/mob_img_5.jpg'
  } else if (coords === '0,3') {
    return './assets/images/mob_img_6.jpg'
  } else if (coords === '1,3') {
    return './assets/images/mob_img_7.jpg'
  }
  return './assets/images/fallback.jpg'
}

function coordsToMap(coords) {
  // @TODO change to switch
  if (coords === '0,0') {
    return './assets/images/maze_1.svg'
  } else if (coords === '1,0') {
    return './assets/images/maze_2.svg'
  } else if (coords === '1,1') {
    return './assets/images/maze_3.svg'
  } else if (coords === '0,1') {
    return './assets/images/maze_4.svg'
  } else if (coords === '0,2') {
    return './assets/images/maze_5.svg'
  } else if (coords === '0,3') {
    return './assets/images/maze_6.svg'
  } else if (coords === '1,3') {
    return './assets/images/maze_7.svg'
  }
  return './assets/images/fallback.jpg'
}

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

const DirectionInput = ({ actions }) => {
  // Get actions from API
  console.log('actions', actions)
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

  return (
    <ChooseDirectionWrapper>
      <p style={{ fontWeight: 'bold' }}>Choose direction</p>
      <DirectionGrid>
        <div />
        <div>
          <DirectionButton direction="North" isAvailable={availableMoves.North} handleOnClick={handleOnClick} />
        </div>
        <div />
        <div>
          <DirectionButton direction="West" isAvailable={availableMoves.West} handleOnClick={handleOnClick} />
        </div>
        <div />
        <div>
          <DirectionButton direction="East" isAvailable={availableMoves.East} handleOnClick={handleOnClick} />
        </div>
        <div />
        <div>
          <DirectionButton direction="South" isAvailable={availableMoves.South} handleOnClick={handleOnClick} />
        </div>
        <div />
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
    "empty north empty"
    "west empty east"
    "empty south empty";
  grid-template-rows: [row1-start] repeat(3, 1fr) [row1-end row2-start] repeat(3, 1fr) [row2-end row3-start] repeat(3, 1fr) [row3-end];
  grid-template-columns: repeat(3, 1fr);    
  width: 170px;
  height: 170px;
  gap: 5px;
  justify-self: center;
`

const Game = () => {
  const description = useSelector((store) => store.game.description); // get description
  console.log('description', description);

  const bgImage = coordsToBackgroundImageWeb(description.coordinates);
  const sImage = coordsToBackgroundImageMob(description.coordinates);
  const MazeMap = coordsToMap(description.coordinates);

  return (
    <GameImage bgImage={bgImage} sImage={sImage}>
      <Map src={MazeMap} alt="Map of maze" title="Your current position" />
      <DescriptionWrapper>
        <DescriptionText>
          {description.description}
        </DescriptionText>
        <div>
          {description.actions.map((action) => (
            <p key={action.direction}>
              {action.direction}: {action.description}
            </p>
          ))}
        </div>
        <DirectionInput
          actions={description.actions} />
      </DescriptionWrapper>
    </GameImage>
  );
}
export default Game;

const GameImage = styled.div`
display: grid;
background-image: url(${(props) => props.sImage});
//background-image: url('/assets/images/image_3.jpg');
min-height: 100vh;
background-size: contain;
background-position: top;
background-repeat: no-repeat;
background-color: black;

@media (min-width: 667px) and (max-width: 1024px) {

  }

@media (min-width: 1025px) {
    background-position: right;
    background-image: url(${(props) => props.bgImage});
  }
`

const Map = styled.img`
color: white;
width: 15%;
position: absolute;
top: 40px;
right: 40px;

@media (min-width: 667px) and (max-width: 1024px) {
   width: 100px;
  }

@media (min-width: 1025px) {
   width: 100px;
 }
`

const DescriptionWrapper = styled.div`
color: white;
border: solid 2px hotpink;
width: 70%;
display: grid;
justify-self: center;
align-self: self-end;

@media (min-width: 667px) and (max-width: 1024px) {
      width: 60%;
    }

@media (min-width: 1025px) {
      width: 350px;
      height: 700px;
      margin-left: 125px;
      justify-self: left;
      align-self: center;
    }
`

const DescriptionText = styled.div`
border: solid 2px green;
color: white;
`
