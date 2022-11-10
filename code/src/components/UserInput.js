import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import labyrinth, { generateFetch } from 'reducers/labyrinth';
import styled from 'styled-components/macro';
// import { InnerWrapper } from '../styles/mainStyles';

const UserInput = () => {
  const [userNameInputValue, setUserNameInputValue] = useState('');
  const [userName, setUserName] = useState(false)

  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.ui.isLoading);
  console.log('isLoading', isLoading)

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUser(userNameInputValue));
    dispatch(generateFetch({ url: 'https://labyrinth.technigo.io/start', username: userNameInputValue }))
    console.log('userNameInputValue', userNameInputValue)
    setUserName(false);
  }

  const renderWelcomePage = () => {
    if (userName) {
      return (
        <>
          <WelcomeText>GREETINGS PROFESSOR {userNameInputValue},</WelcomeText>
          <WelcomeText>HOW ARE YOU FEELING TODAY?</WelcomeText>
          <WelcomeText>SHALL WE PLAY A GAME?</WelcomeText>
          <InputButton type="button" onClick={(e) => onFormSubmit(e)}>YES</InputButton>
          <InputButton type="button">NO</InputButton>
        </>
      )
    } else {
      return (
        isLoading === false && (
          <form onSubmit={(e) => {
            setUserName(true)
            renderWelcomePage(e)
          }}>
            <label htmlFor="user-input">
              <WelcomeText>Type in your name:</WelcomeText>
              <input
                className="name-input"
                id="user-input"
                type="text"
                value={userNameInputValue}
                onChange={(e) => {
                  setUserNameInputValue(e.target.value)
                }} />
            </label>
            <InputButton
              // Lade till en spärr så knappen inte blir aktiv förrän man skrivit in nått
              disabled={userNameInputValue.length < 1}
              type="submit">GO
            </InputButton>
          </form>
        ))
    }
  }

  return (
    <>
      {renderWelcomePage()}
    </>
  )
}

export default UserInput;

const WelcomeText = styled.p`
  font-size: 1em;
  color: #43B771;
`

const InputButton = styled.button`
  background-color: #A7BDAC;
  border-color: lightgrey;
  border-radius: 1px;
  box-shadow: 1px 1px 1px grey;
  margin: 1%;
`
