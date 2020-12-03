import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const LoadingIndicator = () => {
  const isLoading = useSelector((store) => store.ui.isLoading)
  return (
    <>
      {isLoading && <LoadingMessage>The page is loading!!!</LoadingMessage>}
    </>
  )
}

const LoadingMessage = styled.p`
  font-family: 'Mystery Quest', cursive;
  font-size: 15px;
  text-align: center;
`