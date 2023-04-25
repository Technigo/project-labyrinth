import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { MainButton, North, South, West, East } from '../lib/buttons'
import { labyrinth, generateActionData } from '../reducers/labyrinth'

const Directions = () => {
  const dispatch = useDispatch()
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  console.log('DIRECTIONS coordinates:', coordinates)
  const description = useSelector((store) => store.labyrinth.description)
  console.log('DIRECTIONS description:', description)
  const actions = useSelector((store) => store.labyrinth.actions)
  console.log('DIRECTIONS actions:', actions)

  const startposition = coordinates === '';
  const endposition = coordinates === '1,3';

  const onClickRestart = () => {
    console.log('user clicked restart')
    dispatch(labyrinth.actions.restart());
  }

  const onClickGo = () => {
    console.log('user clicked one of the arrows')
    dispatch(generateActionData(labyrinth.type, labyrinth.direction))
  }

  return (
    <>
      {!endposition && !startposition && (
        <>
          <North onClick={onClickGo} />
          <South onClick={onClickGo} />
          <West onClick={onClickGo} />
          <East onClick={onClickGo} />
        </>
      )}
      {!startposition && (<MainButton style={{ position: 'absolute', bottom: '0', right: '0' }} onClick={onClickRestart}>Restart</MainButton>)}
    </>
  )
}

export default Directions;