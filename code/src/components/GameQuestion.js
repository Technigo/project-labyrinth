import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components/macro'
import { fetchOtherQuestions } from "../reducers/game";



const GameQuestion = () => {
    //our empty array state with actions, coordinates and description
    const gameQuestions = useSelector((store) => store.game.gameQuestions)
    const userName = useSelector((store) => store.game.username);

    const dispatch = useDispatch()

    const onNextQuestion = (direction) => {
        dispatch(fetchOtherQuestions(userName, direction))
    }

    const currentCoordinates = useSelector((store) => store.game.gameQuestions.coordinates)
    console.log(currentCoordinates)
    const onBackgroundImageChange = () => {
        // const background = document.body.style
        switch (currentCoordinates) {
            case '1,0':
                return "#071814"
            case '1,1':
                return "#0f3029";
            case '0,1':
                return "#16473d";
            case '0,2':
                return "#1d5f52";
            case '0,3':
                return "#257767";
            case '1.3':
                return "#2c8f7b";
            default:
                return "black"
        }
    }
    // window.onload = onBackgroundImageChange()

    return (
        <MainWrapperQuestion style={{ background: onBackgroundImageChange() }}>
            <QuestionWrapper>
                <div className="luminance"> {gameQuestions.description}</div>
                <ButtonContainer>
                    {gameQuestions.actions.map((item, index) => (
                        <SmallContainer key={index}>
                            <OptionsDescriptions>{item.description}</OptionsDescriptions>
                            <OptionsButton
                                onClick={() => onNextQuestion(item.direction)}>
                                Go {item.direction}
                            </OptionsButton>
                        </SmallContainer>
                    ))
                    }
                </ButtonContainer>
            </QuestionWrapper >
        </MainWrapperQuestion>
    )

}
export default GameQuestion


const MainWrapperQuestion = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const QuestionWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 992px) {
        flex-direction: row;
        gap: 10px;
    } 
`

const SmallContainer = styled.div`
    display: flex;
    width: 90%;
    padding: 10px 3px 10px 3px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    align-items: center;
    flex-direction: column;
    border: 1px solid #09FBD3;
    box-shadow: 5px 5px #09FBD3;
    margin: 8px;
    @media (min-width: 768px) {
    margin-top: 20px;
    } 
    @media (min-width: 992px) {
        margin-top: 40px;
        max-width: 400px;
        min-height: 250px;
        padding: 20px;
        display: flex;
        justify-content: space-between;
    } 
`
const OptionsDescriptions = styled.p`
    text-align:center;
    font-size: 16px;
    color: white;
    margin: 0;
    font-weight: 300;
    font-family: 'Vollkorn', serif;
    @media (min-width: 768px) {
    font-size: 21px;
    } 
`

const OptionsButton = styled.button`
    margin-top: 10px;
    padding:10px;
    border-radius: 13%;
    color:black;
    font-size: 13px;
    font-weight: bold;
    background-color: #01FFC3;
    border: none;
    cursor: pointer;
    font-family: 'IBM Plex Serif', serif;
    @media (min-width: 768px) {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
    } 
 `