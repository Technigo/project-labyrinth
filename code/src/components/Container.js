import React from 'react'
import UserForm from './UserForm.js'
import { useSelector } from 'react-redux';

import Description from './Description'
import Directions from './Directions'
import GoBack from './GoBack'

const Container = () => {
  const actions = useSelector(store => store.labyrinth.actions)
  console.log(actions)
  const history = useSelector(store => store.labyrinth.history)
  const error = useSelector(store => store.labyrinth.error)
  const loading = useSelector(store => store.labyrinth.loading)

  return (
    <div>
      {loading && <h1>Loading ...</h1>}
      {error && <h1>Something went wrong, reason: {error}</h1>}
      {actions && !error
        ? <>
          {history.length > 0 && <GoBack />}
          <Description />
          <Directions />
        </>
        : <UserForm />}
    </div>
  )
}

export default Container