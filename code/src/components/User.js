import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { startMaze, moveMaze } from "../reducers/maze"

const User = () => {

const data = useSelector((store)=>(store.maze.response))
const userName = useSelector((store)=>(store.maze.username))
console.log("username", userName)

const dispatch = useDispatch()

    return(
        <div>
            {console.log("data", data)}
{/*             <button type="button" onClick={() => dispatch(startMaze("BestFox3hjdsjhfjksfkhdsjfds"))}>
                Button
            </button> */}
            <p>{data.description}</p>
            <p>{data.coordinates}</p>
            {data.actions !== undefined && (
                <>
                <p>{data.actions[0].description}</p>
                <p>{data.actions.coordinates}</p>
                <div>{data.actions.map(action => <button key={action.direction} onClick={()=>dispatch(moveMaze())}>{action.direction}</button>)}</div>
                </>
            )}
        </div>

    )
}

export default User
