import React  from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Container, Paper } from '@material-ui/core'
import styled from 'styled-components'

import { game } from '../src/reducers/game'
import { ui } from '../src/reducers/ui'
import { StartGame } from 'components/StartGame'
import { MovePlayer} from 'components/MovePlayer'
import { PlayerPosition } from 'components/PlayerPosition'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { PlayerHistory } from 'components/PlayerHistory'


const reducer = combineReducers ({ 
  game: game.reducer,
  ui: ui.reducer 
})
const store = configureStore({ reducer })

const MyPaper = styled(Paper)`
&& {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top:30px;
}`;

export const App = () => {


  return (
    <Provider store={store} >
    <Container maxWidth= "xs" style={{ height: '90vh', backgroundColor: 'white', position: 'relative', top:'0px', left: '0px'}}>
      <MyPaper>
        <StartGame /> 
        <MovePlayer />
        <LoadingIndicator />
      </MyPaper>
      <PlayerPosition/>
      <PlayerHistory/>
     </Container>
    </Provider>
  )
}
