import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import labyrinth, { generateFetch } from 'reducers/labyrinth';
// import styled from 'styled-components/macro';
// import {  } from '../styles/mainStyles';

const Choices = () => {
  const [userNameInputValue/* , setUserNameInputValue */] = useState('');

  const dispatch = useDispatch();

  const onChoiceMade = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setChoice(userNameInputValue));
    dispatch(generateFetch())
    console.log(userNameInputValue)
  }

  return (
    <section>
      <div>
        fetch.map
          description
          direction.description
        <button type="button" onClick={onChoiceMade()}>search</button>
      </div>
    </section>
  )
}

export default Choices;
