import React from 'react'
import { labyrinth } from 'reducers/labyrinth'
import { useDispatch } from "react-redux"
import { 
   StyledRestartBtn
    } from '../lib/styling' 




export const RestartBtn = () => {

    const dispatch = useDispatch()

    const handleRestartBtn = () => {
        dispatch(labyrinth.actions.reStartGame())
      }


    return (

        <StyledRestartBtn onClick={() => handleRestartBtn()}> RESTART THE LABYRINTH </StyledRestartBtn>
    )
}