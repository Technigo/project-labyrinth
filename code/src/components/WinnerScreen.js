import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from "react-router-dom";

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
                <i className="nes-icon is-large star"></i>
                <Link to="/">
                    <RestartButton
                        type='button'
                        className='nes-btn'
                        /* onClick= {} */> {/*Gör en funktion som går tillbaka till initialState*/}
                        PLAY AGAIN
                    </RestartButton>
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
`
const YouWinText = styled.p`
    font-family: 'Press Start 2P', cursive;
    color: #fff;
    font-size: 12px;
    width: 100%;
    text-align: center;
`
const RestartButton = styled.button`
    font-family: 'Press Start 2P', cursive;
    margin-top: 45px;
`