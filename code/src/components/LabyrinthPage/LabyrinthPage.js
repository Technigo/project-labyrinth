/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { LabyrinthCard } from '../../lib/cards'
import { MainButton, North, South, West, East } from '../../lib/buttons'
import { labyrinth, generateLabyrinthData } from '../../reducers/labyrinth'
// import { loading } from './reducers/loading'
import './LabyrinthPage.css';

const title = 'Labyrinth';
// const description = 'Its warmer here. Rays of light penetrate the ceiling.';

const LabyrinthPage = () => {
  const dispatch = useDispatch()
  // const coordinates = useSelector((store) => store.labyrinth.coordinates)
  const description = useSelector((store) => store.labyrinth.description)
  const actions = useSelector((store) => store.labyrinth.actions)
  // const loadingState = useSelector((store) => store.loading.isLoading)

  const onClickRestart = () => {
    console.log('user clicked restart')
    dispatch(labyrinth.actions.restart());
  }
  return (
    <div className="game-container">
      <LabyrinthCard title={title} description={description} actions={actions} />
      <MainButton style={{ position: 'absolute', bottom: '0', right: '0' }} onClick={onClickRestart}>Restart</MainButton>
      <North />
      <South />
      <West />
      <East />
    </div>
  )
}

export default LabyrinthPage;