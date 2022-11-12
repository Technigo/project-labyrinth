import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import GameNavigation from './GameNavigation';
import Map from './Map';
import GameImage from './GameImage.js'

const Game = () => {
  const description = useSelector((store) => store.game.description); // get description
  console.log('description', description);

  return (
    <GameImage coordinates={description.coordinates}>
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
          coords={description.coordinates}
          actions={description.actions} />
      </DescriptionWrapper>
    </GameImage>
  );
}
export default Game;

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
