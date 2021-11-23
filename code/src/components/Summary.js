import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components/macro'
import { FaArrowAltCircleUp, FaArrowAltCircleDown, FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

import Lottie from 'react-lottie';
import animationData from './lotties/light';


const Summary = ({ description }) => {
    const history = useSelector((store) => store.game.moves)
    const userName = useSelector((store) => store.game.username);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <MainWrapperSummary>
            <HeadersSummery> Thank you for playing, {userName}! </HeadersSummery>
            <Lottie
                options={defaultOptions}
                height={200}
                width={300}
            />
            <SummeryDescription>{description}</SummeryDescription>
            <HistoryPath>  This is the path that you took:</HistoryPath>
            {history.map((item, index) => (
                <HistoryMoves key={index}>
                    {item === 'North' && <FaArrowAltCircleUp />}
                    {item === 'West' && <FaArrowAltCircleLeft />}
                    {item === 'South' && <FaArrowAltCircleDown />}
                    {item === 'East' && <FaArrowAltCircleRight />}
                    <Move>{item}</Move>
                </HistoryMoves>
            ))}
            <RestartButton type="button" onClick={() => window.location.reload()}>Restart</RestartButton>
        </MainWrapperSummary>
    )
}

export default Summary

const MainWrapperSummary = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    background-color: black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const HeadersSummery = styled.h3`
    justify-content: center;
    text-align: center;
    font-size: 24px;
    align-items: center;
    font-family: 'Cinzel Decorative', cursive;
    margin:10;
    
    `
const SummeryDescription = styled.div`
    padding: 15px;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    text-align: center;
    flex-direction: column;
    margin: 8px;
    min-width: 300px;
`
const RestartButton = styled.button`
    margin: 10px 0px 10px 0px;
    padding:10px;
    border-radius: 15px;
    color:black;
    font-size: 18px;
    font-weight: bold;
    background-color: #01FFC3;
    border: none;
    font-family: 'IBM Plex Serif', serif;
`
const HistoryPath = styled.p`
 margin:0;
 `

const HistoryMoves = styled.div`
margin: 5px 0px 0px 0px;
display: flex;
justify-items: center;
align-items: center;
padding:0px;
height: 20px;
`
const Move = styled.p`
    margin-left: 5px;
`