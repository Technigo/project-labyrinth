import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import labyrinth, { generateFetch } from 'reducers/labyrinth';
import styled from 'styled-components/macro';
// import { InnerWrapper } from '../styles/mainStyles';

const UserInput = () => {
  const [userNameInputValue, setUserNameInputValue] = useState('');
  const [userName, setUserName] = useState(false)

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUser(userNameInputValue));
    dispatch(generateFetch({ url: 'https://labyrinth.technigo.io/start', username: userNameInputValue }))
    console.log(userNameInputValue)
    setUserName(false);
  }

  const renderWelcomePage = () => {
    if (userName) {
      return (
        <>
          <WelcomeText>GREETINGS PROFESSOR {userNameInputValue},</WelcomeText>
          <WelcomeText>HOW ARE YOU FEELING TODAY?</WelcomeText>
          <WelcomeText>SHALL WE PLAY A GAME?</WelcomeText>
          <button type="button" onClick={(e) => onFormSubmit(e)}>YES</button>
          <button type="button">NO</button>
        </>
      )
    } else {
      return (
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
          <button type="submit">GO</button>
        </form>
      )
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

