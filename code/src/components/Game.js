import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { nextStep } from '../reducers/games'

const LoadingContainer = styled.div`
background-color: black;
color: white;
font-size: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const ActionContainer = styled.div`
background-color: black;
color: white;
padding: 25px;
display: flex;
width: auto;
heigth: 100vh;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px;
`

const Wrapper = styled.div`
background-color: black;
color: white;
padding: 15px;
display: flex;
width: auto;
height: 100vh;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
justify-content: center;
margin: 0;
`

const Text = styled.text`
font-size: 20px;
background-color: black;
color: white;
`

const Button = styled.button`
background-color: gold;
color: black;
border: 2px solid black;
border-radius: 10px;
text-align: center;
padding: 10px;
margin: 10px;
`

const Game = () => {
    const userName = useSelector(store => store.games.username)
    const actions = useSelector(store => store.games.description)
    const description = useSelector(store => store.games.description.description)
    const loading = useSelector(store => store.games.loading)


    const dispatch = useDispatch()

return (
    <>
    <Wrapper>
        <LoadingContainer>
            {loading && <h1>LOADING...</h1>}
            <Text>{description} </Text>
        </LoadingContainer>
        {actions.actions.map(action => (
            <ActionContainer key={userName}>
                <Text>{action.description}</Text>
                <Button   
                    onClick={() => dispatch(nextStep(userName, action.direction))}>
                    {action.direction}
                </Button>
            </ActionContainer>
        ))}
        </Wrapper>
    </>
)}


export default Game