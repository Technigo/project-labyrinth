import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'

const LoaderContainer = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: lime;

`

const LoadingPage = () => {
  const isLoading = useSelector((state) => state.game.loading)

  return (
    <>
      {isLoading &&
        <LoaderContainer>
          <h1>Loading...</h1>
        </LoaderContainer>
      }
    </>
  )
}

export default LoadingPage

