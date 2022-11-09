/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { useSelector } from 'react-redux';
// import labyrinth from 'reducers/labyrinth';
import UserInput from './UserInput';
import Choices from './Choices';
// import styled from 'styled-components/macro';
// import {  } from '../styles/mainStyles';

const MainComponent = () => {
  const quest = useSelector((store) => store.labyrinth.quest);
  console.log(quest)

  return (
    <div>
      {quest === '' ? <UserInput /> : <Choices />}
    </div>
  )
}

export default MainComponent;
