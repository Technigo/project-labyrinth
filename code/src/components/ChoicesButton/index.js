import React from 'react'
import { styled } from '@mui/styles';
import Button from '@mui/material/Button';

const ChoiceButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    width: "fit-content",
});

export const ChoicesButton = ({ direction, type }) => {

    return (
        <ChoiceButton>{`${type} ${direction}`}</ChoiceButton>
    )
}
