import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro'

import {generateNextMove} from '../reducers/mazegame'
import LoadingPage from './LoadingPage'
import FinishLayout from "./FinishLayout";

const Container = styled.div`
  padding: 30px 20px 20px 20px;
  background-color: #000;
  width: 100vw;
  margin: 0;
  color: #59e686;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; 
`

const InnerContainer = styled.div`
  max-width: 300px;
`

const Text = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
`

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const TextCenter = styled.p`
  text-align: center;
`

const GamePage = () => {
  const gameStatus = useSelector(store => store.mazegame.gameStatus)
  const actions = useSelector(store => store.mazegame.gameStatus.actions)
  const loading = useSelector(store => store.mazegame.loading)
  const userName = useSelector(store => store.mazegame.userName)
  const dispatch = useDispatch()

  console.log('ACTION', actions)
  
  if (loading) {
    return (
      <LoadingPage />
    ) 
  } 

  return(
    <Container>
      <InnerContainer>
        <section class="nes-container is-dark">
          <section class="message-list">
            <section class="message -left">
              <i class="nes-bcrikko"></i>
              <div class="nes-balloon from-left is-dark">
                <Text><span>Hello {userName}!</span> <span>{gameStatus.description}</span></Text>
              </div>
            </section>
          </section>
        </section>
        {actions.length !== 0 
          ? 
            <>
              <TextCenter>ACTIONS YOU CAN TAKE</TextCenter>
              {actions.map(direction => 
                <Flexbox key={direction.description}>
                  <div class="nes-container is-rounded is-dark">
                    <div>{direction.description}</div>
                    <button
                      onClick={() => dispatch(generateNextMove(userName, direction.direction))}
                      className="nes-btn is-normal"
                    >{direction.direction}
                    </button>
                  </div>
                </Flexbox> 
              )}
            </>
          : 
            <FinishLayout />
      }
      </InnerContainer>
    </Container>
    )
}

export default GamePage

