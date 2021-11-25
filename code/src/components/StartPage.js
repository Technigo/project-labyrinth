import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { labyrinth } from '../reducers/labyrinth'
import Labyrinth from './Labyrinth'
import styled from 'styled-components'

const Background = styled.div`
display: flex;
flex-direction: column;
background: url(https://source.unsplash.com/_qXjdWm8YEo/2400x2400) no-repeat center center fixed;
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
const Form = styled.form`
display: flex;
flex-direction: column;
gap:20px;
justify-content: center;
align-items: center;

`
const Button = styled.button`
width:150px;
background: #3c4f34;
border: 2px solid black;
border-radius: 5px;
padding: 8px;
color: white;
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
width:300px;
padding-left: 10px;
color: #3c4f34;
letter-spacing: 1.5px;
font-size: 15px;
font-weight: 500;
&:focus {
    outline: #3c4f34 solid 2px; 
    background-color:#e4beba;
  }

`


const StartPage = () => {
    const [userName, setUserName] = useState('')
    const dispatch = useDispatch()
    const currentUserName = useSelector((store) => store.labyrinth.userName)
    
    if (currentUserName === '') { 
return (
    <Background>
    <Form onSubmit={(event) => {event.preventDefault()
        dispatch(labyrinth.actions.addUserName(userName))}}>
        <h1>To enter the labyrinth, please type your name:</h1>
        <Input type="text" required value={userName} onChange={(event) => setUserName(event.target.value)}/>
        <Button type="submit" >Let's go!</Button>
    </Form>    
    </Background>
)} else {
    return <Labyrinth />
}
}


export default StartPage