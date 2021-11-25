import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import { game, gamePlay } from '../reducers/game'
import { Compass } from './Compass'

export const GameStartPage = () => {
  const dispatch = useDispatch()
  const gameStatus = useSelector((store) => store.game.gameStatus)
  const username = useSelector((store) => store.game.username)
  const actions = useSelector((store) => store.game.gameStatus.actions)

  return (
    <>
      <GamePageContainer>
        <BackgroundContainer />
        <ContentWrapper>
          <HeaderWrapper>
            {actions.length === 1 && (
              <>
                <h1>Welcome {username}!</h1>
                <h1>Let the adventure begin...</h1>
                <h1>*</h1>
              </>
            )}
            <h3>{gameStatus.description}</h3>
          </HeaderWrapper>
          <Compass />

          {actions.map((item) => (
            <DirectionWrapper key={item.description}>
              <div>
                <h3>{item.description}</h3>
                <button
                  value={item.direction}
                  onClick={() => dispatch(gamePlay(username, item.direction))}>
                  {item.direction}
                </button>
              </div>
              {actions.length === 0 && (
                <button onClick={() => dispatch(game.actions.restart())}>
                  Restart game?
                </button>
              )}
            </DirectionWrapper>
          ))}
        </ContentWrapper>
      </GamePageContainer>
    </>
  )
}

const GamePageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* position: fixed; */
  /* z-index: -1; */
  justify-content: flex-start;
  /* background-image: url('/assets/background.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
`
const BackgroundContainer = styled.div`
  /* width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
  background-image: url('/assets/background.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
`

const ContentWrapper = styled.div`
  width: 90%;
  max-width: 500px;
  text-align: center;
  margin: 40px auto 0 auto;
  display: block;
  z-index: 0;
  @media (min-width: 768px) {
        height: 700px;
        max-width: 500px;
        text-align: center;
        margin: 100px auto 0 auto;
        display: block;
        z-index: 0;
    }
`
const HeaderWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  h1 {
    font-size: 22px;
    line-height: 1.2;
    margin: 0;
    margin-bottom: 15px;
    @media (min-width: 768px) {
        font-size: 40px;
    }
  }
  h3 {
    font-size: 20px;
    line-height: 1.2;
    margin: 0;
  }
`

const DirectionWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 5px;
  display: block;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1;

  h3 {
    font-size: 20px;
    line-height: 1.2;
    margin: 10px 0 5px;
  }

  button {
    padding: 15px 40px 12px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: #fff;
    background-color: #000;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    font-family: 'Special Elite', cursive;
    margin: 5px 0 10px;
  }
`
