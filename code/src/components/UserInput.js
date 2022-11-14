import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import labyrinth, { generateFetch } from 'reducers/labyrinth';
import styled from 'styled-components/macro';
import TypeIt from 'typeit-react';
import { InputButton, Devices } from './mainStyles';

const UserInput = () => {
  const [userNameInputValue, setUserNameInputValue] = useState('');
  const [userName, setUserName] = useState(false);

  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.ui.isLoading);

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUser(userNameInputValue));
    dispatch(generateFetch({ url: 'https://labyrinth.technigo.io/start', username: userNameInputValue }));
    setUserName(false);
  }

  const renderWelcomePage = () => {
    if (userName) {
      return (
        <>
          <WelcomeWrapper>
            <TypeIt>
              <WelcomeText>GREETINGS PROFESSOR {userNameInputValue.toUpperCase()},</WelcomeText>
              <WelcomeText>HOW ARE YOU FEELING TODAY?</WelcomeText>
              <WelcomeText>SHALL WE PLAY A GAME?</WelcomeText>
            </TypeIt>
          </WelcomeWrapper>
          <InputButton type="button" onClick={(e) => onFormSubmit(e)}>YES</InputButton>
          <InputButton type="button" onClick={(e) => window.location.reload(e.preventDefault())}>NO</InputButton>
        </>
      )
    } else {
      return (
        isLoading === false && (
          <form onSubmit={(e) => {
            setUserName(true);
            renderWelcomePage(e);
          }}>
            <label htmlFor="user-input">
              <WelcomeText>Type in your name:</WelcomeText>
              <input
                className="name-input"
                id="user-input"
                type="text"
                value={userNameInputValue}
                onChange={(e) => {
                  setUserNameInputValue(e.target.value);
                }} />
            </label>
            <InputButton
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
  font-size: 1.7em;
  color: #43B771;

  @media ${Devices.laptop} {
  font-size: 2em;
}
`

const WelcomeWrapper = styled.div`
  min-height: 150px;
`