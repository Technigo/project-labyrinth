import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DirectionButton from 'components/DirectionButton'
import SpinLoader from 'components/SpinLoader'
// import Restart from './Restart'
// import styled from 'styled-components';

const GameScreen = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((store) => store.labyrinth.loading)
  const question = useSelector((store) => store.labyrinth.question)

  return (
    <>
      <h2>{question.description}</h2>
      {question.actions?.map((item, index) => {
        return (
          <p key={index}>
            You look to the {item.direction}. {item.description}
          </p>
        )
      })}
      {question.actions && <DirectionButton />}
    </>
  )
}

export default GameScreen
