import React from 'react'
import {useSelector} from 'react-redux'

const Description = () => {
  const userName = useSelector(store => store.labyrinth.userName)
  const actions = useSelector(store => store.labyrinth.actions)
  //console.log(actions)
  return(
    <>
    {userName !== null  && <p>{actions.description}</p>}
    </>
  )
}

export default Description