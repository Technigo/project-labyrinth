import styled from 'styled-components/macro'

import startBackground from './Assets/temple-start-2.png'


export const Start = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    background-image: url(${startBackground}) ;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 95%;

    @media screen and (min-width: 668px) {

        background-position-y: 75%;
        justify-content: space-around;

    }
`

export const Logo = styled.img`
    margin-top: 3rem;
    width: 95%;
    overflow: hidden;

    @media screen and (min-width: 668px) {
        width: 700px;
        margin-top: 1rem;

    }

    @media screen and (min-width: 1024px) {
        width: 1000px;

    }
`
export const WelcomeText = styled.h1`
    text-align: center;
    color: white;
    width: 80%;
    font-size: 1.5rem;
    margin-top: 3rem;
    line-height: 1.3em;

    @media screen and (min-width: 668px) {
        width: 80%;
        font-size: 2rem;
        margin: 2rem 0 3rem;
    }
`

export const Input = styled.input`
    border: 4px solid;
    border-color: black;
    width: 330px;
    height: 50px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.3rem;
    /* padding: 5px; */
    text-align: center;
    font-family: 'Press Start 2P', cursive;


    &:hover,
    &:focus {
        outline: none;
        border-color: purple;
    }

    @media screen and (min-width: 668px) {
        width: 500px;
        height: 70px;

        margin-bottom: 1rem;
        font-size: 1.8rem;
    }
`

export const SendBtn = styled.button`
    font-size: 1rem;
    border: 4px solid;
    border-color: black;
    width: 330px;
    height: 50px;
    padding: 10px;
    margin-bottom: 2rem;
    font-weight: bold;
    font-family: 'Press Start 2P', cursive;
    color: black;

    &:hover,
    &:focus {
        border-color: purple;
    }

    @media screen and (min-width: 668px) {
        width: 500px;
        height: 70px;
        font-size: 1.3rem;
        margin-bottom: 15rem;
    }
`
