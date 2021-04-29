import React from 'react'
import { useSelector } from 'react-redux'
import "nes.css/css/nes.min.css"
import styled from 'styled-components'
import InitiateGame from "./InitateGame"
// import StartGame from './StartGame'
// import ContinueGame from './ContinueGame'
import WaitPage from "./WaitPage"

const Container = styled.div`
    width: 100%;
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
`

//conditionally render StartGame, where player puts in his name. if not start screen, GameContinue  
// if true render ContinueGame if no value (null) for username: retun false: then render StartGame
//we reach the username thorugh useSelector
const GameScreen = () => {
const pageLoading = useSelector(store => store.labyrinth.isLoading) 
   
    return ( 
    <Container>
        {pageLoading ? <WaitPage /> : <InitiateGame />}
    </Container>
    )
}

export default GameScreen