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
            <HeadersSummery> Thank you for playing, <UserName>{userName}</UserName> </HeadersSummery>
            <Lottie
                options={defaultOptions}
                height={200}
                width={300}
            />
            <SummeryDescription>{description}</SummeryDescription>
            <HistoryContainer>
                <HistoryPath>  This is the path that you took:</HistoryPath>
                {history.map((item, index) => (
                    <HistoryMoves key={index}>
                        <Arrows>
                            {item === 'North' && <FaArrowAltCircleUp />}
                            {item === 'West' && <FaArrowAltCircleLeft />}
                            {item === 'South' && <FaArrowAltCircleDown />}
                            {item === 'East' && <FaArrowAltCircleRight />}
                        </Arrows>
                        <Move>{item}</Move>
                    </HistoryMoves>
                ))}
            </HistoryContainer>
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
    @media (min-width:768px) {
        justify-content: space-around;
    }
`
const HeadersSummery = styled.h3`
    justify-content: center;
    text-align: center;
    font-size: 24px;
    align-items: center;
    font-family: 'Cinzel Decorative', cursive;
    margin:10px;
    @media (min-width:768px) {
       font-size:40px; 
    }
    
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
    @media (min-width:768px) {
        font-size:30px;  
        font-family: 'Alegreya', serif;
    }
`
const RestartButton = styled.button`
    margin: 30px 0px 10px 0px;
    padding:10px;
    border-radius: 15px;
    color:black;
    font-size: 28px;
    font-weight: bold;
    background-color: #01FFC3;
    border: none;
    font-family: 'IBM Plex Serif', serif;
    cursor:pointer;
    border: 0 solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 1px solid;
    outline-color: rgba(255, 255, 255, .5);
    outline-offset: 0px;
    text-shadow: none;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
    &:hover {
    border: 1px solid;
    border-radius: 15px;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388; 
    }
`
const HistoryContainer = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
`
const HistoryPath = styled.p`
    margin:0;
    @media (min-width:768px) {
     font-size: 25px;
    }
 `

const HistoryMoves = styled.div`
    margin: 5px 0px 0px 0px;
    display: flex;
    justify-items: center;
    align-items: center;
    padding:0px;
    height: 20px;
    @media (min-width:768px) {
    margin: 10px 0px 0px 0px;
}
`
const Move = styled.p`
    margin-left: 10px;
    @media (min-width:768px) {
        font-size:23px;
 
    }
`

const UserName = styled.span`
    color: #01FFC3;
`
const Arrows = styled.div`
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width:768px) {
            font-size:23px;
    }
`