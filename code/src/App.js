import React from 'react'
import { store } from './store'
import { Provider } from 'react-redux'
import { Options } from 'components/Options'
import { UserName } from 'components/UserName'
import { History } from 'components/History'
import { Box } from '@mui/material';
import { styled } from '@mui/styles';

const BackgroundImage = styled(Box)({
  backgroundImage: "url(https://images.unsplash.com/photo-1574390353491-92705370c72e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80)",
  position: "absolute",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: "hidden",
  minHeight: "100vh",
  textAlign: "center",
  width: '100%',
})



export const App = () => {
  return (
    <BackgroundImage >
      <Provider store={store} >
        <UserName />
        <Options />
        <History />
      </Provider>
    </BackgroundImage>
  )
}
