import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import styled from "styled-components/macro"
// import "nes.css/css/nes.min.css";

import game, { fetchMoreData } from "../reducers/game"
import AudioPlayer from "./AudioPlayer"
import { MazeGuide } from "./MazeGuide"

import arrow from "./Assets/pixel-arrow-padding.svg"
import blueBackground from './Assets/blue-background.png'
import brownBackground from './Assets/brown-background.png'
import forestBackground from './Assets/forest-background.png'
import pinkBackground from './Assets/pink-background.png'
import windowBackground from './Assets/window-background.png'


import img00 from "./Assets/IMG_0.0.png"
import img01 from "./Assets/IMG_0.1.png"
import img02 from "./Assets/IMG_0.2.png"
import img03 from "./Assets/IMG_0.3.png"
import img10 from './Assets/IMG_1.0.jpeg'
import img11 from './Assets/IMG_1.1.png'
import img13 from './Assets/IMG_1.3.png'




const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    position: relative;
`

const GameImage = styled.section`
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 50vh;
    width: 100%;

    @media screen and (min-width: 668px) {
        height: 45vh;
        width: 100%;
        background-size: cover;
        background-position-y: 80%;
        margin: 0;
    }
    @media screen and (min-width: 1024px) {
        width: 100%;
        background-size: contain;
        background-position: center;
        height: 50vh;
        margin-top: 1rem;
    }
`

const GameTextWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 280px;
    justify-content: center;
    // justify-content: flex-start;
    text-align: center;
    background-color: black;
    color: white;
    // position: relative;
    /* margin-top: 1rem; */
`

const MainTextBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 0;
    width: 135%;
    box-shadow: 10px 0 rgb(255, 106, 255), 0 10px rgb(255, 106, 255),
        -10px 0 rgb(255, 106, 255), 0 -10px rgb(255, 106, 255);
    
        transform:  scale(0.6);   

    @media screen and (min-width: 668px) {
        width: 130%;
    }

    @media screen and (min-width: 1024px) {
        width: 90%;
    }
`

const MainDescription = styled.h1`
    margin: 0;
    font-size: 1.3rem;
    font-family: "Press Start 2P", cursive;
    background-color: purple;
    color: #FFD7FD;
    line-height: 1.5rem;
    text-align: center;
    padding: 1.2rem;

    @media screen and (min-width: 668px) {
            padding: 1rem 3rem;
            line-height: 2.4rem;
            font-size: 1.8rem;
        }    

        @media screen and (min-width: 1024px) {
            padding: 1rem 5rem;
        }
`

const PixelDecorationOutline = styled.div`
    position: absolute;
    top: -20px;
    left: -20px;
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    border: 10px solid purple;
`

const PixelDecorationLeftTop = styled.div`
    width: 20px;
    height: 20px;
    background-color: rgb(255, 106, 255);
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: -20px -20px rgb(255, 106, 255), -30px -30px purple,
        -10px -30px purple, -30px -10px purple, -20px 0px purple, 0px -20px purple;

`
const PixelDecorationRightTop = styled.div`
    width: 20px;
    height: 20px;
    background-color: rgb(255, 106, 255);
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: 20px -20px rgb(255, 106, 255), 30px -30px purple,
        10px -30px purple, 30px -10px purple, 20px 0px purple, 0px -20px purple;

`

const PixelDecorationLeftBottom = styled.div`
    width: 20px;
    height: 20px;
    background-color: rgb(255, 106, 255);
    position: absolute;
    bottom: 0;
    left: 0;
    box-shadow: -20px 20px rgb(255, 106, 255), -30px 30px purple,
        -10px 30px purple, -30px 10px purple, -20px -0px purple, 0px 20px purple;

`

const PixelDecorationRightBottom = styled.div`
    width: 20px;
    height: 20px;
    background-color: rgb(255, 106, 255);
    position: absolute;
    bottom: 0;
    right: 0;
    box-shadow: 20px 20px rgb(255, 106, 255), 30px 30px purple, 10px 30px purple,
        30px 10px purple, 20px 0px purple, 0px 20px purple;

`

const ChoosingMove = styled.p`
    padding: 1rem 1rem 0;
    margin: 0;
    font-size: 0.9rem;
    text-align: center;
    color: #DA9EFF;
    text-transform: uppercase;

    @media screen and (min-width: 668px) {
        padding: 1rem 0;
        font-size: 1.1rem;
    }    

    @media screen and (min-width: 1024px) {
        font-size: 1.2rem;
    }
