import React from 'react';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { generateNextDescription } from 'reducers/game';
// import Wrapper from './Wrapper';
import Button from './Button';

function coordsToBackgroundImage(coords) {
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

// function coordsToBackgroundImageMob(coords) {
//   // @TODO change to switch
//   if (coords === '0,0') {
//     return './assets/images/mob_img_1.jpg'
//   } else if (coords === '1,0') {
//     return './assets/images/mob_img_2.jpg'
//   } else if (coords === '1,1') {
//     return './assets/images/mob_img_3.jpg'
//   } else if (coords === '0,1') {
//     return './assets/images/mob_img_4.jpg'
//   } else if (coords === '0,2') {
//     return './assets/images/mob_img_5.jpg'
//   } else if (coords === '0,3') {
//     return './assets/images/mob_img_6.jpg'
//   } else if (coords === '1,3') {
//     return './assets/images/mob_img_7.jpg'
//   }
//   return './assets/images/fallback.jpg'
// }

const DirectionInput = ({ actions }) => {
  // Get actions from API
  console.log('actions', actions)
  const dispatch = useDispatch();

  const handleOnClick = (direction) => {
    dispatch(generateNextDescription(direction));
  }

  const allDirections = ['North', 'West', 'East', 'South']

  const availableActions = {}
  // eslint-disable-next-line array-callback-return
  actions.map((action) => {
    availableActions[action.direction] = action
  })

  console.log('availableActions', availableActions)

  return (
    <ChooseDirectionWrapper>
      {allDirections.map((direction) => (
        // Loop over all actions returned by the API, render a button for each
        <div key={direction}>
          {availableActions[direction] ? (
            <Button
              type="button"
              onClick={() => handleOnClick(direction)}>
              {direction}
            </Button>
          ) : (
            // Return disabled button if not available
            <Button disabled type="button">
              {direction}
            </Button>
          )}
        </div>
      ))}
    </ChooseDirectionWrapper>
  )
}

const Game = () => {
  const description = useSelector((store) => store.game.description); // get description
  console.log('description', description);

  const bgImage = coordsToBackgroundImage(description.coordinates);

  return (
    <GameImage bgImage={bgImage}>
      <Map>Map Image</Map>
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
background-image: url(${(props) => props.bgImage});
/* background-image: url('/assets/images/image_3.jpg'); */
min-height: 100vh;
background-size: contain;
background-position: center;
background-repeat: no-repeat;
background-color: black;

@media (min-width: 667px) and (max-width: 1024px) {
    background-position: right;
  }

@media (min-width: 1025px) {
    background-position: right;
  }

`

const Map = styled.div`
color: white;
position: absolute;
top: 40px;
right: 40px;
font-size: 1.5em;
`

const DescriptionWrapper = styled.div`
color: white;
border: solid 2px hotpink;
width: 70%;
height: 50%;
display: grid;
justify-self: center;
align-self: center;

@media (min-width: 667px) and (max-width: 1024px) {
      width: 60%;
      justify-self: left;
    }

@media (min-width: 1025px) {
      width: 30%;
      margin-left: 50px;
      justify-self: left;
    }
`

const DescriptionText = styled.div`
border: solid 2px green;
color: white;
`

const ChooseDirectionWrapper = styled.div`
border: solid 2px red;
display: grid;
color: white;
`