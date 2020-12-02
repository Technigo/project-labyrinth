/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchNext } from 'reducers/game'
import { Button } from 'lib/Button'
import { Card } from 'lib/Card'
import { Container } from 'lib/Container'

export const Labyrinth = () => {
  const currentStep = useSelector((state) => state.game.currentStep)
  const User = useSelector((state) => state.game.username)
  const isLoading = useSelector((state) => state.ui.isLoading)
  const dispatch = useDispatch()

  const handleSubmit = (direction) => {
    dispatch(fetchNext(User, direction))
  }

  return (
    <>
      {!isLoading && (
        <div>
          {currentStep.coordinates && (
            <Container>
              <p>Coordinates: {currentStep.coordinates}</p>
              <h1>{currentStep.description}</h1>
              {currentStep.actions.map((action) => {
                return (
                  <Card key={action.description}>
                    <p>{action.description}</p>
                    <Button
                      type="button"
                      value={action.direction}
                      onClick={(event) => handleSubmit(event.target.value)}>
                      Go {action.direction}
                    </Button>
                  </Card>
                )
              })}
            </Container>
          )}
        </div>
      )}
    </>
  )
}