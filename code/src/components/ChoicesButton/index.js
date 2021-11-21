import React from 'react';
import { MAZE_URL } from "../../utils/url";
import { fetchNextStep } from 'Reducers/maze';
import { maze } from 'Reducers/maze';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/styles';
import { Button, Box } from '@mui/material';

const ChoiceButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: 48,
    padding: '0 30px',
    width: "fit-content",

});

const ButtonWrapperBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: 'wrap',
    margin: "1rem",
    height: "auto",

});

export const ChoicesButton = ({ direction, type }) => {
    const dispatch = useDispatch();
    const name = useSelector(store => store.maze.userName)
    const actualStep = useSelector(store => store.maze.actualStep)
    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            username: name,
            type: type,
            direction: direction,
        })
    };

    const history = {
        ...actualStep,
        choice: {
            type: type,
            direction: direction,
        }
    }

    const handleOnClick = () => {
        dispatch(fetchNextStep(MAZE_URL, options));
        dispatch(maze.actions.addToHistory(history));
    }

    return (
        <ButtonWrapperBox>
            <ChoiceButton onClick={() => handleOnClick()}>{`${type} ${direction}`}</ChoiceButton>
        </ButtonWrapperBox>
    )
}
