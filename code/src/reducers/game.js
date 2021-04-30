import { createSlice } from '@reduxjs/toolkit'

const initialItems = localStorage.getItem('game')
	? JSON.parse(localStorage.getItem('game'))
	: {
    username: "",
    coordinates: "",
    description: "",
    actions: [],
    history: [], //dig into these to also get previous location visits!!
    loadProgress: 100,
    error: null,
    mapArray: [
      [0, 0, 0, 0], 
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    mapArray2: [
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
        
        //is this reversal intentional??? Because lo and behold, the API says 1,3 when the map says current position is [3][1]
        store.mapArray2[newYCoordinate][newXCoordinate].current = true
        if (store.coordinates === "") {
        } else { 
          store.mapArray2[parseInt(store.coordinates.charAt(2))][parseInt(store.coordinates.charAt(0))].visited = true
        }
        // store.mapArray2[newYCoordinate][newXCoordinate] = 2
        action.payload.actions.forEach(action => {
          if (action.type === "move") {
            store.mapArray2[newYCoordinate][newXCoordinate][action.direction.toLowerCase()] = true
          }
        })
      }
      
      if (store.coordinates === "") {
      } else {
        store.mapArray2[parseInt(store.coordinates.charAt(2))][parseInt(store.coordinates.charAt(0))].current = false
        // store.mapArray[parseInt(store.coordinates.charAt(2))][parseInt(store.coordinates.charAt(0))] = 1
      }

      store.history = [...store.history, {
        coordinates: store.coordinates,
        description: store.description,
        actions: store.actions
      }]
      store.coordinates = action.payload.coordinates
      store.description = action.payload.description
      store.actions = action.payload.actions
    },
    setLoadProgress: (store, action) => {
      if (action.payload === 100) {
        store.loadProgress = action.payload
      } else {
        store.loadProgress = action.payload
      }
    },
    setError: (store, action) => {
      store.loadProgress = action.payload
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
        [0, 0, 0, 0], 
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]
      store.mapArray2 = [
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
  console.log("initialized inside advance")

  return (dispatch, getState) => {
    const state = getState()
    if (isStart) {
      endpoint = "start"
      postBody = JSON.stringify({
        username: input
      })
      console.log("this is a start!")
    } else {
      endpoint = "action"
      postBody = JSON.stringify({
        username: state.game.username,
        type: input.type,
        direction: input.direction
      })
      console.log("this is an action!")
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