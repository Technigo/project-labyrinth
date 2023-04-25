import React, { useEffect } from 'react';
import InputSearch from './InputSearch';
import labyrinth from 'reducers/labyrinth'

const StartScreen = () => {
  return ( 
    <InputSearch />
    <Task />
    )
}

export default StartScreen