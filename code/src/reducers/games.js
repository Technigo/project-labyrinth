import { createSlice } from '@reduxjs/toolkit'


export const games  = createSlice({
    name: 'games',
    initialState: {
        username: '',
        gameStatus: {
            description: "",
            actions: []
        },
        history: [],
        error: null,
        loading: false
    },
    reducers: {
        setUserName: (store, action) => {
            store.username = action.payload
        },
        setGameStatus: (store, action) => {
            store.gameStatus = action.payload
        },
        saveGameStatus: (store, action) => {
            if (store.gameStatus) {
                store.history = [...store.history, store.gameStatus]
            }
            store.gameStatus = action.payload
        },
        setPreviousGameStatus: (store) => {
            if (store.history.length) {
                store.saveGameStatus = store.history[store.history.length - 1];
                store.history = store.history.slice(0, store.history.length - 1);
            }
        },
        setError: (store, action) => {
            store.error = action.payload
        },
        setLoading: (store, action) => {
            store.loading = action.payload;
        }
    }
})

export const createNewPlayer = (username) => {
    return (dispatch) => {
        dispatch(games.actions.setLoading(true))
        if (username) {
            fetch('https://wk16-backend.herokuapp.com/start', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    username
                }),
            })
            .then(res => {
                if (res.ok) {
                    dispatch(games.actions.setError(null))
                    return res.json()
                } else {
                    console.log(res)
                    throw new Error('Ups something went wrong') //res.statusText for example
                }
            })
            .then(data => dispatch(games.actions.setGameStatus(data)))
            .catch(error => dispatch(games.actions.setError('Errormessage here :', error))) //error.message for example
            .finally(() => dispatch(games.actions.setLoading(false)))
        }
    }
}

export const CarryOnGame = (direction) => {
    return (dispatch, getState) => {
        dispatch(games.actions.setLoading(true))
        if (direction) {
            fetch('https://wk16-backend.herokuapp.com/action', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                username: getState().games.username,
                type: 'move',
                direction: direction
                }),
            })
            .then(res => {
                if (res.ok) {
                    dispatch(games.actions.setError(null))
                    return res.json()
                } else {
                    console.log(res)
                    throw new Error('Ups something went wrong') //res.statusText for example
                }
            })
            .then((data) => {
                dispatch(games.actions.saveGameStatus(data))
            })
            .catch(error => dispatch(games.actions.setError('Errormessage here :', error))) //error.message for example
            .finally(() => dispatch(games.actions.setLoading(false)))
        }
    }
}

// export default games