import React, {useState} from "react"
import { useDispatch } from "react-redux"

import game, {fetchData} from "reducers/game"
import styled from 'styled-components'
import logo from './Assets/LOGO2.png'


const Start = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 80%;
margin: auto;
`

const Logo = styled.img`
width: 400px;
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


    return (
        <Start>
            <Logo src={logo}></Logo>
            <h1>Welcome, give us your name!</h1>
        
            <Input type="text" id="name_field" className="nes-input"
            value={nameInput}
            onChange={event => setNameInput(event.target.value)} />
            
            <SendBtn onClick={SetName}>Send</SendBtn>
        </Start>
    )
}

export default StartPage
