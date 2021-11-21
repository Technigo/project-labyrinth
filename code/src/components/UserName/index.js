import React from 'react'
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux'
import { styled } from '@mui/styles';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const BarWrapperBox = styled(Box)({
    color: "red",
    backgroundColor: "rgb(48, 27, 63)",
    boxShadow: "-4px 4px 2px rgba(0, 0, 0, 0.5)",
    height: "50px",
    display: "flex",
    alignItems: "center",
    padding: "1rem",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    ['@media (min-width:768px)']: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export const UserName = () => {
    const userName = useSelector(store => store.maze.userName)

    return (
        userName &&
        <BarWrapperBox>
            <ThemeProvider theme={theme}>
                <Typography variant="h6" color="white" component="div">
                    User name: {userName}
                </Typography>
                <Typography variant="h6" color="white" component="div">
                    Mental Maze
                </Typography>
            </ThemeProvider>
        </BarWrapperBox>

    );
}
