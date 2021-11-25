import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../animation/loader'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Section = styled.section`
&:active {
    height: 100vh;
    width: 100%;
}   
`
const LoadingAnimation = () => {
    const loading = useSelector ((store) => store.animation.loading)

    const defaultOptions = {
        loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}
return (
    <Section>   
        
        {loading && <Lottie options={defaultOptions} height={325} width={325} />}
        
    </Section>

    );


};
export default LoadingAnimation;