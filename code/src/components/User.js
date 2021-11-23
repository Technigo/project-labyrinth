import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { startMaze } from "../reducers/move"

const User = () => {

const data = useSelector((store)=>(store.move.content))

const dispatch = useDispatch()

    return(
        <div>
           
            {console.log("data", data)}
            <button type="button" onClick={() => dispatch(startMaze())}>
                Button
            </button>
            <p>{data.description}</p>
  
            {/* {(data.length !== 0) && (
                data.map((item) => (
            <p key={item.name}>{item.name}</p>)))} */}
            {/* <p>{data.actions[0].direction}</p> */}
           {(data.length !== 0) ? (<p>data{data.description}</p>) : (<p>NEJ</p>)}
            <button>East</button>
        </div>

    )
}

export default User
