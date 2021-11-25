import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchLabyrinthPath } from "reducers/labyrinth"
import position00 from 'position00.png'
import { PositionIcon } from "./PositionIcon"
import { 
    H1,
    H2,
    ContentContainer,
    DirectionBtn,
    BackgroundImg,
    P,
    Coordinates,
    PositionContainer,
    TheCardContainer,
    CardItemContainer
    } from '../lib/styling' 



export const TheLabyrinth = () => {
    const dispatch = useDispatch()   
    const { description, coordinates, actions} = useSelector(store =>  store.labyrinth.currentPosition)
    
    const handleButtonOnClick = (type, direction) => {
            // call the api, pass along type and direction as part of the body
            dispatch(fetchLabyrinthPath(type, direction))
        }

        const TheCard = ({ description, type, direction }) => (
            <div>
            <TheCardContainer>
                <CardItemContainer>
                    <P>{description}</P>
                    <DirectionBtn onClick={() => handleButtonOnClick(type, direction)}>
                    {type} {direction.toUpperCase()}
                    </DirectionBtn>
                </CardItemContainer>
            </TheCardContainer>
            </div>
        )
   
        return (
            
            <BackgroundImg style={{ backgroundImage: `url(${position00})` }}>
                <ContentContainer>
                    <H2>{description}</H2>
                    <PositionContainer>
                        <PositionIcon className="fas fa-map-marker-alt"></PositionIcon>
                        <Coordinates>Your current position is {coordinates}</Coordinates>
                    </PositionContainer>
                    {actions.length > 0 && actions.map(item => <TheCard key={item.direction} {...item} />)}
                    {actions.length === 0 && <H1>I have been waiting for you....</H1>}
                </ContentContainer>
            </BackgroundImg>
        )
}
