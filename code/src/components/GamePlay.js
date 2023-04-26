/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { nextMove } from 'reducers/game';
import { Text } from './StartingPage.js';
import FirstImage from '../assets/1-0.jpg'
import SecondImage from '../assets/1-1.jpg'
import ThirdImage from '../assets/0-1.jpg'
import FourthImage from '../assets/0-2.jpg'
import FifthImage from '../assets/0-3.jpg'
import SixthImage from '../assets/1-3.jpg'
import DefaultImg from '../assets/default.jpg'

export const GamePlay = () => {
  const story = useSelector((store) => store.game.position.description)
  console.log(story)
  const dispatch = useDispatch()

  const onButtonClick = (direction) => {
    dispatch(nextMove(direction))
  }

  const direction = useSelector((store) => store.game.position.actions)
  const currentCoordinate = useSelector((store) => store.game.position.coordinates)
  console.log(currentCoordinate)

  let backgroundImage;
  switch (currentCoordinate) {
    case '1,0':
      backgroundImage = FirstImage;
      break;
    case '1,1':
      backgroundImage = SecondImage;
      break;
    case '0,1':
      backgroundImage = ThirdImage;
      break;
    case '0,2':
      backgroundImage = FourthImage;
      break;
    case '0,3':
      backgroundImage = FifthImage;
      break;
    case '1,3':
      backgroundImage = SixthImage;
      break;
    default:
      backgroundImage = DefaultImg;
  }

  return (
    <MainSection backgroundImage={backgroundImage}>
      <InnerWrapper>
        <TextWrapper>
          <Text>{story}</Text>
        </TextWrapper>
        <ButtonWrapper>
          {direction.map((item) => {
            return <DirectionBtn className={item.direction} type="button" onClick={() => onButtonClick(item.direction)}>Go {item.direction}</DirectionBtn>
          })}
        </ButtonWrapper>
      </InnerWrapper>
    </MainSection>
  )
}

const MainSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.backgroundImage})`};
`
const InnerWrapper = styled.div`
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding-top: 10px;
`
const TextWrapper = styled.div`
  width: 80vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  background-color: rgba(0,0,0,.5);
  padding: 15px;
`
const DirectionBtn = styled.button`
border-radius: 15px;
padding: 5px;
color: white;
background: black;
font-family: 'Roboto Slab', serif;
font-size: 1rem;
cursor: pointer;

&.North {
  position: absolute;
  top: 0;
  right: calc(50% - 2.5rem);
}

&.East {
  position: absolute;
  top: calc(50% - 1rem);
  right: 0;
}

&.South {
  position: absolute;
  bottom: 0;
  right: calc(50% - 2.5rem);
}

&.West {
  position: absolute;
  top: calc(50% - 1rem);
  left: 0;
}
`
const ButtonWrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 25vh;
  border: 2px solid black;
`