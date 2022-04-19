import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { MiniMap } from "./MiniMap"
import { nextStep } from "reducers/game"
import styled from "styled-components/macro"

import arrow from "../assets/compass.svg"

const Section = styled.section`
position: relative;
width: 80%;
max-width: 400px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
justify-items: center;
padding: 20px;
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
top: 0;
left: 50%;
`
const WestButton = styled.button`
position: absolute;
left: 0;
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
bottom: 0;
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
right: 0;
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
        <MiniMap coordinates={coordinates}/>
        <Section>
            <Title>{description}</Title>

            {actions.length === 0 && <h3>Yay you made it out!</h3>}

            {actions.length > 0 && actions.map(item => <ActionCard key={item.direction} {...item} />)}
        </Section>
        </>
    )
}