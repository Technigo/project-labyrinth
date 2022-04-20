import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { MiniMap } from "./MiniMap"
import { nextStep } from "reducers/game"
import styled from "styled-components/macro"
import { Game } from "./Game"

import arrow from "../assets/compass.svg"

const Section = styled.section`
position: relative;
width: 80%;
height: 100%;
max-width: 400px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding: 20px;
margin: auto;
`
const Title = styled.h1`
align-text: center;

`
const NorthButton = styled.button`
position: absolute;
display: flex;
flex-direction: column;
width: 50px;
background: transparent;
border: none;
color: white;
top: -10%;
left: 50%;
`
const WestButton = styled.button`
position: absolute;
left: -15%;
top: 50%;
transform: rotate(-90deg);
display: flex;
flex-direction: column;
width: 50px;
background: transparent;
border: none;
color: white;
`
const SouthButton = styled.button`
position: absolute;
bottom: -10%;
left: 50%;
transform: rotate(180deg);
display: flex;
flex-direction: column;
width: 50px;
background: transparent;
border: none;
color: white;
`
const EastButton = styled.button`
position: absolute;
right: -15%;
top: 50%;
transform: rotate(90deg);
display: flex;
flex-direction: column;
width: 50px;
background: transparent;
border: none;
color: white;
`
const Arrow = styled.img`
width: 100%;
`

export const Labyrinth = () => {
    const {description, coordinates, actions} = useSelector(store => store.game.currentPosition)

    const dispatch = useDispatch()
    
    const handleButtonClick = (type, direction) => {
        dispatch(nextStep(type, direction))
    }

    const Restart = () => {
        window.location.reload()
    }

    const ActionCard = ({description, type, direction}) => (
        console.log({direction}),
        <div>
            {direction === "North" && <NorthButton onClick={() => handleButtonClick(type, direction)}><Arrow src={arrow}/></NorthButton>}
            {direction === "West" && <WestButton onClick={() => handleButtonClick(type, direction)}><Arrow src={arrow}/></WestButton>}
            {direction === "South" && <SouthButton onClick={() => handleButtonClick(type, direction)}><Arrow src={arrow}/></SouthButton>}
            {direction === "East" && <EastButton onClick={() => handleButtonClick(type, direction)}><Arrow src={arrow}/></EastButton>}
            {/* <p>{description}</p> */}
        </div>
    )

    return (
        <>
        
        <Section>
            <Title>{description}</Title>

            {actions.length === 0 && <div><button onClick={() => Restart()}>Play again</button> </div>}

            {actions.length > 0 && actions.map(item => <ActionCard key={item.direction} {...item} />)}
            
        </Section>
        <MiniMap coordinates={coordinates}/>
        </>
    )
}