import React from 'react'
import { useSelector } from 'react-redux'

import direction from '../reducers/direction'

const InGame = () => {
 const description = useSelector(store => store.direction.username)

 console.log(description)

  return (
    <div>
        {/* <p>{description.description}</p> */}
  </div>
  )
}

export default InGame