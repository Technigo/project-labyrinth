import React from "react";
import styled from "styled-components";

const BackgroundImage = styled.div`
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #ffffff;
`;

export const LocationBackground = ({children, coordinates}) => {
    return (
        <BackgroundImage image={"./assets/ice-cavern.jpg"}>
            {children}
        </BackgroundImage>
    );
};