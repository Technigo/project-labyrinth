import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLabyrinth } from '../reducers/labyrinth';
import { labyrinth } from '../reducers/labyrinth';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
opacity: 0.7;
background-color: #3c4f34;
background-size: cover;
background-position: center;
height: 100vh;
width: 100vw;
text-align: center;
justify-content: center;
align-items: center;
`
const Description = styled.p`
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

const Labyrinth = () => {
    const labyrinth = useSelector((store) => store.labyrinth.destination);
    const dispatch = useDispatch();
    console.log ('actions', labyrinth.actions)

    const setBgImage = (coordinates) => {
        let bg = 'black';
        switch (coordinates) { //switch: needs a case that ends with a break, then more cases can be added
            case '0,0':
                bg = 'url(https://images.unsplash.com/photo-1464809142576-df63ca4ed7f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80) no-repeat center center fixed';
                break 
            case '1,0':
                bg = 'url(https://images.unsplash.com/photo-1505567745926-ba89000d255a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80) no-repeat center center fixed';
                break
            case '1,1':
                bg = 'url(https://images.unsplash.com/photo-1637783497754-3a1a8107c8af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNzg0NzgwOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080) no-repeat center center fixed'
                break
            case '0,1':
                bg = 'url(https://source.unsplash.com/photos/facU72FcKBI)'
                break
            case '0,2':
                bg = 'url(https://source.unsplash.com/photos/facU72FcKBI)'
                break
            case '0,3':
                bg = 'url(https://source.unsplash.com/photos/facU72FcKBI)'
                break
            case '1,3':
                bg = 'url(https://source.unsplash.com/photos/facU72FcKBI)'
                break
        default:
            bg = 'black'
        }
        return bg
    }
    
return (
    <Wrapper style={{ background: setBgImage(labyrinth.coordinates) }}>
    {labyrinth.coordinates!== '0,0'} {/*//this makes the "start-button" to just be shown when the game hasn't started*/}
    
    <Description>
        {labyrinth.description}
        {console.log ('actions2', labyrinth.actions)}
    </Description>
    <div>
        
        {labyrinth.actions !== undefined &&
        labyrinth.actions.map((item) => (
        <div key={item.description}>
            <p>
                {item.description} 
            </p>
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
);
};

export default Labyrinth;
