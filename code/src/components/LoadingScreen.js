import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledLoadingScreen = styled.div`
.loading {
    background-color: #9f003e;
    position: absolute;
    z-index: 1
}
`

const LoadingImage = styled.img`
  width: 80px;
  height: 80px;
//   border-radius: 50%;
`;

export const LoadingScreen = () => {
    const isLoading = useSelector((store) => store.loading.isLoading)

    return isLoading &&
        <StyledLoadingScreen>
                <div className="loading">
                    <h1>LOADING</h1> 
                    <LoadingImage src="./assets/hourglass.png" />
                </div>
        </StyledLoadingScreen>
    
}