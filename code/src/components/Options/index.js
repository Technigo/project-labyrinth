import React from 'react'
import { styled } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { ChoicesButton } from '../ChoicesButton'
import { useSelector } from 'react-redux'
import { StartPage } from 'components/StartPage';
import { Loader } from 'components/Loader'
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';
import Lottie from "react-lottie";
import animationData from '../../lotties/congrats-success-batch';


let theme = createTheme();
theme = responsiveFontSizes(theme);

const UpperBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: 'wrap',
    background: "rgb(0 0 0 / 80%)",
    margin: "10% auto 5% auto",
    width: "95%",
    height: "auto",
    borderRadius: "10px",
    color: "white",
    padding: "2% auto",
    '@media (min-width:768px)': {
        width: '60%'
    },
});

const DescriptiontWraper = styled(Box)({
    display: 'flex',
    alignContent: "center",
    flexWrap: 'wrap',
    margin: "7% auto",
    background: "rgb(0 0 0 / 80%)",
    width: "90%",
    height: "auto",
    color: "white",
    borderRadius: "15px",
    padding: "2%",
    justifyContent: "center",
});

const WhatToDoWraper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignContent: "center",
    flexWrap: 'wrap',
    margin: "5% auto",
    padding: "2%",
    justifyContent: "center",
});

const ButtonWrapperBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: 'wrap',
    width: "95%",
    height: "auto",
    borderRadius: "10px"
});


export const Options = () => {
    const isLoading = useSelector(store => store.ui.isLoading);
    const actualStep = useSelector(store => store.maze.actualStep);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    if (isLoading === true) {
        return <Loader />
    }


    if (Object.keys(actualStep).length === 0) {
        return <StartPage />
    }

    return (
        <UpperBox component="section">
            <ThemeProvider theme={theme}>
                <Typography variant="h3" color="inherit" component="div">
                    Coordinates:  {actualStep && actualStep.coordinates}
                </Typography>
                <DescriptiontWraper >
                    <Typography variant="h6" color="inherit" component="div">
                        {actualStep && actualStep.description}
                    </Typography>
                </DescriptiontWraper>
                <WhatToDoWraper>
                    {actualStep.actions.length !== 0 ?
                        <Typography variant="h5" color="inherit" component="div">
                            What do you want to do?
                        </Typography> :
                        <>
                            <Typography variant="h5" color="inherit" component="div">
                                "You found the exit! Congratulations!"
                            </Typography>
                            <Lottie options={defaultOptions} height={200} width={200} />
                        </>
                    }
                </WhatToDoWraper>
                <ButtonWrapperBox />
                {actualStep.actions.length !== 0 && actualStep.actions.map(action => {
                    return <ChoicesButton direction={action.direction} type={action.type} />
                })}
                <ButtonWrapperBox />
            </ThemeProvider>
        </UpperBox >
    )
}
