import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import game, { generateDescription } from 'reducers/game';
import styled from 'styled-components/macro'
import { StartButton } from './Buttons';
import Header from './Header';
import Wrapper from './Wrapper';

function makeid(length) {
  // make username unique by adding random characters at the end
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
    dispatch(game.actions.setUser(userNameInputValue + makeid(16)));
    dispatch(generateDescription());
  }

  return (
    <UserNameInputBackground>
      <Wrapper>
        <Header />
        <UserNameInputContainer>
          <form onSubmit={(event) => onFormSubmit(event)} style={{ textAlign: 'center' }}>
            <label htmlFor="user-input">
              <p style={{ textAlign: 'left', marginBottom: '7px', paddingLeft: '2px' }}>Enter your username:</p>
              <input
                id="user-input"
                type="text"
                value={userNameInputValue}
                required
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                onChange={(event) => setUserNameInputValue(event.target.value)}
                style={{ padding: '3px', width: '200px' }} />
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
justify-content: center;
display: grid;
`

const UserNameInputBackground = styled.div`
  background-image: linear-gradient(#ad91bd, white);
`
