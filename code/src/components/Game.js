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

import { thunk, actionThunk, games } from '../reducers/games';
import { Map } from './Map';

import calm from '../assets/calm-light-flow.jpg';
import caveopening from '../assets/cave-opening.jpg';
import caveroom from '../assets/cave-room.jpg';
import colorful from '../assets/colorful.jpg';
import gizmos from '../assets/gizmos.jpg';
import papers from '../assets/papers.jpg';
import ray from '../assets/ray.jpg';

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

	const currentLocation = gameDetails.coordinates;

	let backgroundImage = null;
	switch (currentLocation) {
		case '0,0':
			backgroundImage = caveopening;
			break;
		case '1,0':
			backgroundImage = ray;
			break;
		case '1,1':
			backgroundImage = colorful;
			break;
		case '0,1':
			backgroundImage = gizmos;
			break;
		case '0,2':
			backgroundImage = caveroom;
			break;
		case '0,3':
			backgroundImage = papers;
			break;
		case '1,3':
			backgroundImage = calm;
			break;
		default:
			backgroundImage = null;
	}

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
		<div
			style={{
				backgroundImage: `url( ${backgroundImage})`,
				backgroundSize: 'cover',
				width: '100%',
				height: '100vh',
				display: 'flex',
			}}>
			<Container
				style={{
					paddingTop: 20,
					maxWidth: 600,
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
				}}>
				<Map history={historyArr} gameDetails={gameDetails} />
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
					</Box>
				)}

				{!showStart && (
					<Card style={{ padding: 20, overflow: 'scroll' }}>
						<Box style={{ marginBottom: 10 }}>
							<Typography variant="body1" align="center">
								{gameDetails.description}
								{gameDetails.actions.map((action, index) => (
									<p key={index}>
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
						<ListItem key={index}>
							<Typography
								variant="caption"
								align="center"
								color="textSecondary"
								style={{ color: '#fff' }}>
								{item.description}
							</Typography>
						</ListItem>
					))}
				</List>
			</Container>
		</div>
	);
};
