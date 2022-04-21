import React, {useState} from "react"
import { useDispatch } from "react-redux"

import game, {fetchData} from "reducers/game"
import styled from 'styled-components'

const Start = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`
const Input = styled.input`
border: 4px solid;
height: 2em;
width: 500px;
margin-bottom: 2em;
font-size: 2em;
`

const SendBtn = styled.button`
font-size: 2em;
border: 4px solid;
height: 2em;
width: 500px;

`

const StartPage = () => {
    const [nameInput, setNameInput] = useState("")
    const dispatch = useDispatch()

    const SetName = () => {
        dispatch(game.actions.setUsername(nameInput))
        dispatch(fetchData())
    }

    // fetch('https://labyrinth-technigo.herokuapp.com/start', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             username: nameInput
    //             })
    //         })
    //     .then(res => res.json())
    //     .then(data => console.log(data))

    return (
        <Start>
            <h1>Welcome, give us your name!</h1>
        
            <Input type="text" id="name_field" class="nes-input"
            value={nameInput}
            onChange={event => setNameInput(event.target.value)} />
            
            <SendBtn onClick={SetName}>Send</SendBtn>
        </Start>
    )
}

export default StartPage
