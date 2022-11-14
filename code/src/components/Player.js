import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import game, { gameBoard } from 'reducers/game';
import styled from 'styled-components'

const WelcomePage = styled.div`
`

const Input = styled.input`
height: 20px;
width: 35%;
border-radius: 7%;
background-color: transparent;
border-top: none;
border-left: none;
border-right: none;
border-bottom:2 px solid white;
border-style: none;
padding: 4%;
margin: 5%;
font-size: 15px;
 `

const ButtonStartgame = styled.button`
background: #093E3E;
color: white;
border-radius: 10px;
margin: 4%;
padding: 2%;
border-style: none;
box-shadow: 4px 5px 13px (yellow);
letter-spacing: 2px;
font-weight: 500;
cursor: pointer;
`

const Player = () => {
  const [userName, setuserName] = useState('') // data binding
  const dispatch = useDispatch();

  // eslint-disable-next-line max-len
  const onFormSubmit = (event) => { // prevent reload of page, dipstaching the game and activating username
    event.preventDefault()
    dispatch(game.actions.setUserName(userName))
    dispatch(gameBoard())
  }

  return (
    <>
      <WelcomePage>
        <section className="header">
          <h1 className="h1">WELCOME</h1>
          <h2>TO THE LABYRINTH</h2>
        </section>

        <Input
          type="text"
          className="user-name"
          placeholder="Your name please"
          value={userName}
          onChange={(event) => setuserName(event.target.value)}
          required
          minLength="2" />
      </WelcomePage>
      <ButtonStartgame type="submit" onClick={(event) => onFormSubmit(event)}>ABOARD</ButtonStartgame>
    </>
  )
}

export default Player;

