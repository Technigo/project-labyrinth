import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../animation/loader'
import { useSelector } from 'react-redux'

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
    <>
        {loading && <Lottie options={defaultOptions} height={400} width={400} />}
    </>
    );


};
export default LoadingAnimation;