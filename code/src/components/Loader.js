import React from 'react'
import { useSelector } from 'react-redux'
import { Circular } from 'styled-loaders-react'
import styled from 'styled-components/macro'

const Loader = () => {
  const isLoading = useSelector((store) => store.games.loading)

    return (
      isLoading && (
        <LoadingContainer>
            <Circular color="lightgray" size="80px" />
        </LoadingContainer>
      )
    )
}

const LoadingContainer = styled.div`
  height: 100vh;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Loader