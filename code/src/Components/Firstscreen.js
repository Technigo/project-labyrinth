import React from 'react';
import { useSelector } from 'react-redux';
import { Startpage } from './Startpage';
import { Gamepage } from './Gamepage';

export const Firstscreen = () => {
  const userName = useSelector((store) => store.labyrinth.userName)
  return (
    <div>
      {userName === '' ? <Startpage /> : <Gamepage />}  {/* Ternary Operator */}
    </div>
  )
};