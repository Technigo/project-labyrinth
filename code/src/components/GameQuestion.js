import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components/macro'
import { fetchOtherQuestions } from "../reducers/game";

// import Lottie from 'react-lottie';
// import animationData from './lotties/test';

const GameQuestion = () => {
    //our empty array state with actions, coordinates and description
    const gameQuestions = useSelector((store) => store.game.gameQuestions)
    const userName = useSelector((store) => store.game.username);

    const dispatch = useDispatch()

    const onNextQuestion = (direction) => {
        dispatch(fetchOtherQuestions(userName, direction))
        // onBackgroundImageChange()
    }

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //         preserveAspectRatio: "xMidYMid slice"
    //     }
    // };

    const currentCoordinates = useSelector((store) => store.game.gameQuestions.coordinates)
    console.log(currentCoordinates)
    // const onBackgroundImageChange = () => {
    //         
    //         switch (currentCoordinates) {
    //             case '0,0':
    //                 return background.backgroundColor = "grey";
    //             case '1,0':
    //                 return background.backgroundColor = "lightgrey";

    //             case '1,1':
    //                 return background.backgroundColor = "whitesmoke";

    //             case '0,1':
    //                 return background.backgroundColor = "pink";

    //             case '0,2':
    //                 return background.backgroundColor = "green";
    //             default:
    //                 return background.backgroundColor = "black"
    //         }
    //     }


    return (
        <MainWrapperQuestion coordinates={currentCoordinates}>
            <QuestionWrapper>
                <div className="luminance"> {gameQuestions.description}</div>
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
                {/* <ControlLottie>
                    <Lottie
                        options={defaultOptions}
                        height={300}
                        width={200}
                    />
                </ControlLottie> */}
            </QuestionWrapper >
        </MainWrapperQuestion>
    )

}
export default GameQuestion


const MainWrapperQuestion = styled.div`
    width: 100%;
    background-color: black;
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
`
const OptionsDescriptions = styled.p`
    text-align:center;
    font-size: 16px;
    color: #2E8B57;
    margin: 0;
    font-weight: 300;
    font-family: 'Vollkorn', serif;

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
 `
// const ControlLottie = styled.div`
//     display: none;
//     @media (min-width: 375px) {
//     display: flex;
//   }
//  `