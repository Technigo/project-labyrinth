import React from 'react'
import { useSelector } from 'react-redux'
import "nes.css/css/nes.min.css"
import styled from 'styled-components'
import InitiateGame from "./InitateGame"
import WaitPage from "./WaitPage"

const Container = styled.div`
    width: 100%;
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
`

//conditionally render Initiate game, where player puts in his name if not Wait page 
//we loading state the wit useselector
const GameScreen = () => {
const pageLoading = useSelector(store => store.labyrinth.isLoading) 
   
    return ( 
    <Container>
        {pageLoading ? <WaitPage /> : <InitiateGame />}
    </Container>
    )
}

export default GameScreen