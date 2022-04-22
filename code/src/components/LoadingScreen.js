import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";


const StyledLoadingScreen = styled.div`
  display: flex; 
  justify-content: center;
  background-color: #9f003e;
  padding: 25px;
  border-radius: 10px;
  text-align: center;
  width: 150px;
  height: 150px;

  h1 {
    text-align: center;
    color: #fff;
  }
`
const LoadingContainer = styled.div`
  display: flex;
  align-items: center; 
  min-height: 100vh;
  justify-content: center;
`

export const LoadingScreen = () => {

  const isLoading = useSelector((store) => store.loading.isLoading)

  return isLoading &&
    <LoadingContainer>
      <StyledLoadingScreen>
        <h1>LOADING</h1> 
      </StyledLoadingScreen>
    </LoadingContainer>
}