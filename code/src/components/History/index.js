import React from 'react'
import { styled } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux'

const HistoryContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: 'wrap',
    backgroundColor: "rgb(48, 27, 63)",
    margin: "5% auto",
    padding: "1rem 0",
    width: "95%",
    height: "auto",
    borderRadius: "10px",
    color: "white",
    ['@media (min-width:768px)']: {
        width: '60%',
    },
});

const StepContainer = styled(Box)({
    display: 'flex',
    alignContent: "center",
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: "0 auto",
    background: "rgb(0 0 0 / 50%)",
    marginTop: "3%",
    width: "90%",
    height: "auto",
    textAlign: "justify",
    borderRadius: "8px",
    padding: "5px 10px",
    color: "white",
    alignContent: "flex-start",
    ['@media (min-width:768px)']: {
        width: '80%',
    },
});

const OptionSelected = styled(Box)({
    display: 'flex',
    alignContent: "center",
    flexWrap: 'wrap',
    margin: "0 auto",
    margin: "2% 0",
    textTransform: 'capitalize',

});

export const History = () => {
    const history = useSelector(store => store.maze.history)

    return (
        history.length > 0 &&

        <HistoryContainer component="section">
            <Typography variant="h3" color="inherit" component="div">
                Your History
            </Typography>
            {history.map(step => {
                return (
                    <StepContainer key={step.coordinates}>
                        <Typography variant="h6" color="inherit" component="div">
                            Coordinates: {step.coordinates}
                        </Typography>
                        <Typography variant="body2" color="inherit" component="div">
                            {step.description}
                        </Typography>
                        <OptionSelected component="div">
                            <Typography variant="body2" color="inherit" component="div">
                                &raquo;{` ${step.choice.type} ${step.choice.direction}`}
                            </Typography>
                        </OptionSelected>
                    </StepContainer>)
            })}


        </HistoryContainer>
    )
}
