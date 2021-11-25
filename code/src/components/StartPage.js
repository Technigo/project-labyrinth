import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchStartData } from "reducers/labyrinth"
// import startimg from '../startimg.png'
import startimg2 from '../startimg2.jpg'
// import { BackgroundGif } from './BackgroundGif'
import { 
    H1,
    H2,
    BackgroundImg,
    ContentContainer,
    FormContainer,
    Inputfield,
    FormButton
    } from '../lib/styling' 


export const StartPage = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')


    const startGame = (event) => {
        event.preventDefault()
        dispatch(fetchStartData(username))
    }

    return (
        <BackgroundImg style={{ backgroundImage: `url(${startimg2})` }}>
            <ContentContainer>
                    <H1>This is the labyrint, do you dare to enter?</H1> 
                    <H2>Please type in your username</H2>
                    <FormContainer onSubmit={startGame}>
                        <Inputfield type='text' value={username} required onChange={(event) => setUsername(event.target.value)}/>
                            <FormButton onClick={(event) => startGame(event)}>
                                Don't get lost!
                            </FormButton>
                    </FormContainer>
            </ContentContainer>
        </BackgroundImg>
    )
}
