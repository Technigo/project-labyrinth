import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { game, gameStart } from '../reducers/game'

import { GameStartPage } from 'components/GameStartPage'

import styled from 'styled-components'
// import { ReactComponent as MyBackground } from '..'

const FirstPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  // justify-content: start;
  // background-color: lightblue;
`
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 2px black solid;

  .submit-button {
    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin: 10px 100px 0px 100px;
    font-family: 'Special Elite', cursive;
  }

  .input-field {
    // width: 250px;
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
const BackgroundStyled = styled.div`
  height: 100vh;
  position: fixed;
  /* z-index: -1; */
  display: flex;
  justify-content: center;
  background-image: url('./assets/background.jpg');
  border: 2px solid green;
`

const HeaderWrapper = styled.div`
  // width: 98vw;
  height: 50vw;
  display: flex;
  align-items: center;
  // justify-content: start;
  border: 2px solid black;

  .first-page-header {
    text-align: center;
  }
`

export const FirstPage = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const gameStatus = useSelector((store) => store.game.gameStatus)

  const onSubmitUsername = () => {
    dispatch(game.actions.submitUsername(username))
    dispatch(gameStart(username))
  }

  if (gameStatus) {
    return <GameStartPage />
  }

  return (
    <>
      <FirstPageContainer>
        <BackgroundStyled></BackgroundStyled>
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

export default FirstPage
