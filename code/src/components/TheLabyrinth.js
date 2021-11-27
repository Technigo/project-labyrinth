import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchLabyrinthPath } from "reducers/labyrinth"
// import one from '../assets/one.png'
// import two from '../assets/two.png'
// import three from '../assets/three.png'
// import four from '../assets/four.png'
// import five from '../assets/five.png'
// import six from '../assets/six.png'
// import seven from '../assets/seven.png'
import { PositionIcon } from "./PositionIcon"
import { 
    H3,
    H2,
    ContentContainer,
    DirectionBtn,
    BackgroundImg,
    P,
    Coordinates,
    PositionContainer,
    TheCardContainer,
    CardItemContainer,
    } from '../lib/styling' 



export const TheLabyrinth = () => {
    const dispatch = useDispatch()   
    const { description, coordinates, actions} = useSelector(store=>  store.labyrinth.currentPosition)
    
    const handleButtonOnClick = (type, direction) => {
            dispatch(fetchLabyrinthPath(type, direction))
        }

        const TheCard = ({ description, type, direction }) => (
            <div>
            <TheCardContainer>
                <CardItemContainer>
                    <P>{description}</P>
                    <DirectionBtn onClick={() => handleButtonOnClick(type, direction)}>
                    {type.toUpperCase()} {direction.toUpperCase()}
                    </DirectionBtn>
                </CardItemContainer>
            </TheCardContainer>
            </div>
        )

        const imgLibrary = {
            '0,0': "url(https://i.ibb.co/g3B61jW/one.jpg)",
            '1,0': "url(https://i.ibb.co/D9m3m0T/two.jpg)",
            '1,1': "url(https://i.ibb.co/71W1pwP/three.jpg)",
            '0,1': "url(https://i.ibb.co/S3ytgrr/four.jpg)",
            '0,2': "url(https://i.ibb.co/89PmqTx/five.jpg)",
            '0,3': "url(https://i.ibb.co/qnxJntc/six.jpg)",
            '1,3': "url(https://i.ibb.co/nc62pm4/seven.jpg)",
          }
   
        return (

            
            <BackgroundImg style={{ backgroundImage: imgLibrary[coordinates], }}>
                <ContentContainer>
                    <H2>{description}</H2>
                    <PositionContainer>
                        <PositionIcon className="fas fa-map-marker-alt"></PositionIcon>
                        <Coordinates>Your current position is {coordinates}</Coordinates>
                    </PositionContainer>
                    {actions.length > 0 && actions.map(item => <TheCard key={item.direction} {...item} />)}
                    {actions.length === 0 && <H3>I have been waiting for you...</H3>}
                </ContentContainer>
            </BackgroundImg>
        )
}
