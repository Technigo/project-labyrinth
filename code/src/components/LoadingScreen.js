import React from 'react'
import styled from 'styled-components'

const LoadingScreen = () => {
    return (
        <Main>
            <lottie-player
                src="https://assets6.lottiefiles.com/private_files/lf30_DGRf6G.json" 
                background="transparent"
                speed="1"
                style={{width: '300px', height: '300px'}}
                loop 
                autoplay>
            </lottie-player>
        </Main>
    )
}

export default LoadingScreen

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #000;
    width: 100vw;
    height: 100vh;
`