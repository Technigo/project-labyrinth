import React from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components/macro"

import { LoadingSpinner } from '../lib/LoadingSpinner'

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  return (
    <LoadingContainer>
    {isLoading && <LoadingSpinner />}
    </LoadingContainer>
  )

}