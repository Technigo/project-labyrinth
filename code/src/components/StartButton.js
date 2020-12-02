import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components'
import { Button, Input, Paper, Typography } from '@material-ui/core'

import { fetchStart } from "reducers/game";

const H1Typography = styled(Typography)`
 font-size: 30px;
 padding: 10px;
`;

const H2Typography = styled(Typography)`
 font-size: 20px;
 padding: 10px;
`;

export const StartButton = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const started = useSelector(state => state.ui.isStarted)

  return (
    <>
      {!started && (
        <>
          <Paper elevation={0}>
            <H1Typography variant="h1" component="h3"> 
              Labyrinth game
            </H1Typography>
            <H2Typography variant="h2" component="h4">
              Start game by entering username
            </H2Typography>
          </Paper>
          <Input
            type="text"
            variant='contained'
            placeholder='Enter username'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            fullWidth
            variant='contained'
            type="button"
            size='small'
            disabled={value.length < 1}
            onClick={() => {
              dispatch(fetchStart(value));
            }}
          >
            Start Game
          </Button>
        </>
      )}
    </>
  );
};
