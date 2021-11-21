import React, { useState } from 'react'
import { styled } from '@mui/styles';
import { maze } from 'Reducers/maze';
import { START_MAZE_URL } from "../../utils/url"
import { useDispatch } from 'react-redux'
import { Box, Button, Typography, TextField } from '@mui/material';
import { fetchNextStep } from 'Reducers/maze';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const MainBox = styled(Box)({
    display: 'flex',
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: 'wrap',
    margin: "20% auto",
    width: "90%",
    height: "auto",
    color: "white",
    borderRadius: "10px",
    background: "rgb(0 0 0 / 80%)",
    '@media (min-width:768px)': {
        width: '60%'
    },
    '@media (min-width:992px)': {
        width: '50%'
    },

});

const TextBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignContent: "center",
    alignItems: "center",
    margin: "5% auto",
    width: "90%",
    height: "auto",
    color: "white",
    background: "rgb(0 0 0 / 80%)",
});

const InputBox = styled(Box)({
    display: 'flex',
    alignContent: "center",
    alignItems: "center",
    margin: "5% auto",
    width: "80%",
    height: "auto",
    '@media (min-width:768px)': {
        width: '60%',
    },
});

const InputField = styled(TextField)({
    background: 'white',
    width: "100%",
    margin: "1rem auto",
    borderRadius: "5px",
});

const ButtonBox = styled(Box)({
    display: 'flex',
    alignContent: "center",
    alignItems: "center",
    margin: "5% auto",
    width: "80%",
    height: "auto",
    justifyContent: "center",
});

const StartButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: 48,
    padding: '0 30px',
    width: "4rem",
});

export const StartPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ "username": name })
    }


    const handleOnClick = () => {
        dispatch(maze.actions.addUserName(name));
        dispatch(fetchNextStep(START_MAZE_URL, options));
    }


    return (
        <MainBox component="section">
            <TextBox>
                <ThemeProvider theme={theme}>
                    <Typography variant="h1" color="inherit" component="div">
                        Mental Maze
                    </Typography>
                    <Typography variant="h6" color="inherit" component="div">
                        This game will lead you to unimaginable spaces.
                        You need to use your creativity to find the exit
                        Do you want to enter the maze?
                    </Typography>
                </ThemeProvider>
            </TextBox>
            <InputBox>
                <InputField
                    required
                    id="outlined-required"
                    label="Required"
                    variant="outlined"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </InputBox>
            <ButtonBox>
                <StartButton disabled={name === ""} onClick={() => handleOnClick()}>Start</StartButton>
            </ButtonBox>
        </MainBox>
    )
}
