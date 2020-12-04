import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Loading = styled.p`
  display: flex;
  align-items:  center;
  justify-content: center;
  color: #00ff00;
  font-size: 24px;
  font-weight: bold;
`

export const Loader = () => {
  const isLoading = useSelector(store => store.game.isLoading)

  return (
    <>
      {isLoading &&
        <Loading>Loading...</Loading>
      }
    </>
  )
}