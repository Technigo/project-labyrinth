import React, { useState } from 'react';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { game, fetchGame } from 'reducers/game';
import { OuterWrapper, InnerWrapper } from './styled-components/StyledWrappers'
import { User } from './styled-components/StyledTexts';
import { Button } from './styled-components/BtnStyles';

const StartPage = () => {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('');

  const onNameSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUser(userName));
    dispatch(fetchGame());
  }

  return (
    <OuterWrapper>
      <InnerWrapper>
        <form onSubmit={(event) => onNameSubmit(event)}>
          <Label htmlFor="user-name"><GameTag>Enter your best gametag!</GameTag>
            <Input
              id="user-name"
              type="text"
              placeholder="Try to be original"
              onChange={(event) => setUserName(event.target.value)}
              required />
          </Label>
          <Button
            type="submit"
            className="start-button">
        Start
          </Button>
        </form>
      </InnerWrapper>
    </OuterWrapper>
  )
};

export default StartPage;

const Label = styled.label`
display: grid;
padding: 20px;
`

const GameTag = styled(User)`
padding: 10px;
font-size: 1.5rem;
font-style: normal;
`

const Input = styled.input`
border: 2px solid blue;
height: 30px;
width: 268px;
margin: 10px;
border: none;
font-size: 1.2rem;
background-color: transparent;
border-bottom: 2px solid #E15554;
::placeholder{
  color: #E15554;
}
&:hover{
::placeholder{
  color: #A3F7B5;
}
}
&:focus {
    outline: none;
    color: black;
    color: #A3F7B5;
}
`