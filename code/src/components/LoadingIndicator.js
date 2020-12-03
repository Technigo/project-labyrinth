import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import Loader from 'react-loader-spinner'

export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.game.isLoading)

  console.log(isLoading)

  return (
    <Container>
      {isLoading && 
      <Loader
      type="Oval"
      color= "#00ff7f"
      height={100}
      width={100}
      timeout={5000}
   />
      } 
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;