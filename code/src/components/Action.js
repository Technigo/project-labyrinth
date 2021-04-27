import React from 'react'
import { useDispatch } from 'react-redux'

import ActionButton from './ActionButton'
import ActionDescription from './ActionDescription'

const Action = ({ direction, description, type }) => {
  return (
    <div>
      <ActionDescription description={description} />
      <ActionButton direction={direction} type={type} />
    </div>
  )
}
export default Action