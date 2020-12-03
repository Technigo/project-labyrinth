import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components'
import { Button, Input, Typography } from '@material-ui/core'

import { fetchStart } from "reducers/game";

const H1Typography = styled(Typography)`
 font-size: 30px;
 padding: 10px;
 text-align: center;
`;

const H2Typography = styled(Typography)`
 font-size: 20px;
 padding: 10px;
`;

const MyButton = styled(Button)`
  margin: 20px 0px;
`;

export const StartButton = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const started = useSelector(state => state.ui.isStarted)

  return (
    <>
      {!started && (
        <>
            <H1Typography variant="h1" component="h3"> 
              Labyrinth game
            </H1Typography>
            <H2Typography variant="h2" component="h4">
              Start game by entering username
            </H2Typography>
          <Input
            type="text"
            variant='contained'
            placeholder='enter username'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <MyButton
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
          </MyButton>
        </>
      )}
    </>
  );
};
