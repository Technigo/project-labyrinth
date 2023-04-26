import React from 'react'
import styled from 'styled-components/macro'

const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 30px
    justify-self: center;
    width: 90%;
    max-width: 300px;
    background: #fff;
    margin-bottom: 20px;
`

export const Loader = () => {
  return (
    <LoaderContainer>
        LOADING
    </LoaderContainer>
  )
}