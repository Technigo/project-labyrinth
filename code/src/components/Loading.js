import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

const Pacman = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Spinner = require('react-spinkit')

export const Loading = () => {
  const isLoading = useSelector((store) => store.loader.isLoading)

  return (
    isLoading && (
      <Pacman>
        <Spinner name="pacman" color="black" />
      </Pacman>
    )
  )
}
