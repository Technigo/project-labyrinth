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

    const backgrounds = {
        "0,0": "./assets/archway-cavern.png",
        "1,0": "./assets/light-rays-cavern.jpg",
        "1,1": "./assets/brighter-cavern.jpg",
        "0,1": "./assets/ice-cavern.jpg",
        "0,2": "./assets/ice-cavern.jpg",
        "0,3": "./assets/bright-light.jpg",
        "1,3": "./assets/calm.jpg",
    }
    return (
        <BackgroundImage image={backgrounds[coordinates]}>
            {children}
        </BackgroundImage>
    );
};