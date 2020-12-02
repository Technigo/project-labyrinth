import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { 
	Container,
	Button,
	TextField,
	Box,
	CircularProgress,
} from '@material-ui/core'
import AirplanemodeActiveSharpIcon from '@material-ui/icons/AirplanemodeActiveSharp';
import styled from 'styled-components'

import { thunk, actionThunk, games } from '../reducers/games'

const Discription = styled.p`
	font-size: 40px;
	font-weight: 500;
	text-align: center;
`
const StartForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 10%;
	background: rgba(191, 191, 191, 0.5);
	padding: 20px 20px 60px 20px;
	border-radius: 20px;
`

const GameContainer = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: rgba(191, 191, 191, 0.5);
	padding: 20px 20px 60px 20px;
	border-radius: 20px;
`

export const Game = () => {
	const gameDetails = useSelector((store) => store.games)
	const loader = useSelector((store) => store.ui.isLoading)
	const [newUserName, setNewUserName] = useState('')
	const [showStart, setShowStart] = useState(true)

  const dispatch = useDispatch()
  
	const onStart = () => {
		dispatch(thunk(newUserName))
		dispatch(games.actions.setUsername(newUserName))
		setShowStart(false)
	}

	const onAction = (action) => {
		dispatch(actionThunk(newUserName, action))
	}

	return (
		<Container style={{ marginTop: 100, paddingTop: 100, maxWidth: 700 }}>
			{showStart && (
				<StartForm>
					<Discription>Enter you name to start...</Discription>
					<form  onSubmit={() => onStart()}>
						<TextField
							variant='filled' 
							placeholder="Write a username"
							color ="secondary"
							type="text"
							label="Type Name Here"
							required
							onChange={(event) => setNewUserName(event.target.value)}
							value={newUserName}
						/>
						<Button
							style={{ margin: 10, maxWidth: 200 }}
							startIcon = {< AirplanemodeActiveSharpIcon/>}
							variant="contained" 
							color="primary"
							type='submit'>
							Start game
						</Button>
					</form>
				</StartForm>
			)}

			{loader && (
				<Box display="flex" justifyContent="center">
					<CircularProgress/>
					<p>LOADING...</p>
				</Box>
			)}

			{!showStart && (
				<GameContainer>
					<Discription>{gameDetails.description}</Discription>
					<div>
						{gameDetails.actions.map((action) => (
						<Button variant="contained" color="primary" key={action.description} onClick={() => onAction(action)}>
							{action.type} {action.direction}
						</Button>
						))}
					</div>
				</GameContainer>
			)}
		</Container>
	)
}
