/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { nextMove, game } from 'reducers/game';
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

  const onRestartButton = () => {
    dispatch(game.actions.restartGame())
  }

  const direction = useSelector((store) => store.game.position.actions)
  console.log(direction)
  const noActionsLeft = direction.length === 0
  console.log(noActionsLeft)
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
          {noActionsLeft && <Restartbutton type="button" onClick={() => onRestartButton()}>Restart</Restartbutton>}
        </ButtonWrapper>
        {direction.map((item) => {
          return (
            <DirectionTextWrapper className={item.direction}>
              <DescriptionTitle>{item.direction}</DescriptionTitle>
              <DirectionText>{item.description}</DirectionText>
            </DirectionTextWrapper>
          )
        })}
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
        /* height: 55vh; */
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

        @media (min-width: 668px) {
        width: 50vw;
        }  
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
        top: -15px;
        right: calc(50% - 2.5rem);
}

        &.East {
          position: absolute;
        top: calc(50% - 1rem);
        right: -35px;
}

        &.South {
          position: absolute;
        bottom: -15px;
        right: calc(50% - 2.5rem);
}

        &.West {
          position: absolute;
        top: calc(50% - 1rem);
        left: -35px;
}
        `
const ButtonWrapper = styled.div`
        position: relative;
        width: 110px;
        height: 110px;
        border: 2px solid black;
        border-radius: 50%;
        `
const DirectionTextWrapper = styled.div`
        margin-top: 5px;
        text-align: center;
        /* background-color: #486F73; */
        width: 80vw;
        /* border-radius: 10px; */
        padding: 5px;
        /* From https://css.glass */
        background: rgba(72, 111, 115, 0.51);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(72, 111, 115, 0.3);

        @media (min-width: 668px) {
        width: 50vw;
        }  
        `
const DescriptionTitle = styled.h2`
        color: #BFBFBF;
        margin: 0;
        `
const DirectionText = styled.p`
        color: #BFBFBF;
        `
const Restartbutton = styled.button`
      height: 2rem;
      background-color: #BFBFBF;
      font-family: 'Roboto Slab', serif;
      font-size: 1rem;
      padding: 5px;
      color: #7D458C;
      border: none;
      border-radius: 10px;
      position: absolute;
      top: calc(50% - 16px);
      right: calc(50% - 32px);
      pointer: cursor;
`