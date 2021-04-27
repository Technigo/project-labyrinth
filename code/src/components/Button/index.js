import React from 'react'
import Button from './style'

export default ({ children, toggle, ...props }) => {
  return (
    <Button {...props}>{children}</Button>
  )
}