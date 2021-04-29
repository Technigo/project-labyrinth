import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import "nes.css/css/nes.min.css"

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;  
    background-color: rgba(244, 244, 244, 0.3); 
`

export const ImageCountainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin: auto;
    position: relative;
    top: 40%;
`

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
`

export const LoadingImage = styled.img`
    width: 100px;
    height: 100px;
    margin: 20px;
    animation-name: ${rotation};
    animation-duration: 5s;
    animation-direction: alternate;
    animation-iteration-count: infinite linear;
    animation-timing-function: linear;
`

const SpinningLoader = () => {
    return (
        <Overlay>
            <ImageCountainer>
                <LoadingImage 
                    src='../assets/maze.png'
                    alt='maze'
                />
            </ImageCountainer>
        </Overlay>
    )
}

export default SpinningLoader