`

const RestartButton = styled.button`
    appearance: none;
    width: 250px;
    border: 4px solid;
    border-color: black;
    background: white;
    color: black;
    font-size: 1rem;
    padding: 10px;
    margin-top: 2rem;
    font-weight: bold;
    font-family: 'Press Start 2P', cursive;

    &:hover,
    &:focus {
        border-color: purple;
    }

    @media screen and (min-width: 668px) {
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
`

const StyledContainer = styled.section`
    color: #DA9EFF;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: ${props =>
        props.coordinates === "1,1"
        ? "column-reverse"
        : props.coordinates === "0,2"
        ? "column-reverse"
        : props.coordinates === "0,3"
        ? "column-reverse"
        : "column"
    };
    padding: 0 1rem;

    @media screen and (min-width: 668px) {
        padding: 0 2rem 0;
    }

    @media screen and (min-width: 1024px) {
        width: 70%;
        padding: 1rem 4rem 2rem;
    }

    @media screen and (min-width: 1300px) {
        width: 50%;
    }
`

const DirectionDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props =>
        props.directionAlign === "East"
        ? "flex-end"
        : props.directionAlign === "West"
        ? "flex-start"
        : "center"
    };

    @media screen and (min-width: 668px) {
        padding: 1rem;
    }
`

const ArrowContainer = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: ${props =>
        props.directionFlex === "West"
        ? "row"
        : props.directionFlex === "East"
        ? "row-reverse"
        : props.directionFlex === "South"
        ? "column-reverse"
        : "column"
    };

`

const DirectionButton = styled.button`
    appearance: none;   
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
`

const DirectionImage = styled.img`
    width: 25px;
    height: auto;
    transform: ${props => 
        props.direction === "North"
            ? `rotate(0deg)`
            : props.direction === "South"
            ? `rotate(180deg)`
            : props.direction === "West"
            ? `rotate(-90deg)`
            : `rotate(90deg)`
    };

    @media screen and (min-width: 668px) {
        width: 40px;
    }
`

const DirectionDescription = styled.p`
    font-size: 0.8rem;
    padding: 0.5rem 1.5rem;
    line-height: 1.3rem;

    @media screen and (min-width: 668px) {
        padding: 0 1.5rem;
    }
`


const GamePage = () => {
    const position = useSelector((store) => store.game.position)
    console.log(position)
    const dispatch = useDispatch()

    const ChangeBackground = () => {
        switch (position.coordinates) {
            case '0,0':
                return img00
                break
            case '1,0':
                return img10
                break
            case '1,1':
                return img11
                break
            case '0,1':
                return img01
                break
            case '0,2':
                return img02
                break
            case '0,3':
                return img03
                break    
            case '1,3':
                return img13
                break 
            default: 
                return pinkBackground 

        }
    }

    const restartGame = () => {
        dispatch(game.actions.restartGame())
    }
    
    return (
        <ContentWrapper>
            <GameImage background={ChangeBackground()}></GameImage>
            <MazeGuide />

            <GameTextWrapper>

                <MainTextBox>
                    <PixelDecorationOutline></PixelDecorationOutline>

                    <MainDescription>{position.description}</MainDescription>

                    <PixelDecorationLeftTop></PixelDecorationLeftTop>
                    <PixelDecorationRightTop></PixelDecorationRightTop>
                    <PixelDecorationLeftBottom></PixelDecorationLeftBottom>
                    <PixelDecorationRightBottom></PixelDecorationRightBottom>

                </MainTextBox>

            </GameTextWrapper>
    
                {position.coordinates !== "1,3" && <ChoosingMove>Choose your direction:</ChoosingMove>}

                {position.coordinates === "1,3" && <RestartButton onClick={() => restartGame()}>Restart</RestartButton>}
            

                <StyledContainer coordinates={position.coordinates}>
    
                    {position.actions.map(item => (
                        <DirectionDetails
                            key={item.description}
                            directionAlign={item.direction}>
                            <ArrowContainer
                                direction={item.direction}
                                directionFlex={item.direction}
                                >

                                <DirectionButton
                                    key={item.direction}
                                    onClick={() => dispatch(fetchMoreData({direction: item.direction}))}
                                >
                                    <DirectionImage
                                        src={arrow}
                                        alt="direction arrow"
                                        direction={item.direction}>
                                    </DirectionImage>
                                    {/* {item.direction} */}
                                </DirectionButton>

                                <DirectionDescription>{item.description}</DirectionDescription>
                            
                            </ArrowContainer>
                        </DirectionDetails>
                    ))}
                </StyledContainer>
        </ContentWrapper>
    )
}

export default GamePage