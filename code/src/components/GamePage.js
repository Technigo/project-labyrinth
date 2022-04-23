import React from "react"
import { useSelector, useDispatch } from "react-redux"

import game, { fetchMoreData } from "../reducers/game"
import { MazeGuide } from "./MazeGuide"
import { 
    ContentWrapper,
    GameImage, 
    GameTextWrapper, 
    MainTextBox, 
    MainDescription, 
    PixelDecorationOutline, 
    PixelDecorationLeftTop, 
    PixelDecorationRightTop, 
    PixelDecorationLeftBottom, 
    PixelDecorationRightBottom, 
    ChoosingMove, 
    RestartButton, 
    StyledContainer, 
    DirectionDetails, 
    ArrowContainer, 
    DirectionButton, 
    DirectionImage, 
    DirectionDescription } from "./StylingGamePage"

import arrow from "./Assets/pixel-arrow-padding.svg"
import img00 from "./Assets/IMG_0.0.png"
import img01 from "./Assets/IMG_0.1.png"
import img02 from "./Assets/IMG_0.2.png"
import img03 from "./Assets/IMG_0.3.png"
import img10 from './Assets/IMG_1.0.jpeg'
import img11 from './Assets/IMG_1.1.png'
import img13 from './Assets/IMG_1.3.png'


const GamePage = () => {
    const position = useSelector((store) => store.game.position)
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
                return img13 
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
                            directionFlex={item.direction}>
                            <DirectionButton
                                key={item.direction}
                                onClick={() => dispatch(fetchMoreData({direction: item.direction}))}>
                                <DirectionImage
                                    src={arrow}
                                    alt="direction arrow"
                                    direction={item.direction}>
                                </DirectionImage>
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
