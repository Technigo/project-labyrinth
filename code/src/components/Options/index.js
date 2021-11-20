import React from 'react'
import { styled } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { ChoicesButton } from '../ChoicesButton'
import { useDispatch, useSelector } from 'react-redux'
import { StartPage } from 'components/StartPage';

const UpperBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: 'wrap',
    margin: "0 auto",
    backgroundColor: "gray",
    marginTop: "5%",
    width: "95%",
    height: "300px",
    borderRadius: "10px"
});

const TextWraper = styled(Box)({
    display: 'flex',
    alignContent: "center",
    flexWrap: 'wrap',
    margin: "0 auto",
    backgroundColor: "wheat",
    marginTop: "5%",
    width: "80%",
    height: "100px",
    color: "black",
    borderRadius: "15px"
});

export const Options = () => {
    const dispatch = useDispatch();
    const actualStep = useSelector(store => store.maze.actualStep)

    return (
        actualStep ?
            (<UpperBox component="section">
                <TextWraper >
                    <Typography variant="body2" color="inherit" component="div">
                        {actualStep.description}
                    </Typography>
                </TextWraper>
                <Typography variant="body1" color="inherit" component="div">
                    What do you want to do?
                </Typography>
                {actualStep.actions.map(action => {
                    return <ChoicesButton direction={action.direction} type={action.type} />
                })}
            </UpperBox>) :
            <StartPage />
    )
}
