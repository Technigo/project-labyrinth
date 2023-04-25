import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bigText } from './Startpage.styled';

export const Startpage = () => {
  const dispatch = useDispatch() 
  const [input, setInput] = useState('')

  const letsStart = (e) => {
    e.preventDefault();
    dispatch(labyrinth.actions.setUserName(input))
    dispatch(startTheGame())
  }


  return (
    <div>
      <bigText>Welcome text ish</bigText>
      <input type="input" alt="input">Name here</input>
      <button alt="start button" type="button">Start Game</button>
    </div>
  )
}

  return (
    <Container>
      {isLoading ? <Loading /> : (<div>{gameStart === '' ? <UserInput /> : <MazePage />} </div>)}
    </Container>
  )
}

