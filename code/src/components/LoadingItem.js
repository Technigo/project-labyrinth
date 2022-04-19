import React from "react"
import { useSelector } from "react-redux"
import { game } from "reducers/game"
import styled, { keyframes }from "styled-components"

const Loading = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
background: #fff;
display: flex;
justify-content: center;
align-items: center;
background-color: black;
`

const spinner = keyframes`
0% {
    transform: rotate(0);
}
50% {
    transform: rotate(180deg);
}
100% {
    transform: rotate(360deg);
}
`

const Img = styled.img`
animation: ${spinner} infinite 0.5s;
width: 100px;
`

export const LoadingItem = () => {

    const loading = useSelector(store => store.game.loading)
    return(
        <>
        {loading && 
       <Loading><Img src="https://img.icons8.com/neon/96/000000/experimental-bat-neon.png"/></Loading>}
        </>
    )

}