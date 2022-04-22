import React from "react";
import styled from "styled-components";

const StyledLoadingScreen = styled.div`
.loading {
    background-color: red;
}
`

export const LoadingScreen = () => {
    return (
        <StyledLoadingScreen>
                <div className="loading">
                    <h1>LOADING</h1>
                </div>
        </StyledLoadingScreen>
    )
}