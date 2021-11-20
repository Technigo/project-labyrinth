import React from 'react'
import { store } from './store'
import { Provider } from 'react-redux'
import { Options } from 'components/Options'
import { UserName } from 'components/UserName'
import { History } from 'components/History'
import Container from '@mui/material/Container';
import { styled } from '@mui/styles';

const MainContainer = styled(Container)({
  background: 'blue',
  border: "1px solid red",
  minHeight: "100vh",
  display: "flex",
  flexDirection: 'column',
  textAlign: "center",
})

export const App = () => {
  return (
    <div>
      <MainContainer maxWidth="sm">
        <Provider store={store} >
          <UserName />
          <Options />
          <History />
        </Provider>
      </MainContainer>
    </div>
  )
}
