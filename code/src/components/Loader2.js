import React from 'react'
import { useSelector } from 'react-redux'
import { Circular } from 'styled-loaders-react'
import styled from 'styled-components'

const Loader2 = () => {
  const isLoading = useSelector((store) => store.games.loading)
  console.log(isLoading)

    return (
      isLoading && (
        <LoadingContainer>
            <Circular color="#004900" size="80px" />
        </LoadingContainer>
      )
    )
}

// Local styling
const LoadingContainer = styled.div`
  height: 100vh;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Loader2