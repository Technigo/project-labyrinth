import React from 'react'
import UserForm from './UserForm.js'
import { useSelector } from 'react-redux';

import Description from './Description'
import Directions from './Directions'
import GoBack from './GoBack'

const Container = () => {
  const actions = useSelector(store => store.labyrinth.actions)
  const history = useSelector(store=> store.labyrinth.history)

  return (
    <div>
      {actions
        ? <>
          {history.length > 0 && <GoBack/>}
          <Description />
          <Directions />
          </>
        : <UserForm />}
    </div>
  )
}

export default Container