import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchStartData, labyrinth } from "reducers/labyrinth"
import startimg from '../startimg.png'
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
    const [username, setUsername] = useState("")
    const dispatch = useDispatch()

    const onEnterTheLabyrinth = (event) => {
        event.preventDefault()
        if (username.length === 0) {
          alert("Please enter a username to start")
        } else {
          dispatch(labyrinth.actions.setusername(username))
          dispatch(fetchStartData(username))
          setUsername("") // added this to clean the input box
        }
    }

    return (
        <BackgroundImg style={{ backgroundImage: `url(${startimg})` }}>
            <ContentContainer>
                    <H1>This is the labyrint, do you dare to enter?</H1> 
                    <H2>Please type in your username</H2>
                    <FormContainer>
                        <Inputfield
                            type='text'
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            />
                            <FormButton type='submit' onClick={(event) => onEnterTheLabyrinth(event)}>
                                Don't get lost!
                            </FormButton>
                    </FormContainer>
            </ContentContainer>
        </BackgroundImg>
    )
}
