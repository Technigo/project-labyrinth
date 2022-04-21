import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

const initialState = {
  username: '',
  currentStep: [],
  loading: false
}

const steps = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setCurrentStep: (store, action) => {
      store.currentStep = action.payload
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    }
  }
})

export const fetchStart = () => {
  return (dispatch, getState) => {
    const state = getState()
    const username = {
      username: state.steps.username
    }
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(username)
    }
    dispatch(steps.actions.setLoading(true))
    fetch(
      `https://labyrinth-technigo.herokuapp.com/start?username=${
        getState().steps.username
      }`,
      options
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(steps.actions.setCurrentStep(json))
      })
      .finally(() => dispatch(steps.actions.setLoading(false)))
  }
}

export const fetchSteps = (direction) => {
  return (dispatch, getState) => {
    const state = getState()

    const infoToAPI = {
      username: state.steps.username,
      type: 'move',
      direction: direction
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(infoToAPI)
    }

    fetch('https://labyrinth-technigo.herokuapp.com/action', options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(steps.actions.setCurrentStep(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

export default steps
