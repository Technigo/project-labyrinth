import React from "react";
import Lottie from 'react-lottie';
import animationData from './lotties/compass';
import styled from 'styled-components/macro'


const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };


    return (
        <MainWrapperLoading>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
        </MainWrapperLoading>
    );
}

export default Loading


const MainWrapperLoading = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    background-color: black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`