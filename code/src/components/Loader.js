import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import Lottie from "react-lottie"
import animationData from "../lotties/rotating-pixel-heart.json"

import ui from "../reducers/ui"

const LoaderContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

// const LoaderComponent = styled.div`
    
// `

const Loader = () => {
    const isLoading = useSelector((store) => store.ui.isLoading)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <>
      {isLoading &&
       <LoaderContainer>
            <Lottie
            options={defaultOptions}
            width={500}
            height={500}
             />
        </LoaderContainer>}
        </>
    )
}
    

export default Loader