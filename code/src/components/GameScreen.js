import React from 'react'
import { useSelector } from 'react-redux'
import DirectionButton from 'components/DirectionButton'
import Restart from './Restart'
import styled from 'styled-components';



const GameScreen = () => {
  const question = useSelector((store) => store.labyrinth.question)

  if (question.actions.length === 0) {
    return (
      <>
    <h2 className="labyrinthStatement">{question.description}</h2>
    <Restart />
    </>
    )
  }

  return (
    <div className="gameContainer">
      <h2 className="labyrinthStatement">{question.description}</h2>
      {question.actions?.map((item, index) => {
        return (
          <p className="labyrinthQuestion" key={index}>
            You look to the {item.direction}. {item.description}
          </p>
        )
      })}
      <div className="buttonContainer">
      {question.actions && <DirectionButton />}
      </div>
    </div>
  )
}

export default GameScreen
