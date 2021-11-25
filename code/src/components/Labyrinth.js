import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLabyrinth } from '../reducers/labyrinth';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
opacity: 0.8;
background-color: #3c4f34;
background-size: cover;
height: 100vh;
width: 100vw;
text-align: center;
justify-content: center;
align-items: center;
margin:0;
padding:0;
color: white;
`
const Description = styled.p`
display: flex;
flex-direction: column;
gap:20px;
justify-content: center;
align-items: center;
padding: 10px;
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

const Labyrinth = () => {
    const labyrinth = useSelector((store) => store.labyrinth.destination);
    const loading = useSelector ((store) => store.animation.loading)
    const dispatch = useDispatch();
    console.log ('actions', labyrinth.actions)

    const setBgImage = (coordinates) => {
        let bg = 'black';
        switch (coordinates) { //switch: needs a case that ends with a break, then more cases can be added
            case '0,0':
                bg = 'url(https://images.unsplash.com/photo-1471045220822-f3f0ad3a5416?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80) no-repeat center center fixed';
                break 
            case '1,0':
                bg = 'url(https://images.unsplash.com/photo-1467745870897-1f66443c8c04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=354&q=80) no-repeat center center fixed';
                break
            case '1,1':
                bg = 'url(https://images.unsplash.com/photo-1428737289360-ca73c271d197?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80) no-repeat center center fixed';
                break
            case '0,1':
                bg = 'url(https://images.unsplash.com/photo-1611643892561-9759a32e0c10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) no-repeat center center fixed';
                break
            case '0,2':
                bg = 'url(https://images.unsplash.com/photo-1533693637260-257bd3834be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80) no-repeat center center fixed'
                break
            case '0,3':
                bg = 'url(https://images.unsplash.com/photo-1540979730456-da51523895df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80) no-repeat center center fixed'
                break
            case '1,3':
                bg = 'url(https://images.unsplash.com/photo-1541429222367-285a893182f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) no-repeat center center fixed'
                break
        default:
            bg = 'black'
        }
        return bg
    }
    
return (

    loading === false && (
        
    <Wrapper style={{ background: setBgImage(labyrinth.coordinates)}}>
    <Description>
        {labyrinth.description}
    </Description>
    <div>
        
        {labyrinth.actions !== undefined &&
        labyrinth.actions.map((item) => (
        <div key={item.description}>
            <Description>
                {item.description} 
            </Description>
            <Button onClick={() => {
                dispatch(fetchLabyrinth({
                    url: 'https://wk16-backend.herokuapp.com/action',
                    type: 'move',
                    direction: item.direction,

                }
                    ))
            }}>{item.direction}</Button>
        </div>    
        )) }

    </div>
    
    </Wrapper>
    )
);
};

export default Labyrinth;
