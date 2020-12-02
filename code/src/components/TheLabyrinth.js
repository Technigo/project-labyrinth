import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Button } from '../lib/Button'
import { CardContainer } from '../lib/Card'
import { Wrapper } from '../components/Main'
import { fetchActionData } from '../reducers/thunk'
import { LoadingIndicator } from './LoadingIndicator'

export const TheLabyrinth = () => {
  const gameData = useSelector(state => state.game.all.data)
  const username = useSelector(state => state.game.username)
  const isLoading = useSelector(state => state.ui.isLoading)
  
  const outer = true

  const dispatch = useDispatch()

  // this is the actions found previously in button
  // updated thunk so it has the params of username, move, direction
  // so username, direction and type is not hardcorded into 'xxxx'
  const handleActionClick = (type, direction) => {
    dispatch(fetchActionData(username, type, direction))
  }

  if (isLoading) {
    return (
      <CardContainer>
        <LoadingIndicator />
      </CardContainer>
    )
  } else {
    return (
      <>
        <CardContainer>
          <p>{gameData.coordinates}</p>
          <p>{gameData.description}</p>
          <p>You chose to go: {gameData.direction}</p>
          {/* //this was originally in Card */}
          {/* // The mapfunction needs to have a key */}
        </CardContainer>
        <Wrapper>
          {gameData.actions.map(item => (
            <CardContainer key={item.direction}>
              <p>{item.description}</p>
              <Button onClick={() => handleActionClick(item.type, item.direction)}>
                {item.direction}
              </Button>
            </CardContainer>
          ))}
        </Wrapper>
      </>
    )
  }
}


