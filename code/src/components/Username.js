/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, startGame } from 'reducers/game';
import { Styled } from './Username.styled';

export const Username = () => {
  const [UsernameInputValue, setUsernameInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    console.log('Form submitted')
    event.preventDefault();
    dispatch(game.actions.setUsername(UsernameInputValue));
    dispatch(startGame())
  }

  return (
    <div>
      <Styled.Container>
        <Styled.StartScreenText>
          Lorem  some fun intro text maybe
        </Styled.StartScreenText>
        <form onSubmit={(event) => onFormSubmit(event)}>
          <label>
            <Styled.StartScreenText>
            Enter your name:
            </Styled.StartScreenText>
            <Styled.StartScreenInput type="text" onChange={(event) => setUsernameInputValue(event.target.value)} />
          </label>
          <Styled.StartScreenButton type="submit">Submit</Styled.StartScreenButton>
        </form>
      </Styled.Container>
      <Styled.Footer>
        <Styled.FooterText>
          Made by Kim Svensson, Nick Jensen & Hanna Nörgård
        </Styled.FooterText>
        <Styled.FooterText>
        Background by https://ansimuz.com/
        </Styled.FooterText>
        <Styled.FooterText>
          Loading gif by https://twitter.com/HernanZh
        </Styled.FooterText>
      </Styled.Footer>
    </div>
  )
}