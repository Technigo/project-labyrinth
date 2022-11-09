import React from 'react';
// import Start from 'components/Start';
// import Location from 'components/Location';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import labyrinth from 'reducers/labyrinth';
import Parent from 'components/Parent';

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer
  })

  const store = configureStore({
    reducer
  })
  // const username = useSelector((store) => store.labyrinth.username)
  return (
    <Provider store={store}>
      <Parent />
      {/* {labyrinth.labyrinth.initialState.username === null ? <Start /> : <Location />} */}
      {/*       <Start />
      <Location /> */}
    </Provider>
  )
}
