/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { StartPageWrapper } from 'Globalstyles'

// import { StartPageWrapper, GameContainer, GameFrame, GameContent,
// TvCircelContainer, TvCircel, TvCircelSmall } from 'Globalstyles'
import uniqid from 'uniqid';
/* import Loading from './Loading'; */
import nes from '../assets/nes.svg'
import { fetchLabyrinthTwo } from '../reducers/labyrinth'
/* import Loading from './Loading'; */
// import thunk 2
// import globalstyles
export const GamePage = () => {
  const position = useSelector((store) => store.labyrinth.position)
  /*   const isLoading = useSelector((store) => store.ui.Loading) */
  const dispatch = useDispatch();

  return (
    <GamePageWrapper>
      {/* <GameContainer>
        <GameFrame>
          <GameContent> */}
      <ConsoleWrapper>{position.description}</ConsoleWrapper>
      {position.actions.map((item) => {
        return (
          <div key={uniqid()}>
            <ConsoleWrapper>{item.description}</ConsoleWrapper>
          </div>
        );
      })}
      {/* </GameContent>
        </GameFrame>
        <TvCircelContainer>
          <TvCircel />
          <TvCircelSmall />
        </TvCircelContainer>
      </GameContainer> */}
      <ControllerSection>
        <ButtonSection>
          {position.actions.map((item) => {
            return (

              <button
                key={uniqid()}
                onClick={() => dispatch(fetchLabyrinthTwo({ direction: item.direction }))}>
                {item.direction}
              </button>

            );
          })}
        </ButtonSection>
      </ControllerSection>
    </GamePageWrapper>
  )
}

// ---- ------Styled Components---------

const GamePageWrapper = styled(StartPageWrapper)`
   border: 3px solid blueviolet;
`;

const ConsoleWrapper = styled.h2`
  font-family: var(-font-exp);
  font-size: 16px;
  width: 60% ;
  text-align: center;

  border: 2px solid hotpink;
`;
/* ------ TEST AV VIKTOR: få loading enbart på skärmen ------
const ClonedLoading = styled(Loading)`
  z-index: 1000;
 postions: absolute;
 height: 320px;
 width: 90%;
 `; */
const ControllerSection = styled.div`
 /* margin: 10%; */
 position: relative;
 background-image: url(${nes});  
 background-size: cover;
 background-repeat: no-repeat;
 background-position: bottom;
 height: 40%;
 width: 80%;
 display: flex;
 border: 2px solid green;
`;

const ButtonSection = styled.div`
  position: absolute;
  top: 135px;
  left: 90px;
  height: 50px;
  width: 50px;
  border: 2px solid pink;
  margin: 5%;
`;
