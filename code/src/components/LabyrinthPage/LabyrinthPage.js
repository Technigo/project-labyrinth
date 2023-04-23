/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { LabyrinthCard } from '../../lib/cards'
import { labyrinth, generateLabyrinthData } from '../../reducers/labyrinth'
// import { loading } from './reducers/loading'
import './LabyrinthPage.css';

const title = 'Labyrinth';

const LabyrinthPage = () => {
// xx
  return (
    <div className="game-container">
      <LabyrinthCard title={title} />
    </div>
  )
}

export default LabyrinthPage;