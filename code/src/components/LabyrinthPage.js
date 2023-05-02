/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { LabyrinthCard } from '../lib/cards'
import { MainButton, North, South, West, East } from '../lib/buttons'
import { labyrinth, generateLabyrinthData } from '../reducers/labyrinth'
import Directions from './Directions';

const title = 'Labyrinth';

const LabyrinthPage = () => {
  const dispatch = useDispatch()
  // const coordinates = useSelector((store) => store.labyrinth.coordinates)
  const description = useSelector((store) => store.labyrinth.description)
  const actions = useSelector((store) => store.labyrinth.actions)
  // const loadingState = useSelector((store) => store.loading.isLoading)

  return (
    <>
      <div className="Game-container">
        <LabyrinthCard title={title} description={description} actions={actions} />
      </div>
      <Directions actions={actions} />
    </>
  )
}

export default LabyrinthPage;