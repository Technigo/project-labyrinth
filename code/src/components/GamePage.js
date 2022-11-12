/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { StartPageWrapper } from 'Globalstyles'

import uniqid from 'uniqid';

import nes from '../assets/nes.svg'
import screen from '../assets/screen.svg'
import { fetchLabyrinthTwo } from '../reducers/labyrinth'

export const GamePage = () => {
  const position = useSelector((store) => store.labyrinth.position)
  /*   const isLoading = useSelector((store) => store.ui.Loading) */
  const dispatch = useDispatch();

  return (
    <GamePageWrapper>
      <ScreenWrapper>
        <Screen>
          <Position>
            {position.description}
          </Position>
          <Choice> Choose your direction:</Choice>
          {position.actions.map((item) => {
            return (
              <Direction key={uniqid()}>
                {item.description}
              </Direction>
            )
          })}
        </Screen>
      </ScreenWrapper>
      <ControllerSection>
        <ButtonPlaceSection>
          <ButtonSection>
            {position.actions.map((item) => {
              return (

                <DirectionBtn
                  key={uniqid()}
                  onClick={() => dispatch(fetchLabyrinthTwo({ direction: item.direction }))}>
                  {item.direction}
                </DirectionBtn>

              );
            })}
          </ButtonSection>
        </ButtonPlaceSection>
      </ControllerSection>
    </GamePageWrapper>
  )
}

// ----------Styled Components---------

const GamePageWrapper = styled(StartPageWrapper)`
    width: 90%;
    /* height: 90%; */

    border: 3px solid purple;
`;

// img tv

const ScreenWrapper = styled.div`
    position: relative;
    background-image: url(${screen});  
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: -12rem;
    width: 100%;
    height: 50%;
    border: 2px solid red;
    z-index: 2;

    @media (min-width: 500px) {
      background-position: center;
      margin-bottom: -2rem;
    } 
`;

// computer screen

const Screen = styled.div`
    text-align: center;
    font-family: var(--font-ext);
    width: 250px;
   
    position: absolute;
    top: calc(50% - 9.5rem);
    left: calc(50% - 7.8rem);
    bottom: calc(50% - 1rem);
    

    border: 2px solid hotpink;

    @media (min-width: 550px) {
      background-position: center;
      width: 350px;
      top: calc(50% - 7.5rem);
      left: calc(50% - 10.8rem);
      bottom: calc(50% - 6rem);
    } 
`;

const Position = styled.h2`
    font-size: 0.6rem;
    font-weight: 400;
   
    margin-bottom: 1rem;
    border: 2px solid blue;

    @media (min-width: 550px) {
      font-size: 0.8rem;
    }
`;

const Choice = styled.div`
    font-size: 0.5rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    padding-bottom: 0.5rem;
    margin: 0;
    text-align: center;
    color: purple;
    text-transform: uppercase;
    border: 2px solid lightblue;

    @media (min-width: 550px) {
      font-size: 0.75rem;
    }

    @media (min-width: 667px) {
      padding: 1rem 0;
      font-size: 0.9rem;
    }   
`;

const Direction = styled.div`
    font-size: 0.6rem;
    font-weight: 400;
    padding-bottom: 1rem;
    border-bottom: 2px dashed purple;
    margin-bottom: 0.5rem;

     @media (min-width: 550px) {
      font-size: 0.8rem;
    }
`;

// NES console

const ControllerSection = styled.div`
 /* margin: 10%; */
    /* display: flex; */
    position: relative;
    background-image: url(${nes});  
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 40%;
    width: 80%;
    min-width: 350px;
    
    border: 2px solid green;
    
    @media (min-width: 668px) {
        
      }  
`;

const ButtonPlaceSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 90px;
    height: 90px;
   
    position: absolute;
    /* top: calc(50% - 9.5rem); */
    left: calc(50% - 9.5rem);
    bottom: calc(50% - 8rem);
    
    border: 2px solid yellow;

    @media (min-width: 550px) {
      left: calc(50% - 10.3rem);
      bottom: calc(50% - 7.3rem);
    }  
`;

const ButtonSection = styled.div`
    /* position: absolute; */
    top: 135px;
    left: 90px;
    height: 50px;
    width: 50px;
    border: 2px solid pink;
    margin: 5%;
`;

const DirectionBtn = styled.button`
  font-family: 'Press Start 2P', cursive;
  background: none;
  color: red;
  background: linear-gradient(-45deg, gray, black, gray, black);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

/* keyframes makes the element (gradient) move*/
@keyframes gradient {
  0% {
      background-position: 0% 50%;
  }
  50% {
      background-position: 100% 50%;
  }
  100% {
      background-position: 0% 50%;
  }
}
`;

// const EndGame = styled.h3`
//     font-family: var(--font-pixel);
//     font-weight: 700;
//     font-size: 1rem;
//     color: purple;
// `;
