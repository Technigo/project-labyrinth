import React from 'react'
import { Provider } from 'react-redux';
import { Startpage } from './Startpage';

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer
  })
  const store = configureStore({ reducer }) // 

  return (
    <div>
      <Provider store={store}>
        <Startpage />
      </Provider>
    </div>
  )
}
