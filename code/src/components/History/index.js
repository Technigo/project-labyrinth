import React from 'react'
import { styled } from '@mui/styles';
import { Box, Typography, Icon } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'

const HistoryContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: 'wrap',
    margin: "0 auto",
    backgroundColor: "gray",
    marginTop: "5%",
    padding: "1rem 0",
    width: "95%",
    height: "auto",
    borderRadius: "10px"
});


const StepContainer = styled(Box)({
    display: 'flex',
    alignContent: "center",
    flexWrap: 'wrap',
    margin: "0 auto",
    backgroundColor: "#00bcd4",
    marginTop: "5%",
    width: "90%",
    height: "auto",
    textAlign: "justify",
    borderRadius: "8px",
    padding: "5px"
});

const OptionSelected = styled(Box)({
    display: 'flex',
    alignContent: "center",
    flexWrap: 'wrap',
    margin: "0 auto",
    margin: "2% 0",
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
                            Step: {step.coordinates}
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
