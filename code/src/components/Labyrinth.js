import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import game, { navigateGame } from '../reducer/game'
import styled from 'styled-components'

const Background = styled.div`
	background-color: ${props => props.background};

`

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100px;
	gap: 10px;

	div {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

`

const Square = styled.div`
	padding: 10px;
	width: 10px;
	padding: 5px;
	height: 10px;
	background: ${props => props.background}


`

const Box = styled.span`
	width: 30px;
	height: 30px;
	padding: 50px;
	background-color: green;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		width: 10px;
		padding: 10px;
		height: 10px;
		left: 0;
		top: 0;
		transform: translateX(${props => props.position === 'West' ? '20px' : ''});
		transform: translateY(${props => props.position === 'North' ? '20px' : ''});
		transform: translateX(${props => props.position === 'East' ? '20px' : ''});
		transform:translateY(${props => props.position === 'South' ? '-20px' : ''});
		background-color: black;
	}

`


const Labyrinth = () => {
	const [select, setSelect] = useState([]);
	const [nav,setNav] = useState('');
	const dispatch = useDispatch()
	const items = useSelector((store) => store.game.items)
	
	const onNavigate = (type, direction) => {
	   setSelect(prev => [...prev, direction])
	   setNav(direction)
	   dispatch(navigateGame(type, direction))
	   
	}
	console.log(nav)

	const changeBG = () => {
		switch(nav) {
			case 'East': 
				return '10px'
				break;
			case '1,0':
				return 'pink'
				break;
			case '1,1':
				return 'green'
				break;
			case '0,1':
				return 'blue'
				break;
			case '0,2':
				return 'red'
			break;
			case '0,3':
				return 'yellow'
			break;
			case '1,3':
				return 'orange'
			break;
		default:
				return 'white'
}

		}
	
	  
		

	return (
		<Background background = {changeBG()}>
			<Wrapper>
		
				<div> 

				<Square background = {items.coordinates === '1,0' ? 'pink' :'black'}></Square>
				<Square background = {items.coordinates === '1,1' ? 'pink' :'black'}></Square>
				<Square background = {items.coordinates === '0,1' ? 'pink' :'black'}></Square>
				</div>
				<div>

				<Square background = {items.coordinates === '0,2' ? 'pink' :'black'}></Square>
				<Square background = {items.coordinates === '0,3' ? 'pink' :'black'}></Square>
				<Square background = {items.coordinates === '1,3' ? 'pink' :'black'}></Square>
				</div>
				<div>

				<Square></Square>
				<Square></Square>
				<Square></Square>
				</div>

			</Wrapper>
			<Box position = {nav}>
			 
			</Box>
			<p>You choose {select}</p>
			{items.actions.map(item => {
				return <div>
					<p>{item.description}</p> 
					<button onClick={() => onNavigate(item.type, item.direction)}>{item.direction}</button>
				</div>
			})}
		</Background>
	)
		}

export default Labyrinth
