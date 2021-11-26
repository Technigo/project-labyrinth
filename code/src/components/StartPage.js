import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLabyrinth } from '../reducers/labyrinth'
import { labyrinth } from '../reducers/labyrinth'
import Labyrinth from './Labyrinth'
import styled from 'styled-components'

const Background = styled.div`
display: flex;
flex-direction: column;
background: url(https://source.unsplash.com/_qXjdWm8YEo/2400x2400);
opacity: 0.7;
background-color: #3c4f34;
background-size: cover;
background-position: center;
height: 100vh;
width: 100%;
text-align: center;
justify-content: center;
align-items: center;
`
const StartCard = styled.section`
width: 275px;
height: auto;
background: rgba(0, 0, 0, 0.5);
border-radius: 5px;
padding: 20px;
    @media (min-width: 768px) {
        width: 500px;
    }
`
const Form = styled.form`
display: flex;
flex-direction: column;
gap:20px;
justify-content: center;
align-items: center;
`
const H1 = styled.h1`
color: yellow;
letter-spacing: 1.5px;
`
const H2 = styled.h2`
color: yellow;
letter-spacing: 1.5px;
`
const Button = styled.button`
width:150px;
background: #3c4f34;
border: 2px solid black;
border-radius: 5px;
padding: 8px;
color: rgb(236, 236, 126);
font-family: 'Courgette', cursive;
font-size: 20px;
font-weight: 600;
letter-spacing: 1.5px;
`
const Input = styled.input`
height: 36px;
border: 2px solid black;
border-radius: 5px;
font-family: 'Courgette', cursive;
width:225px;
padding-left: 10px;
margin-bottom: 30px;
color: #3c4f34;
letter-spacing: 1.5px;
font-size: 15px;
font-weight: 500;
&:focus {
    outline: #3c4f34 solid 2px; 
    background-color:#e4beba;
}
@media (min-width: 768px) {
        width: 370px;
        
    }
`

const StartPage = () => {
    const [userName, setUserName] = useState('')
    const dispatch = useDispatch()
    const currentUserName = useSelector((store) => store.labyrinth.userName)

    const handleSubmit = (event) =>{
        event.preventDefault()
        dispatch(labyrinth.actions.addUserName(userName))
        dispatch(fetchLabyrinth({
            url: 'https://wk16-backend.herokuapp.com/start',
        }))
    } 

    if (currentUserName === '') { 
return (
    <Background>
        <StartCard>
            <Form onSubmit={(event)=> handleSubmit(event) }>
            <H1>Welcome! To enter the maze, type your name:</H1>
                <Input type="text" required value={userName} onChange={(event) => setUserName(event.target.value)}/>
                <Button type="submit">Let's go!</Button>
            </Form> 
        </StartCard>   
    </Background>
)} else {
    return <Labyrinth />
}
}


export default StartPage