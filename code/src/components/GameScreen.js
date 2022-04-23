import React from 'react'
import { useSelector } from 'react-redux'
import DirectionButton from 'components/DirectionButton'
// import Restart from './Restart'
import styled from 'styled-components';

const LabyrinthStatement = styled.h2`
  font-family: 'Titillium Web', sans-serif;
  color: linen;
  text-align: center;
`

const LabyrinthQuestion = styled.p`
  font-family: 'Titillium Web', sans-serif;
  color: pink;
  text-align: center;
`


const GameScreen = () => {
  const question = useSelector((store) => store.labyrinth.question)

  return (
    <div>
      <LabyrinthStatement>{question.description}</LabyrinthStatement>
      {question.actions?.map((item, index) => {
        return (
          <LabyrinthQuestion key={index}>
            You look to the {item.direction}. {item.description}
          </LabyrinthQuestion>
        )
      })}
      {question.actions && <DirectionButton />}
    </div>
  )
}

export default GameScreen
