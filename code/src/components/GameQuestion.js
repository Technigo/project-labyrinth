import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components/macro'
import game, { fetchOtherQuestions } from "../reducers/game";


const GameQuestion = () => {
    //our empty array state with actions, coordinates and description
    const gameQuestions = useSelector((store) => store.game.gameQuestions)
    const userName = useSelector((store) => store.game.username);

    const dispatch = useDispatch()

    const onNextQuestion = (direction) => {
        dispatch(game.actions.setDirection(direction))
        dispatch(fetchOtherQuestions(userName, direction))
    }

    // const onBackgroundImageChange = () => {
    //     switch (coordinates) {
    //         case '0,0':
    //             return ('green')
    //         case '1,0':
    //             return ('red')
    //         case '1,1':
    //             return ('blue')
    //         case '0,1':
    //             return ('grey')
    //         case '0,2':
    //             return ('yellow')
    //         case '0,3':
    //             return ('purple')
    //         case '1,3':
    //             return ('pink')
    //         default:
    //             return ('black')
    //     }



    return (
        <MainWrapperQuestion>
            <QuestionWrapper>
                <MainDescription> {gameQuestions.description}</MainDescription>
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
            </QuestionWrapper >
        </MainWrapperQuestion>
    )

}

export default GameQuestion


const MainWrapperQuestion = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    background-color: black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const QuestionWrapper = styled.div`
    width: 90%;
    height: 80%;
    padding: 15px;
    display: flex;
    flex-direction:column;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
`

const MainDescription = styled.p`
    text-align:center;
    font-weight: 800;
    color: white;
    font-size: 18px;
    margin-bottom: 40px;
`

const SmallContainer = styled.div`
    padding: 15px;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    align-items: center;
    flex-direction: column;
    border: 1px solid #09FBD3;
    box-shadow: 5px 5px #09FBD3;
    margin: 8px;
`
const OptionsDescriptions = styled.p`
    text-align:center;
    font-size: 15px;
    color: white;
    font-weight: 600;
`

const OptionsButton = styled.button`
    margin-top: 10px;
    padding:10px;
    border-radius: 15px;
    color:black;
    font-size: 13px;
    font-weight: bold;
    background-color: #01FFC3;
    border: none;
    font-family: 'IBM Plex Serif', serif;
 
 `