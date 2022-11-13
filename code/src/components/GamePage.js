/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { StartPageWrapper } from 'Globalstyles'

import uniqid from 'uniqid';

import nes from '../assets/nes.svg'
import screen from '../assets/screen.svg'
import { fetchLabyrinthTwo, labyrinth } from '../reducers/labyrinth'

export const GamePage = () => {
  const position = useSelector((store) => store.labyrinth.position)

  const dispatch = useDispatch();

  const changeIcon = (way) => {
    if (way === 'North') {
      return <p>N</p>;
    } else if (way === 'South') {
      return <p>S</p>;
    } else if (way === 'East') {
      return <p>E</p>;
    } else if (way === 'West') {
      return <p>W</p>;
    }
  };
  const restartGame = () => {
    dispatch(labyrinth.actions.restartGame())
  }

  return (
    <GamePageWrapper>
      <ScreenWrapper>
        <Screen>
          <Position>
            {position.description}
          </Position>
          {position.coordinates !== '1,3' && <Choice> Choose your direction:</Choice>}

          {position.coordinates === '1,3' && <><WonText> You WON! </WonText><RestartButton onClick={() => restartGame()}>Restart</RestartButton></>}
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
                  {changeIcon(item.direction)}
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
// Tablet @media 820x1180 and Desktop 2560x1600 is toggled out

const GamePageWrapper = styled(StartPageWrapper)`
    width: 95%;
    /* height: 90%; */

    border: 3px solid purple;

    @media (min-width: 420px) {
      width: 90%;
    } 
`;

// ---------Image of computer screen

const ScreenWrapper = styled.div`
    position: relative;
    background-image: url(${screen});  
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: -12rem;
    width: 100%;
    height: 50%;
    /* border: 2px solid red; */
    z-index: 2;

    @media (min-width: 420px) {
      background-position: center;
      margin-bottom: -6rem;
    } 
    @media (min-width: 500px) {
      background-position: center;
      margin-bottom: -3rem;
    } 
`;

// ---------Screen on computer

const Screen = styled.div`
    text-align: center;
    font-family: var(--font-main);
    width: 250px;   
    position: absolute;
    top: calc(50% - 9.75rem);
    left: calc(50% - 7.8rem);
    bottom: calc(50% - 0.6rem);
    
    /* border: 2px solid hotpink; */

    @media (min-width: 420px) {
      top: calc(50% - 6rem);
      left: calc(50% - 7.8rem);
      bottom: calc(50% - 5rem);
    } 
    @media (min-width: 500px) {
      width: 300px;
      top: calc(50% - 7rem);
      left: calc(50% - 9.3rem);
      bottom: calc(50% - 6rem);
    } 
    @media (min-width: 550px) {
      background-position: center;
      width: 350px;
      top: calc(50% - 7.5rem);
      left: calc(50% - 10.8rem);
      bottom: calc(50% - 6rem);
    } 
    @media (min-width: 668px) {
      font-family: var(--font-ext);
      font-weight: 700;
      top: calc(50% - 8.3rem);
      bottom: calc(50% - 7rem);
    }  

   /* // Desktop 13" 2560 x 1600
    @media (min-width: 1200px) {
      width: 600px;
      top: calc(50% - 15rem);
      left: calc(50% - 18rem);
      bottom: calc(50% - 13rem);
    } */
`;

const Position = styled.h2`
    font-size: 0.65rem;
    font-weight: 400;
    margin-bottom: 0.3rem;

    /* border: 2px solid blue; */

    @media (min-width: 500px) {
      font-size: 0.7rem;
    } 
    @media (min-width: 550px) {
      font-size: 0.85rem;
    }
    @media (min-width: 668px) {
      font-size: 0.75rem;
    }

    /* // Desktop 13" 2560 x 1600
    @media (min-width: 1200px) {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 1rem;
   } */
`;

const Choice = styled.div`
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    padding-bottom: 0.25rem;
    margin: 0;
    text-align: center;
    color: purple;
    text-transform: uppercase;
    /* border: 2px solid lightblue; */

    @media (min-width: 500px) {
      font-size: 0.6rem;
      padding-bottom: 0.2rem;
    } 

    @media (min-width: 550px) {
      font-size: 0.8rem;
    }

    @media (min-width: 668px) {
      padding: 0.2rem 0;
      font-size: 0.7rem;
    }   

     /* // Desktop 13" 2560 x 1600
     @media (min-width: 1200px) {
      font-size: 1.2rem;
      padding: 0.5rem 0;
    } */
`;

const Direction = styled.div`
    font-size: 0.7rem;
    font-weight: 400;
    padding-bottom: 0.2rem;
    border-bottom: 2px dashed purple;
    margin-bottom: 0.2rem;

    @media (min-width: 500px) {
      font-size: 0.75rem;
      
    } 

    @media (min-width: 550px) {
      font-size: 0.8rem;
      padding-bottom: 0.4rem;
      margin-bottom: 0.4rem;
    }

    @media (min-width: 668px) {
      font-size: 0.7rem;
      padding-bottom: 0.37rem;
      margin-bottom: 0.37rem;
    }

    /* // Desktop 13" 2560 x 1600
    @media (min-width: 1200px) {
      font-size: 1.2rem;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
  } */
`;

// ----------  NES console

const ControllerSection = styled.div`
    position: relative;
    background-image: url(${nes});  
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 38%;
    min-width: 300px;
    
    /* border: 2px solid green;      */
`;

// ---------Desrection Button ontop of nes-controll

const ButtonPlaceSection = styled.div`
    display: flex;
    justify-content: center;
    width: 90px;
    height: 90px;
   
    position: absolute;
    left: calc(50% - 9.7rem);
    bottom: calc(50% - 7.5rem);
    
    /* border: 2px solid yellow; */

    @media (min-width: 420px) {
      left: calc(50% - 9.9rem);
      bottom: calc(50% - 7.3rem);
    } 
    @media (min-width: 550px) {
      left: calc(50% - 9.75rem);
      bottom: calc(50% - 7.1rem);
    }  
    @media (min-width: 668px) {
      left: calc(50% - 9.83rem);
    }

// Tablet 820x1180
    /* @media (min-width: 820px) {
      width: 110px;
      height: 110px;
      left: calc(50% - 13.4rem);
      bottom: calc(50% - 10rem);
    } */

// Desktop 13" 2560 x 1600
    /* @media (min-width: 1200px) {
      width: 150px;
      height: 150px;
      left: calc(50% - 18rem);
      bottom: calc(50% - 13rem);
    } */

`;

const ButtonSection = styled.div`
    width: 30px;
    height: 80px;
    margin-bottom: 0.5em;

    /* border: 2px solid pink; */

// Desktop 13" 2560 x 1600
    /* @media (min-width: 1200px) {
      width: 60px;
      height: 130px;
    } */
`;

const DirectionBtn = styled.button`
  font-family: var(--font-pixel);
  font-size: 0.9rem;
  text-align: center;
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

  // Desktop 13" 2560 x 1600
  /* @media (min-width: 1200px) {
    font-size: 1.5rem;
      } */
`;

// ---------End of game Restart Btn

const WonText = styled(Choice)`
background: linear-gradient(-45deg,gold,gray,gold,silver);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
color: black;

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

const RestartButton = styled.button`
  width: 150px;
  color: red;
  border: 4px solid black;
  border-radius: 3px;
  background: var(--clr-grey);
  font-size: 1rem;
  padding: 10px;
  margin-top: 2%;
  margin-bottom: 2rem;
  font-weight: bold;
  font-family: var(--font-pixel) ;
`;

