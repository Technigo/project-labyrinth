import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { fetchMaze } from "../reducers/move"



const User = () => {

const data = useSelector((store)=>(store.move.coinList))
const dispatch = useDispatch()

    return(
        <div>
           
            {console.log("data", data)}
            <button type="button" onClick={() => dispatch(fetchMaze())}>
                Button
            </button>
  
            {(data.length !== 0) && (
                data.map((item) => (
            <p key={item.name}>{item.name}</p>)))}
        </div>

    )
}

export default User

 {/*  */}
            {/* <p>{data[0].name}</p> */}