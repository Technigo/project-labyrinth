import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { game, gameStart } from '../reducers/game'
import { GameStartPage } from 'components/GameStartPage'

import styled from 'styled-components'

export const FirstPage = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const gameStatus = useSelector((store) => store.game.gameStatus)

  const onSubmitUsername = () => {
    dispatch(game.actions.submitUsername(username))
    dispatch(gameStart(username))
  }

  if (gameStatus) {
    return (
      <FirstPageContainer>
        <GameStartPage />
      </FirstPageContainer>
    )
  }

  return (
    <>
      <FirstPageContainer>
        <HeaderWrapper>
          <h1 className="first-page-header">
            To begin the adventure enter your name.
          </h1>
        </HeaderWrapper>
        <InputWrapper>
          <input
            className="input-field"
            type="text"
            placeholder="Name"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <button
            className="submit-button"
            disabled={username === ''}
            onClick={onSubmitUsername}>
            Start
          </button>
        </InputWrapper>
      </FirstPageContainer>
    </>
  )
}

const FirstPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: -1;
  justify-content: start;
  background-image: url('/assets/background.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  .submit-button {
    width: 50vw;
    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 700;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin: 10px 100px 10px 100px;
    font-family: 'Special Elite', cursive;
  }

  .input-field {
    background: #fff;
    color: $input-text-color;
    font: inherit;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
    border: 0;
    outline: 0;
    padding: 15px 12px;
    margin: 20px;
  }
`

const HeaderWrapper = styled.div`
  height: 50vw;
  display: flex;
  align-items: center;
  margin: 70px 0px 0px 0px;

  .first-page-header {
    text-align: center;
    padding: 20px;
  }
`
