import React, { useState } from 'react'
import { game } from './game';

export const moveForward = () => {
  const [description, setDescription] = useState('')

  fetch('https://wk16-backend.herokuapp.com/action', {
    method: 'POST',
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ username: username })
  })
  .then(response => response.json())
  .then(json => {
    setDescription(json.description)
  })
}