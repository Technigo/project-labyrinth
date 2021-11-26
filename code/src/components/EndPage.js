import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { labyrinth } from '../reducers/labyrinth'

const Button = styled.button`
width:150px;
background: #3c4f34;
border: 2px solid black;
border-radius: 5px;
padding: 8px;
color: rgb(236, 236, 126);
font-family: 'Courgette', cursive;
font-size: 20px;
font-weight: 600;
letter-spacing: 1.5px;
`
const H3 = styled.h3`
color:  rgb(236, 236, 126);
letter-spacing: 1.5px;
`

const EndPage = () => {
    const dispatch = useDispatch()
    return(
        <div>
        <H3>Nice work! You have made it out of the labyrinth!</H3>

            <Button onClick={() => dispatch(labyrinth.actions.restartLabyrinth())}>Restart labyrinth</Button>
        </div>
    )
}


export default EndPage