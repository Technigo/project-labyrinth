import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import gameactions from '../reducers/gameactions'
import { API_START } from '../utils/urls'

const StartScreen = () => {
  const [imputValue, setImputValue] = useState('')
  const dispatch = useDispatch()

  const generateGame = (name) => {
    return (dispatch, getState) => {
      fetch(API_START, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ username: name })
      })
        .then(res => res.json())
        .then(data => console.log(data))
      // .then(data => dispatch(gameactions.actions.setDescription(data)))
    }
  }
}

export default StartScreen