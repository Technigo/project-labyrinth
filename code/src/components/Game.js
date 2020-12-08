import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { 
  Container,
  Button,
  TextField,
  CircularProgress,
  ButtonGroup
} from '@material-ui/core'
import AirplanemodeActiveSharpIcon from '@material-ui/icons/AirplanemodeActiveSharp'
import styled from 'styled-components'
import { thunk, actionThunk, games } from '../reducers/games'

const Discription = styled.p`
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  @media (min-width: 600) {
    font-size: 35px;
  };
  @media (min-width: 900) {
    font-size: 45px;
  };
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(191, 191, 191, 0.5);
  padding: 20px 20px 60px 20px;
`

const StartGame = styled.div`
  display: flex;
  flex-direction: column;
`

export const Game = () => {
  const gameDetails = useSelector((store) => store.games)
  const loader = useSelector((store) => store.ui.isLoading)
  const [newUserName, setNewUserName] = useState('')
  const [showStart, setShowStart] = useState(true)

  const dispatch = useDispatch()
  
  const onStart = () => {
    dispatch(thunk(newUserName))
    dispatch(games.actions.setUsername(newUserName))
    setShowStart(false)
  }

  const onAction = (action) => {
    dispatch(actionThunk(newUserName, action))
  }

  const onHistory = () => {
    dispatch(games.actions.history())
  }

  return (
    <Container style={{ marginTop: 10, paddingTop: 100, maxWidth: 700 }}>
      {showStart && (
        <Box>
          <Discription>Enter you name to start...</Discription>
          <form  onSubmit={() => onStart()}>
            <StartGame>
              <TextField
                variant='filled' 
                placeholder='Write a username'
                color ='secondary'
                type='text'
                label='Type Name Here'
                required
                onChange={(event) => setNewUserName(event.target.value)}
                value={newUserName}
                style={{ margin: 10, maxWidth: 300 }}
              />
              <Button
                style={{ margin: 10, maxWidth: 200 }}
                startIcon = {< AirplanemodeActiveSharpIcon/>}
                variant='contained'
                color='primary'
                type='submit'
              >
                Start game
              </Button>
            </StartGame>
            
          </form>
        </Box>
      )}

      {loader && (
        <Box display='flex' justifyContent='center'>
          <CircularProgress/>
          <p>LOADING...</p>
        </Box>
      )}

      {!showStart && (
        <Box>
          <Discription>{gameDetails.description}</Discription>
          <ButtonGroup>
            {gameDetails.actions.map((action) => (
              <Button 
                variant='contained' 
                color='primary' 
                key={action.description} 
                onClick={() => onAction(action)}
              >
                {action.type} {action.direction}
              </Button>
            ))}
          </ButtonGroup>
          <Button 
            style={{ margin: 10, maxWidth: 200 }} 
            variant='contained' color='primary' 
            onClick={onHistory}
          >
            Go Back
          </Button>
        </Box>
      )}
    </Container>
  )
}
