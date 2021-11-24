import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"

import { Starter } from './Starter'
import { moveMaze } from "../reducers/maze"

const GameContainer = styled.section`
    padding: 30px;
    margin: 10px;
    border: 1px solid black;
`

const Game = () => {

const data = useSelector((store)=>(store.maze.response))
const userName = useSelector((store)=>(store.maze.username))
console.log("username", userName) // CONSOLE
console.log("data", data) // CONSOLE

const dispatch = useDispatch()

    return(
        <>
        {!userName ? <Starter /> :
        <GameContainer>
            <p>{data.description}</p>
            <p>{data.coordinates}</p>
            {(data.actions !== undefined) && (
                <>
                <p>{data.actions.coordinates}</p>
                    {data.actions.map(action => 
                    <div key={action.direction} >
                        <button 
                            onClick={()=> dispatch(moveMaze(action.direction, action.type, userName))}>
                            {action.direction}
                        </button>
                            <p>{action.description}</p>
                     </div>)}               
                </>
            )}
        </GameContainer>
        }
        </>
    )
}

export default Game
