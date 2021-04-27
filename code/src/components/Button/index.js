import React from 'react'
import Button from './style'

export default ({ children, ...props }) => {
  return (
    <Button {...props}>{children}</Button>
  )
}