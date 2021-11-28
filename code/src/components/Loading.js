import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../animation/loader'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

//styling of components: used "parent" absolute and "child" relative, to make the spinner appear where we wanted it
const Section = styled.section`
display: flex;
width: 100%;
height: 100vh;
position: absolute;
justify-content: center;
align-items: center;
background-color: #3c4f34;
`
const Spinner = styled.div`
position: relative; 
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
        <Spinner>   
        {loading && <Lottie options={defaultOptions} height={325} width={325} />} {/*changed height and width to better fit all devises*/}
        </Spinner>
    </Section>
)}
export default LoadingAnimation;