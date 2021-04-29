import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <LoaderContainer>
        <Loading></Loading>
    </LoaderContainer>
  )
}

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Loading = styled.div`
  width:60px;
  height:60px;
  border: 2px solid black;
  border-top-color: #004900;
  border-radius: 50%;
  animation: 1s spinner infinite ease-in-out;
  @keyframes spinner {
  to {transform: rotate(360deg)
  }
}
`;

export default Loader