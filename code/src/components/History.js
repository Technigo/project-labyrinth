import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep } from 'reducers/game'
import styled from 'styled-components'

const HistoryContainer = styled.div`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: 10px;
  bottom: 0;
`
const Button = styled.button`
  width: 40px;
  height: 40px;
`

export const History = () => {
  const dispatch = useDispatch()
  const history = useSelector(store => store.game.history)
  return (
    <HistoryContainer>
      {history?.map(action => (
        <Button type='button' onClick={() => dispatch(nextStep(action))}>
          {action.direction === 'North'
            ? ' ⬆' //&#8593;
            : action.direction === 'South'
            ? ' ⬇' //&#8595;
            : action.direction === 'West'
            ? ' ⬅' //&#8594;
            : action.direction === 'East'
            ? ' ➡' //&#8592;
            : ''}
        </Button>
      ))}
    </HistoryContainer>
  )
}
