import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import GameNavigation from './GameNavigation';
import Map from './Map';

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

const Game = () => {
  const description = useSelector((store) => store.game.description); // get description
  console.log('description', description);

  const bgImage = coordsToBackgroundImageWeb(description.coordinates);
  const sImage = coordsToBackgroundImageMob(description.coordinates);

  return (
    <GameImage bgImage={bgImage} sImage={sImage}>
      <Map coordinates={description.coordinates} />
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
        <GameNavigation
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
