import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchStartData } from "reducers/labyrinth"
// import startimg from '../startimg.png'
import startimg2 from '../startimg2.jpg'
// import { BackgroundGif } from './BackgroundGif'
import { 
    H1,
    P,
    BackgroundImg,
    ContentContainer,
    FormContainer,
    Inputfield,
    FormButton,
    QuestionMark
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
                    <H1>This is the Labyrinth, do you dare to enter<QuestionMark style={{transform: 'rotate(45deg)'}} >?</QuestionMark></H1> 
                    <P>Please type in your username</P>
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
