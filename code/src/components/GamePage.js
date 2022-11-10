/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { GameContainer, GameFrame, GameContent, TvCircelContainer, TvCircel, TvCircelSmall } from 'Globalstyles'
import uniqid from 'uniqid';
/* import Loading from './Loading'; */
import { fetchLabyrinthTwo } from '../reducers/labyrinth'

// import thunk 2
// import globalstyles
export const GamePage = () => {
  const position = useSelector((store) => store.labyrinth.position)
  /*   const isLoading = useSelector((store) => store.ui.Loading) */
  const dispatch = useDispatch();

  return (
    <>
      <GameContainer>
        <GameFrame>
          <GameContent>
            <ConsoleWrapper>{position.description}</ConsoleWrapper>
            {position.actions.map((item) => {
              return (
                <div key={uniqid()}>
                  <ConsoleWrapper>{item.description}</ConsoleWrapper>
                </div>
              );
            })}
          </GameContent>
        </GameFrame>
        <TvCircelContainer>
          <TvCircel />
          <TvCircelSmall />
        </TvCircelContainer>
      </GameContainer>
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
    </>
  )
}

// ---- ------Styled Components---------

const ControllerSection = styled.div`
  margin: 10%;
  height: 260px;
  width: 50%;
  display: flex;
  border: 2px solid green;
`;

const ButtonSection = styled.div`
  height: 80%;
  width: 40%;
  border: 2px solid pink;
  margin: 5%;
`;

const ConsoleWrapper = styled.h2`
  font-family: var(-font-exp);
  border: 2px solid hotpink;
`;
