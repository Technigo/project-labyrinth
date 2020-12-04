import React from 'react'
import styled from 'styled-components/macro'
import { useSelector, useDispatch } from 'react-redux'

import { fetchNext } from 'reducers/fetch'
import { Button } from 'lib/Button'
import { Card } from 'lib/Card'

const Description = styled.h1`
    font-size: 25px;
`

export const Labyrinth = () => {
  const currentStep = useSelector((state) => state.game.currentStep)
  const User = useSelector((state) => state.game.username)
  const isLoading = useSelector((state) => state.ui.isLoading)
  const dispatch = useDispatch()

  const ColorChange = () => {
    const element = document.body.style
    if (currentStep.coordinates === '0,0') {
      element.backgroundImage = 'linear-gradient(133deg, rgba(119,114,114,0.8981412394662921) 0%, rgba(112,108,108,0.8981412394662921) 0%, rgba(106,111,124,1) 23%, rgba(54,94,53,1) 71%, rgba(62,69,62,0.9831131495786517) 93%)'
      element.backgroundSize = 'cover'
      element.backgroundAttachment = 'fixed'
    } else if (currentStep.coordinates === '1,0') {
      element.backgroundImage = 'linear-gradient(133deg, rgba(239,239,193,1) 0%, rgba(116,118,109,1) 22%, rgba(131,133,119,1) 39%, rgba(239,239,193,0.8454727001404494) 55%, rgba(116,118,109,1) 77%, rgba(105,106,102,1) 100%)'
      element.backgroundSize = 'cover'
      element.backgroundAttachment = 'fixed'
    } else if (currentStep.coordinates === '1,1') {
      element.backgroundImage = 'linear-gradient(133deg, rgba(250,254,221,1) 0%, rgba(157,162,157,1) 40%, rgba(98,124,99,1) 56%, rgba(59,73,155,1) 81%, rgba(37,58,184,1) 91%, rgba(28,40,123,1) 100%)'
      element.backgroundSize = 'cover'
      element.backgroundAttachment = 'fixed'
    } else if (currentStep.coordinates === '0,1') {
      element.backgroundImage = 'linear-gradient(133deg, #ca7345, #ffdeca 16%,#ca7345 21%, #ffdeca 24%, #a14521 27%, #ca7345 36%, #ffdeca 45%, #ffdeca 60%, #ca7345 72%, #ffdeca 80%,#ca7345 84%, #732100)'
      element.backgroundSize = 'cover'
      element.backgroundAttachment = 'fixed'
    } else if (currentStep.coordinates === '0,2') {
      element.backgroundImage = 'linear-gradient(133deg, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)'
      element.backgroundSize = 'cover'
      element.backgroundAttachment = 'fixed'
    } else if (currentStep.coordinates === '0,3') {
      element.backgroundImage = 'linear-gradient(133deg, #f5f7fa 0%, #c3cfe2 100%)'
      element.backgroundSize = 'cover'
      element.backgroundAttachment = 'fixed'
    } else if (currentStep.coordinates === '1,3') {
      element.backgroundImage = 'linear-gradient(to top, #fddb92 0%, #d1fdff 100%)'
      element.backgroundSize = 'cover'
      element.backgroundAttachment = 'fixed'
    } else {
      element.background = '#38393d'
    }
  }
  window.onload = ColorChange()

  const handleSubmit = (direction) => {
    dispatch(fetchNext(User, direction))
  }

  return (
    <>
      {!isLoading && (
        <>
          {currentStep.coordinates && (
            <>
              <Card>
                <p>△</p>
                {/* <p>{currentStep.coordinates}</p> */}
                <Description>{currentStep.description}</Description>
              </Card>

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
            </>
          )}
        </>
      )}
    </>
  )
}