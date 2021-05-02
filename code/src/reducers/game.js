import { createSlice } from '@reduxjs/toolkit'

const initialItems = localStorage.getItem('game')
	? JSON.parse(localStorage.getItem('game'))
	: {
    username: "",
    coordinates: "",
    description: "",
    actions: [],
    history: [],
    loadProgress: 100,
    error: null,
    mapArray: [
      [
        {
          current: false,
          visited: false,
          north: false, 
          east: false, 
          south: false, 
          west: false 
        }, 
        {
          current: false,
          visited: false,
          north: false, 
          east: false, 
          south: false, 
          west: false 
        }, 
        {
          current: false,
          visited: false,
          north: false, 
          east: false, 
          south: false, 
          west: false 
        },
        {
          current: false,
          visited: false,
          north: false, 
          east: false, 
          south: false, 
          west: false 
        }
      ], 
      [
        {
          current: false,
          visited: false,
          north: false, 
          east: false, 
          south: false, 
          west: false 
        }, 
        {
          current: false,
          visited: false,
          north: false, 
          east: false, 
          south: false, 
          west: false 
        }, 
        {
          current: false,
          visited: false,
          north: false, 
          east: false, 
          south: false, 
          west: false 
        },
        {
          current: false,
          visited: false,
          north: false, 
          east: false, 
          south: false, 
          west: false 
        }
      ],
      [
        {
          current: false,
          visited: false,
          north: false, 
          east: false, 
          south: false, 
          west: false 
        }, 
        {
          current: false,
          visited: false,
          north: false, 
          east: false, 
          south: false, 
          west: false 
        }, 
        {
          current: false,
          visited: false,
          north: false, 
          east: false, 
          south: false, 
          west: false 
        },
        {
          current: false,
          visited: false,
          north: false, 
          east: false, 
          south: false, 
          west: false 
        }
      ],
      [
        {
          current: false,
          visited: false,
          north: false, 
          east: false, 
          south: false, 
          west: false 
        }, 
        {
          current: false,
          visited: false,
          north: false, 
          east: false, 
          south: false, 
          west: true 
        }, 
        {
          current: false,
          visited: false,
          north: false, 
          east: false, 
          south: false, 
          west: false 
        },
        {
          current: false,
          visited: false,
          north: false, 
          east: false, 
          south: false, 
          west: false 
        }
      ]
    ]
  }

const game = createSlice ({
  name: "game",
  initialState: initialItems,
  reducers: {
    setUsername: (store, action) => {
      localStorage.setItem('username', JSON.stringify(action.payload))
      store.username = action.payload
    },
    setGameState: (store, action) => {
      if (action.payload.coordinates === "") {
      } else {
        const newXCoordinate = parseInt(action.payload.coordinates.charAt(0))
        const newYCoordinate = parseInt(action.payload.coordinates.charAt(2))
        
      store.mapArray[newYCoordinate][newXCoordinate].current = true
        if (store.coordinates === "") {
        } else { 
          store.mapArray[parseInt(store.coordinates.charAt(2))][parseInt(store.coordinates.charAt(0))].visited = true
        }
        action.payload.actions.forEach(action => {
          if (action.type === "move") {
            store.mapArray[newYCoordinate][newXCoordinate][action.direction.toLowerCase()] = true
          }
        })
      }
      
      if (store.coordinates === "") {
      } else {
        store.mapArray[parseInt(store.coordinates.charAt(2))][parseInt(store.coordinates.charAt(0))].current = false
      }

      store.history = [...store.history, {
        logType: 'room',
        coordinates: store.coordinates,
        description: store.description,
        actions: store.actions,
      }]
      store.coordinates = action.payload.coordinates
      store.description = action.payload.description
      store.actions = action.payload.actions
    },
    setLoadProgress: (store, action) => {
      store.loadProgress = action.payload
    },
    setError: (store, action) => {
      store.loadProgress = action.payload
    },
    logAction: (store, action) => {
      store.history = [...store.history, {
        logType: 'action',
        type: action.payload.type,
        direction: action.payload.direction
      }]
    },
    reset: (store, action) => {
      store.username = ""
      store.coordinates = ""
      store.description = ""
      store.actions = []
      store.history = []
      store.loadProgress = 100
      store.error = null
      store.mapArray = [
        [
          {
            current: false,
            visited: false,
            north: false, 
            east: false, 
            south: false, 
            west: false 
          }, 
          {
            current: false,
            visited: false,
            north: false, 
            east: false, 
            south: false, 
            west: false 
          }, 
          {
            current: false,
            visited: false,
            north: false, 
            east: false, 
            south: false, 
            west: false 
          },
          {
            current: false,
            visited: false,
            north: false, 
            east: false, 
            south: false, 
            west: false 
          }
        ], 
        [
          {
            current: false,
            visited: false,
            north: false, 
            east: false, 
            south: false, 
            west: false 
          }, 
          {
            current: false,
            visited: false,
            north: false, 
            east: false, 
            south: false, 
            west: false 
          }, 
          {
            current: false,
            visited: false,
            north: false, 
            east: false, 
            south: false, 
            west: false 
          },
          {
            current: false,
            visited: false,
            north: false, 
            east: false, 
            south: false, 
            west: false 
          }
        ],
        [
          {
            current: false,
            visited: false,
            north: false, 
            east: false, 
            south: false, 
            west: false 
          }, 
          {
            current: false,
            visited: false,
            north: false, 
            east: false, 
            south: false, 
            west: false 
          }, 
          {
            current: false,
            visited: false,
            north: false, 
            east: false, 
            south: false, 
            west: false 
          },
          {
            current: false,
            visited: false,
            north: false, 
            east: false, 
            south: false, 
            west: false 
          }
        ],
        [
          {
            current: false,
            visited: false,
            north: false, 
            east: false, 
            south: false, 
            west: false 
          }, 
          {
            current: false,
            visited: false,
            north: false, 
            east: false, 
            south: false, 
            west: true 
          }, 
          {
            current: false,
            visited: false,
            north: false, 
            east: false, 
            south: false, 
            west: false 
          },
          {
            current: false,
            visited: false,
            north: false, 
            east: false, 
            south: false, 
            west: false 
          }
        ]
      ]
    }
  }
})

export const advance = (input) => {
  let isStart = input.type ? false : true
  let endpoint = ""
  let postBody = {}

  return (dispatch, getState) => {
    const state = getState()
    if (isStart) {
      endpoint = "start"
      postBody = JSON.stringify({
        username: input
      })
    } else {
      endpoint = "action"
      postBody = JSON.stringify({
        username: state.game.username,
        type: input.type,
        direction: input.direction
      })
      dispatch(game.actions.logAction(JSON.parse(postBody)))
    }
    dispatch(game.actions.setLoadProgress(33))
    fetch(`https://wk16-backend.herokuapp.com/${endpoint}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: postBody
    })
      .then(res => {
        dispatch(game.actions.setLoadProgress(55))
        return res.json()
      })
      .then(update => {
        dispatch(game.actions.setLoadProgress(77))
        return dispatch(game.actions.setGameState(update))
      })
      .catch(error => dispatch(game.actions.setError(error.message)))
      .finally(() => dispatch(game.actions.setLoadProgress(100))) 
    }
}

export default game