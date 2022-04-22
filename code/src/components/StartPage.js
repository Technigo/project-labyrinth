import React, {useState} from "react"
import { useDispatch } from "react-redux"

import game, {fetchData} from "reducers/game"
import styled from 'styled-components'
import logo from './Assets/LOGO2.png'
import startBackground from './Assets/startpage.jpg'



const Start = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100vh;
    background-image: url(${startBackground}) ;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 95%;
`

const Logo = styled.img`
    width: 300px;

    @media screen and (min-width: 668px) {
        width: 400px;
        margin-top: 1rem;
    }
`
const WelcomeText = styled.h1`
    text-align: center;
    color: white;
    width: 80%;
    font-size: 1.5rem;
    margin-top: 0;

    @media screen and (min-width: 668px) {
        width: 80%;
        font-size: 2rem;
        margin: 2rem 0 3rem;
    }
`

const Input = styled.input`
    border: 4px solid;
    border-color: black;
    width: 300px;
    margin-bottom: 0;
    font-size: 1.3rem;
    padding: 5px;
    text-align: center;

    &:hover,
    &:focus {
        outline: none;
        border-color: purple;
    }

    @media screen and (min-width: 668px) {
        width: 500px;
        margin-bottom: 1rem;
        font-size: 1.8rem;
    }
`

const SendBtn = styled.button`
    font-size: 1rem;
    border: 4px solid;
    border-color: black;
    width: 250px;
    padding: 10px;
    margin-bottom: 2rem;
    font-weight: bold;
    font-family: 'Press Start 2P', cursive;

    &:hover,
    &:focus {
        border-color: purple;
    }

    @media screen and (min-width: 668px) {
        width: 450px;
        font-size: 1.3rem;
        margin-bottom: 5rem;
    }
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
            <WelcomeText>Welcome, give us your name!</WelcomeText>
        
            <Input type="text" id="name_field" className="nes-input"
            value={nameInput}
            onChange={event => setNameInput(event.target.value)} />
            
            <SendBtn onClick={SetName}>Start the game</SendBtn>
        </Start>
    )
}

export default StartPage
