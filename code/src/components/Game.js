import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"

import { Starter } from './Starter'
import { moveMaze } from "../reducers/maze"

/* import { NavButton } from "styling/styling" */

// Styled components
const AppMain = styled.section`
    max-width: 600px;
    margin: 0 auto;
`
const GameContainer = styled.section`
    max-width: 500px;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.6);
    border: 1px solid black;
    border-radius: 10px;
`
const InfoDiv = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    padding: 20px;
    border-radius: 10px;
`
const NextDiv = styled.div`
    text-align: center;
`
const NavDiv = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 15px;
`
const ButtonContainer = styled.div`
    text-align: center;
`
const NavButton = styled.button`
    background-color: lightblue;
    border: none;
    border-radius: 10px;
    max-width: 100px;
    padding: 10px;
`
const TheEndDiv = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
`

// Game component
const Game = () => {
const data = useSelector((store)=>(store.maze.response))
const userName = useSelector((store)=>(store.maze.username))
console.log("username", userName) // CONSOLE
console.log("data", data) // CONSOLE

const dispatch = useDispatch()

    return(
        <AppMain>
            {!userName ? <Starter /> :
            <GameContainer>
                <InfoDiv>
                    <p>{data.coordinates}</p>
                    <p>{data.description}</p>
                </InfoDiv>
                {(data.coordinates === "1,3")  
                    ? (<TheEndDiv><p>You made it <span role="img" aria-label="emoji">&#127891;</span></p></TheEndDiv>) 
                    : (<NextDiv><p>Take your next step</p></NextDiv>)}     
                    <>
                    <p>{data.actions.coordinates}</p>
                        {data.actions.map(action => 
                        <NavDiv key={action.direction} >
                            <p>{action.description}</p>
                            <ButtonContainer>
                                <NavButton 
                                    onClick={()=> dispatch(moveMaze(action.direction, action.type, userName))}>
                                    Go {action.direction}
                                </NavButton>
                            </ButtonContainer>          
                        </NavDiv>)}               
                    </>
            </GameContainer>
            }
        </AppMain>
    )
}

export default Game
