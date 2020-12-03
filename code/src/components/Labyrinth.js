/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import { useSelector, useDispatch } from 'react-redux'

import { fetchNext } from 'reducers/fetch'
import { Button } from 'lib/Button'
import { Card } from 'lib/Card'

const Description = styled.h1`
    font-size: 25px;
  `
const ColorChange = () => {
  const location = useSelector((state) => state.game.currentStep)

  const bodyStyling = (color) => {
    document.body.style.background = color
  }

  if (location.coordinates === '0,0') {
  return 'hotpink'
  } else if (location.coordinates === '1,0') {
    return 'orange'
  } else if (location.coordinates === '1,1') {
    return 'brown'
  } else if (location.coordinates === '0,1') {
    return 'purple'
  } else if (location.coordinates === '0,2') {
    return 'red'
  } else if (location.coordinates === '0,3') {
    return 'yellow'
  } else if (location.coordinates === '1,3') {
    return 'papayawhip'
  }
}

const Gradient = () => {
  const location = useSelector((state) => state.game.currentStep)

  if (location.coordinates === '0,0') {
  return 'linear-gradient(133deg, rgba(119,114,114,0.8981412394662921) 0%, rgba(112,108,108,0.8981412394662921) 0%, rgba(106,111,124,1) 23%, rgba(54,94,53,1) 71%, rgba(62,69,62,0.9831131495786517) 93%)'
  } else if (location.coordinates === '1,0') {
    return 'linear-gradient(133deg, rgba(239,239,193,1) 0%, rgba(116,118,109,1) 22%, rgba(131,133,119,1) 39%, rgba(239,239,193,0.8454727001404494) 55%, rgba(116,118,109,1) 77%, rgba(105,106,102,1) 100%)'
  } else if (location.coordinates === '1,1') {
    return 'linear-gradient(133deg, rgba(250,254,221,1) 0%, rgba(157,162,157,1) 40%, rgba(98,124,99,1) 56%, rgba(59,73,155,1) 81%, rgba(37,58,184,1) 91%, rgba(28,40,123,1) 100%)'
  } else if (location.coordinates === '0,1') {
    return 'linear-gradient(133deg, #ca7345, #ffdeca 16%,#ca7345 21%, #ffdeca 24%, #a14521 27%, #ca7345 36%, #ffdeca 45%, #ffdeca 60%, #ca7345 72%, #ffdeca 80%,#ca7345 84%, #732100)'
  } else if (location.coordinates === '0,2') {
    return 'linear-gradient(133deg, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)'
  } else if (location.coordinates === '0,3') {
    return 'linear-gradient(133deg, #f5f7fa 0%, #c3cfe2 100%)'
  } else if (location.coordinates === '1,3') {
    return 'linear-gradient(to top, #fddb92 0%, #d1fdff 100%)'
  }
}

const Animation = () => {
  const location = useSelector((state) => state.game.currentStep)

  if (location.coordinates === '0,0') {
  return 'startkey 5s infinite'
  } else if (location.coordinates === '1,0') {
    return 'orange'
  } else if (location.coordinates === '1,1') {
    return 'brown'
  } else if (location.coordinates === '0,1') {
    return 'purple'
  } else if (location.coordinates === '0,2') {
    return 'red'
  } else if (location.coordinates === '0,3') {
    return 'yellow'
  } else if (location.coordinates === '1,3') {
    return 'papayawhip'
  }
}

export const Labyrinth = () => {
  const currentStep = useSelector((state) => state.game.currentStep)
  const User = useSelector((state) => state.game.username)
  const isLoading = useSelector((state) => state.ui.isLoading)
  const choices = useSelector((state) => state.game.currentStep.actions)
  const Back = useSelector((state) => state.game.history)
  const dispatch = useDispatch()

  const handleSubmit = (direction) => {
    dispatch(fetchNext(User, direction))
  }

  const Wrapper = styled.section`
    background: purple;
    height: 100%;
    width: 100%;
  `

  return (
    <>
      {!isLoading && (
        <>
          {currentStep.coordinates && (
            <Wrapper>
              <Card
                background={ColorChange}
                backgroundImage={Gradient}
                animation={Animation}>
                <p>{currentStep.coordinates}</p>
                <Description>{currentStep.description}</Description>
              </Card>

              {currentStep.actions.map((action) => {
                return (
                  <Card key={action.description} background={ColorChange}>
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
            </Wrapper>
          )}
        </>
      )}
    </>
  )
}