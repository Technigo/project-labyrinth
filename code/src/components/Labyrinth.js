/* eslint-disable linebreak-style */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contiuneGame, fetchTheGame } from '../reducers/store';
import { OuterWrapper, InnerWrapper, TextWrapper, BigText, SmallerText, Button } from 'GlobalStyles';
import styled from 'styled-components/macro';

const Labyrinth = () => {
    const { description, actions, coordinates } = useSelector((store) => store.game.currentDirection)
    const dispatch = useDispatch()

    const onRestartButton = () => {
       window.location.reload();
    }

return (
    <>
    <div className="restart">
            {coordinates === "1,3" ?  (
                null
                ): <SmallRestart type="button" onClick={onRestartButton}>Restart</SmallRestart>}
        </div>
    <OuterWrapper>
        <InnerWrapper>
            <TextWrapper>   
            <BigText>{description}</BigText>
            
        {Array.isArray(actions)
        ? actions.map((action) => {
            return (
                <Container key={action.id}>

            <SmallerText>{action.direction}: {action.description}</SmallerText>
            <Button type="button" onClick={() => dispatch(contiuneGame(action.type, action.direction))}>Go {action.direction}</Button>
            </Container>
            )
        })
        :null}
        </TextWrapper>
        <div className="restart">
            {coordinates === "1,3" ?  (
                <Button type="button" onClick={onRestartButton}>Play again</Button>
                ): null}
        </div>
        
       </InnerWrapper>
    </OuterWrapper>
    </>
)
}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column; 
`

const SmallRestart = styled.button`
    background-color: transparent;
    border: transparent;
    font-family: var(--font-secondary);
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--color-white);
    margin: 20px;
`

export default Labyrinth;