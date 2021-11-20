import React, { useState } from 'react'
import { styled } from '@mui/styles';
import { maze } from 'Reducers/maze';
import { useDispatch } from 'react-redux'
import { Box, Button, Typography, TextField } from '@mui/material';
import { fetchNextStep } from 'Reducers/maze';

const MainBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: 'wrap',
    margin: "0 auto",
    backgroundColor: "gray",
    marginTop: "5%",
    width: "80%",
    height: "300px"
});

const StartButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    width: "fit-content",
});

export const StartPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const url = "https://www.google.com/"

    const handleOnClick = () => {
        dispatch(maze.actions.addUserName(name));
        fetchNextStep(url)
    }


    return (
        <MainBox component="section">
            <Typography variant="h2" color="inherit" component="div">
                Mental Maze
            </Typography>
            <Typography variant="p" color="inherit" component="div">
                This game will lead you to unimaginable spaces.
                You need to use your creativity to find the exit
                Do you want to enter the maze?
            </Typography>
            <TextField
                required
                id="outlined-required"
                label="Required"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <StartButton disabled={name === ""} onClick={() => handleOnClick()}>Start</StartButton>
        </MainBox>
    )
}
