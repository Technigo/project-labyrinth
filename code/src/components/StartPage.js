import React, {useState} from "react"
import { useDispatch } from "react-redux"

import game, {fetchData} from "reducers/game"
import { Start, Logo, WelcomeText, Input, SendBtn } from "./StylingStartPage"

import logo from './Assets/echigo-pixelated-2.png'


const StartPage = () => {
    const [nameInput, setNameInput] = useState("")
    const dispatch = useDispatch()

    const SetName = () => {
        dispatch(game.actions.setUsername(nameInput))
        dispatch(fetchData())
    }

    return (
        <Start>
            <Logo src={logo} alt="game logo"></Logo>

            <WelcomeText>Welcome, give us your name!</WelcomeText>

            <label htmlFor="name-field">
            <Input
            type="text"
            id="name-field"
            value={nameInput}
            onChange={event => setNameInput(event.target.value)} />
            </label>
            
            <SendBtn onClick={SetName}>Start the game</SendBtn>
        </Start>
    )
}

export default StartPage
