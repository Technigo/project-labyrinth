import React from 'react'
import styled from "styled-components"
import { keyframes } from 'styled-components'
import { useSelector } from "react-redux";


// Styled components
const LoaderOverlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #4A412A;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Rotate = keyframes`
    from{
        transform: rotate(0deg)
    }
    to{
        transform: rotate(360deg)
    }
`
const LoaderAnimation = styled.div`
    animation: ${Rotate} infinite 2s;
`
const AnimationItem = styled.div`
    background-color: pink;
    height: 50px;
    width: 50px;
`

// Loader component
const Loader = () => {
    const loading = useSelector((store) => store.ui.loading)

    return (
        <>
        {loading && (
        <LoaderOverlay>
            <LoaderAnimation>
                <AnimationItem/>
            </LoaderAnimation>
        </LoaderOverlay>
        )}
        </>
    )
}

export default Loader