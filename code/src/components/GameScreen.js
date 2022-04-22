import React from 'react'
import { useSelector } from 'react-redux'
import DirectionButton from 'components/DirectionButton'
// import Restart from './Restart'
// import styled from 'styled-components';

const GameScreen = () => {
  const question = useSelector((store) => store.labyrinth.question)
  const isLoading = useSelector((store) => store.loader.isLoading)

  return (
    isLoading === false && (
      <div>
        <h2>{question.description}</h2>
        {question.actions?.map((item, index) => {
          return (
            <p key={index}>
              You look to the {item.direction}. {item.description}
            </p>
          )
        })}
        {question.actions && <DirectionButton />}
      </div>
    )
  )
}

export default GameScreen
