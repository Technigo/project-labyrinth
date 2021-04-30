import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from "react-router-dom";

import RestartButton from '../UI/RestartButton'

const WinnerScreen = () => {
    const description = useSelector((store) => store.maze.description);

    return (
        <Main>
            <Border>
                <YouWinTitle>
                    YOU WIN!
                </YouWinTitle>
                <YouWinText>
                    {description}
                </YouWinText>
                <Icon className="nes-icon is-large star">
                </Icon>
                <Link to="/">
                    <RestartButton
                        text='PLAY AGAIN'
                    />
                </Link>
            </Border>
        </Main>
    )
}

export default WinnerScreen

const Main = styled.main`
    background-color: #000;
    height: 100vh;
    padding: 25px;
`
const Border = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: dashed grey 4px;
    width: 100%;
    height: 100%;
    padding: 20px;
`
const YouWinTitle = styled.h1`
    font-family: 'Press Start 2P', cursive;
    color: #fff;
    width: 100%;
    text-align: center;
        @media (min-width: 768px) {
            font-size: 48px;
        }
        @media (min-width: 1025px) {
            font-size: 52px;
        }
`
const YouWinText = styled.p`
    font-family: 'Press Start 2P', cursive;
    color: #fff;
    font-size: 12px;
    width: 100%;
    text-align: center;
        @media (min-width: 768px) {
            font-size: 18px;
            width: 80%;
        }
        @media (min-width: 1025px) {
            font-size: 20px;
        }
`
const Icon = styled.i`
    margin: 25px 0;
`