import React from 'react'
import styled from 'styled-components/macro'

const LoaderContainer = styled.div`
    text-align: center;
    padding-top: 200px;
`

const LoaderMessage = styled.p`
    font-size: 25px;
`

const Loader = () => (
  <LoaderContainer>
    <LoaderMessage>Page is loading...</LoaderMessage>
  </LoaderContainer>
)

export default Loader

