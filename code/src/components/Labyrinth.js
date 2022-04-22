import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { MiniMap } from "./MiniMap"
import { nextStep } from "reducers/game"
import styled from "styled-components/macro"
import { Game } from "./Game"

import arrow from "../assets/redArrow.svg"

const Section = styled.section`
position:relative;
width: fit-content;
height: 100%;
max-width: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 100px auto 0 auto;

`
const Title = styled.h1`

text-align: center;
font-size: 0.8rem;
background-color: rgba(0,0,0, 0.5);
padding: 10px;
margin:auto;
border-radius:10px;


@media (min-width: 768px) {
    font-size: 1rem;
  }
@media (min-width: 1000px) {
    font-size: 1.2rem;
  }

`
const NorthButton = styled.button`
position: absolute;
display: flex;
flex-direction: column;
width: 30px;
background: transparent;
border: none;
color: white;
top: -30px;
left: 50%;
transform: rotate(0);
`
const WestButton = styled.button`
position: absolute;
left: -20px;
top: 50%;
transform: translate(-50%, -50%) rotate(-90deg);
display: flex;
flex-direction: column;
width: 30px;
background: transparent;
border: none;
color: white;

`
const SouthButton = styled.button`
position: absolute;
bottom: -30px;
left: 50%;
transform:rotate(180deg);
display: flex;
flex-direction: column;
width: 30px;
background: transparent;
border: none;
color: white;
`
const EastButton = styled.button`
position: absolute;
right:-40px;
top: 50%;
transform: translate(-50%, -50%) rotate(90deg) ;
display: flex;
flex-direction: column;
width: 30px;
background: transparent;
border: none;
color: white;
`
const Arrow = styled.img`
width: 100%;
transition: transform 1s;
cursor:pointer;

&:hover{
    transform: scale(1.5);
}
`
const PlayButton = styled.button`
background-color: #fff;
  border: 2px solid #eee;
  width:fit-content;
  border-radius: 10%;
  cursor:pointer;
  &:hover{
    background-color: red;
    color: #fff;
  }
  `
const Div = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`
const P = styled.p`

font-weight:900;
text-align: center;
margin:50px auto 10px auto;  
padding:5px;
width:fit-content;
background-color: rgba(0, 0, 0, 0.5);
border-radius: 10px;
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

            {actions.length === 0 && <Div><P>You found your way out, congrats!</P><PlayButton onClick={() => Restart()}>Play again</PlayButton> </Div>}

            {actions.length > 0 && actions.map(item => <ActionCard key={item.direction} {...item} />)}
            
        </Section>
        <MiniMap coordinates={coordinates}/>
        </>
    )
}