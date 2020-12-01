import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { thunk, actionThunk, games } from './reducers/games';

export const Game = () => {
	const gameDetails = useSelector((store) => store.games);
	const loader = useSelector((store) => store.ui.isLoading);
	const [newUserName, setNewUserName] = useState('');
	const [showStart, setShowStart] = useState(true);
	const historyArr = gameDetails.history.slice(
		0,
		gameDetails.history.length - 1
	);
	const sortedHistoryArr = historyArr.reverse();

	const dispatch = useDispatch();
	const onStart = () => {
		dispatch(thunk(newUserName));
		dispatch(games.actions.setUsername(newUserName));
		setShowStart(false);
	};

	const onAction = (action) => {
		dispatch(actionThunk(newUserName, action));
	};

	return (
		<Container style={{ paddingTop: 100, maxWidth: 600 }}>
			{showStart && (
				<Box display="flex" flexDirection="column" alignItems="center">
					<TextField
						placeholder="Write a username"
						type="text"
						onChange={(event) => setNewUserName(event.target.value)}
						value={newUserName}
					/>

					<Button
						style={{ margin: 10, maxWidth: 200 }}
						variant="contained"
						color="primary"
						onClick={() => onStart()}>
						Start game
					</Button>
					{/* <button onClick={() => dispatch(games.actions.resetGame())}>
				Reset game
			</button> */}
				</Box>
			)}

			{!showStart && (
				<Card style={{ padding: 20 }}>
					<Box style={{ marginBottom: 10 }}>
						<Typography variant="body1" align="center">
							{gameDetails.description}
							{gameDetails.actions.map((action) => (
								<p>
									Towards {action.direction} {action.description}
								</p>
							))}
						</Typography>
					</Box>
					<Box display="flex" justifyContent="center">
						{gameDetails.actions.map((action) => (
							<Button
								style={{ margin: 10 }}
								variant="contained"
								color="primary"
								key={action.description}
								onClick={() => onAction(action)}>
								{action.type} {action.direction}
							</Button>
						))}
					</Box>
				</Card>
			)}

			{loader && (
				<Box display="flex" justifyContent="center" style={{ margin: 20 }}>
					<CircularProgress />
				</Box>
			)}

			<List>
				{sortedHistoryArr.map((item, index) => (
					<ListItem key={index}>{item.description}</ListItem>
				))}
			</List>
		</Container>
	);
};
