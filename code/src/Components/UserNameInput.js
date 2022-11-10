import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import game, { generateDescription } from 'reducers/game';
import styled from 'styled-components';
import Header from './Header';
import Wrapper from './Wrapper';

// @TODO generate random unique username to always make game work?

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const UserNameInput = () => {
  const [userNameInputValue, setUserNameInputValue] = useState('');
  const dispatch = useDispatch();
  // const author = useSelector((store) => store.quotes.author);

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUser(userNameInputValue + makeid(16))); // klar
    dispatch(generateDescription());
    userNameInputValue('');
  }

  return (
    <UserNameInputBackground>
      <Wrapper>
        <Header />
        <UserNameInputContainer>
          <form onSubmit={(event) => onFormSubmit(event)}>
            <label htmlFor="user-input">
              <p>Enter your username:</p>
              <input
                id="user-input"
                type="text"
                value={userNameInputValue}
                required
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                onChange={(event) => setUserNameInputValue(event.target.value)}
                placeholder="User name..." />
            </label><br />
            <StartButton type="submit">Start game</StartButton>
          </form>
        </UserNameInputContainer>
      </Wrapper>
    </UserNameInputBackground>
  )
}

export default UserNameInput;

const UserNameInputContainer = styled.div`
border: solid 2px blue;
justify-content: center;
display: grid;
`

const StartButton = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
/* border: 2px solid palevioletred; */
border-radius: 3px;
`

const UserNameInputBackground = styled.div`
  background-image: linear-gradient(#ad91bd, white);
`